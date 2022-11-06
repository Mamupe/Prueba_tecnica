import './GetMovies.css';

import React, { Suspense } from 'react';
import { useEffect, useState } from 'react';

export const GetMovies = () => {
  const [moviesList, setMoviesList] = useState([]);
  useEffect(() => {
    (async () => {
      let data = await fetch('http://localhost:8080/entries?programType=movie').then(
        (res) => res.json(),
      );
      setMoviesList(data);
    })();
  }, []);

  let listaMovies = moviesList;
  listaMovies.sort((a, b) => {
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
    return 0;
  });

  let filteredMovies = listaMovies.filter(movie => movie.releaseYear >= "2010")

  return (
    <>
      {filteredMovies.map((movie) => (
        <div className="divMoviesCont" key={movie.title}>
          <img className="imgMovies" src={movie.images['Poster Art'].url} />
          <h3>{movie.title}</h3>
          
        </div>
      ))}
    </>
  );
};

export default GetMovies;
