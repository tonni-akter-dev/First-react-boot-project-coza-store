import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Gallary from './components/gallary/Gallary';
import Product from './components/Product/Product';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
 <Header></Header>
 <Gallary></Gallary>
 <Product></Product>
 <Footer></Footer>
    </div>
  );
}
export default App;
