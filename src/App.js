import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap"
import './scss/App.scss';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";


const App = () => {
  return (
    <BrowserRouter>
      <div id="page-container">
        <div id="content-wrap">
          <Header />
          <main className="contenedor sombra">
            <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/categoria/:idCategory' element={<ItemListContainer />} />
              <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
