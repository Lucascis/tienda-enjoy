import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap"

import './scss/App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';


const App = () => {
  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <Header />
          <main className="contenedor sombra">
            <ItemListContainer />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
