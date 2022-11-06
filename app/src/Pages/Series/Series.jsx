import "./Series.css"

import React from 'react';

import GetSeries from '../../Componentes/GetSeries/GetSeries';
export const Series = () => {
  return (
    <div>
      <div className="popularS">
        <h2>Popular Series</h2>
      </div>
      <div className="SeriesContainer">
      <GetSeries />
      </div>
    </div>
  );
};

export default Series;
