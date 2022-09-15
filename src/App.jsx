import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap"
import './scss/App.scss';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from './components/Cart';
import Payment from './components/Payment';
import Nosotros from './components/Nosotros'
import CartContextProvider from './context/CartContext';

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div id="page-container">
          <div id="content-wrap">
            <Header />
            <main className="contenedor sombra">
              <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/categoria/:nameCategory' element={<ItemListContainer />} />
                <Route path='/categoria/:nameCategory/:idItem' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/payment' element={<Payment />} />
                <Route path='/nosotros' element={<Nosotros />} />
              </Routes>
            </main>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
