import './App.css';

import { Outlet } from 'react-router-dom';

import Footer from './Componentes/Footer/Footer';
import Nav from './Componentes/Nav/Nav';

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
