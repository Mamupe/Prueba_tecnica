import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import Detailp from './Pages/Detailp/Detailp';
import Details from './Pages/Details/Details';
import Inicio from './Pages/Inicio/Inicio';
import NotFound from './Pages/NotFound/NotFound';
import Peliculas from './Pages/Peliculas/Peliculas';
import Series from './Pages/Series/Series';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Inicio />} />
          <Route path="peliculas" element={<Peliculas />} />
          <Route path="series" element={<Series />} />
          {/* <Route path="detailp/:id" element={<Detailp />} />
          <Route path="details/:id" element={<Details />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
