# Prueba_tecnica
El primer problema que encontré fue al levantar el .json, daba un error que solucioné metiendo el endpoint 100 entre corchetes.

- Mostrar los primeros 20 resultados (`entries`). No es necesario paginar para ver más resultados. 
    Para mostrar los 20 primeros resultados y habiendo hecho el fetch correspondiente usé el metodo .filter para filtrar los 20 primeros.
- Mostrar sólo si contienen el atributo `releaseYear` >= `2010`.
    Tabién en este caso he usado el .filter para quedarme con los resultados que en la clave `releaseYear` eran mayores o iguales a 2010.
- Ordenar los resultados por el atributo `title` de manera ascendente con órden alfanumérico.
    Para el orden alfanumérico he ultilizado el metodo .sort y dos condicionales.
- Para la página de "Series" usar resultados con `programType` igual a `series` y a `movie`
    Simplemente a la hora de hacer la peticion he añadio en la url después de entries ?programType=series o movie para poder diferenciar la peticion en cada caso.
- Los atributos que debes utilizar para mostrar en la caja de cada resultado son:
  - `title`
  - `images` → `Poster Art` → `url`
    En este paso, aparentemente sencillo,  para poder acceder a las imágenes tuve que meter entre corchetes `Poster Art`para poder salvar el espacio que tiene.
- Al posicionar el mouse sobre cada resultado la caja debe reducir su opacidad y mostrar borde blanco.
    Para esto he usado la propiedad hover en css con una opacidad de 0.8.
- Al hacer click sobre el titulo deberá abrirse un popup mostrando la información completa:
  - `title`
  - `description`
  - `releaseYear`
  - `images` → `Poster Art` → `url`
    He utilizado una propiedad de React llamada Popup que facilita mucho la tarea de generar una ventana emergente.

    En cuanto a la página de carga, aún que he estado investigando no he tenido el tiempo suficiente para poder mirarlo y entenderlo 100%.
    Como pequeña mejora, he añadido un Navlink a Demo Streaming (nav) para poder volver a la página inicio al clicar.
    Sólamente había 7 series y 1 pelicula con la url de la imagen rota, como eran pocas he cambiado las url en data.json para que las pintase.