import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<ItemDetailContainer greeting={'Brienvenidos a mi tienda'} />} />
      <Route path='/category/:categoryName' element={<ItemDetailContainer greeting={'Brienvenidos a mi tienda'} />} />
      <Route path='/item/:id' element={<ItemDetailContainer />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout' element={<Checkout/>} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
