import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap"

import './scss/App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';

import productos from './components/Productos'


const App = () => {
  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <Header />
          <main className="contenedor sombra">
            <h2>Productos</h2>
            <section className="grid">
              {
                productos.map(item =>
                  <ItemListContainer
                    key={item.id}
                    nombreProducto={item.producto}
                    precioProducto={item.precio}
                    stockProducto={item.cantidad}
                    imgProducto={item.imagen}
                  />
                )
              }
            </section>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
