import './GetMovies.css';

import React from 'react';
import { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';

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

  let filteredMovies = listaMovies.filter((movie) => movie.releaseYear >= '2010');
  let filterTwenty = filteredMovies.filter((item, i) => i < 20);

  return (
    <>
      {filterTwenty.map((movie) => (
        <div className="divMoviesCont" key={movie.title}>
          <img className="imgMovies" src={movie.images['Poster Art'].url} />
          <Popup trigger={<button className="btn">{movie.title}</button>} modal nested>
            {(close) => (
              <div className="pop">
                <h2>{movie.title}</h2>
                <p>{movie.description}</p>
                <h3>Year: {movie.releaseYear}</h3>
                <img className="imgSeries" src={movie.images['Poster Art'].url} />
                <button onClick={(e) => close()}>X</button>
              </div>
            )}
          </Popup>
        </div>
      ))}
    </>
  );
};

export default GetMovies;
