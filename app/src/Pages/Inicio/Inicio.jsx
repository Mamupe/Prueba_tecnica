import './Inicio.css';

import React from 'react';
import { Link } from 'react-router-dom';

export const Inicio = () => {
  return (
    <div className="containerIni">
      <div className='popular'><h2>Popular Titles</h2></div>
      <div className="divContainerItems">
        <Link to="/series">
          <div className="divSeries">
            <img
              className="imgSerie"
              src="https://res.cloudinary.com/dghnwllrc/image/upload/v1667652523/claqueta_SERIES_slby9f.jpg"
              alt="imagenSerie"
            />
            Popular series
          </div>
        </Link>
        <Link to="/peliculas">
          <div className="divPelis">
            <img
              className="imgMovie"
              src="https://res.cloudinary.com/dghnwllrc/image/upload/v1667652515/claqueta_MOVIES_tikbaq.jpg"
              alt="imagenMovie"
            />
            Popular Movies
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Inicio;
