import './Peliculas.css';

import React from 'react';

import GetMovies from '../../Componentes/GetMovies/GetMovies';

export const Peliculas = () => {
  return (
    <div>
      <div className="popularM">
        <h2>Popular Series</h2>
      </div>
      <div className="moviesContainer">
        <GetMovies />
      </div>
    </div>
  );
};

export default Peliculas;
