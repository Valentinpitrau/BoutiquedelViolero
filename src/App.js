
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout';
import ItemListContainer from './components/ItemList/ItemListContainer';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<ItemListContainer greeting={'Brienvenidos a mi tienda'} />} />
      <Route path='/category/:categoryName' element={<ItemListContainer greeting={'Brienvenidos a mi tienda'} />} />
      <Route path='/item/:id' element={<ItemDetailContainer />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout' element={<Checkout/>} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
