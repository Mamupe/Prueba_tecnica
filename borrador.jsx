import './GetSeries.css';
import Loading from "../../Componentes/Loading/Loading";
import React from 'react';
import { useEffect, useState } from 'react';

export const GetSeries = () => {
  const [seriesList, setSeriesList] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    setTimeout(
      function () {
        (async () => {
          let data = await fetch('http://localhost:8080/entries?programType=series').then(
            (res) => res.json(),
          );
          setIsloading(false);
          setSeriesList(data);
        })();
      },
      2000,
      [],
    );
  });

  let listaSeries = seriesList;
  listaSeries.sort((a, b) => {
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
    return 0;
  });

  let filteredSeries = listaSeries.filter(serie => serie.releaseYear >= "2010")
/*   let filterTwenty = filteredSeries.filter(filteredSeries => filteredSeries.length === 20);  */

  return (
    <>
      {isLoading &&
        filteredSeries.map((serie) => (
          <div className="divSeriesCont" key={serie.title}>
            <img className="imgSeries" src={serie.images['Poster Art'].url} />
            <h3>{serie.title}</h3>
            <Loading />
          </div>
        ))}
      {!isLoading &&
        filteredSeries.map((serie) => (
          <div className="divSeriesCont" key={serie.title}>
            <img className="imgSeries" src={serie.images['Poster Art'].url} />
            <h3>{serie.title}</h3>
          </div>
        ))}
    </>
  );
};

export default GetSeries;
