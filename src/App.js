
import './App.css';
import NavBar from '../src/components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout';
import ItemListContainer from './components/ItemList/ItemListContainer';
import { useEffect } from 'react';
import {doc, getFirestore, getDoc, collection, getDocs} from 'firebase/firestore';
import { CartProvider } from './context/CartContext';


function App() {


  return (
    <BrowserRouter>
    <CartProvider>
    <NavBar />
    <Routes>
      <Route path='/' element={<ItemListContainer greeting={'Brienvenidos a mi tienda'} />} />
      <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Brienvenidos a mi tienda'} />} />
      <Route path='/item/:id' element={<ItemDetailContainer />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout' element={<Checkout/>} />
    </Routes>
    </CartProvider>
    </BrowserRouter>
    
  );
}

export default App;
