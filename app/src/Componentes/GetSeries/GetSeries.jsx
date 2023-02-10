import './GetSeries.css';

import React from 'react';
import { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';

import Loading from '../../Componentes/Loading/Loading';

export const GetSeries = () => {
  const [seriesList, setSeriesList] = useState([]);

  useEffect(() => {
    (async () => {
      let data = await fetch(
        'https://series-moviles-server-a7vf.onrender.com/entries?programType=series',
      ).then((res) => res.json());
      setSeriesList(data);
    })();
  }, []);

  let listaSeries = seriesList;
  listaSeries.sort((a, b) => {
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
    return 0;
  });

  let filteredSeries = listaSeries.filter((serie) => serie.releaseYear >= '2010');
  let filterTwenty = filteredSeries.filter((item, i) => i < 20);

  return (
    <>
      {filterTwenty.map((serie) => (
        <div className="divSeriesCont" key={serie.title}>
          <img className="imgSeries" src={serie.images['Poster Art'].url} />
          <Popup trigger={<button className="btn">{serie.title}</button>} modal nested>
            {(close) => (
              <div className="pop">
                <h2>{serie.title}</h2>
                <p>{serie.description}</p>
                <h3>Year: {serie.releaseYear}</h3>
                <img className="imgSeries" src={serie.images['Poster Art'].url} />
                <button onClick={(e) => close()}>X</button>
              </div>
            )}
          </Popup>
        </div>
      ))}
    </>
  );
};

export default GetSeries;
