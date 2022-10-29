import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import Itemlist from './ItemList';
import { useParams } from 'react-router-dom';
import {getAllProducts, getProductsByCategory} from '../../utils/products'
import './ItemListContainer.css';


const ItemListContainer = ({ greeting }) => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);


 useEffect(() => {
    if (categoryName) {
        getProductsByCategory(categoryName)
        .then((data) => setProducts(data))
        .catch((error) => console.warn(error))
    } else {
        getAllProducts()
        .then((data) => setProducts(data))
        .catch((error) => console.warn(error))
        }
    }, [categoryName])


  return (
    <Container>
      <h1>Productos</h1>
      <h3 className="greeting">{greeting}</h3>
      <Itemlist products={products} />
    </Container>
  );
}


export default ItemListContainer;


