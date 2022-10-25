import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';
import Itemlist from './ItemList';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../utils/products';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  const obtenerProductos = () => {
    getProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => alert(error));
  };

  useEffect(() => {
    obtenerProductos();
  }, [products]);

  return (
    <Container>
      <h1>Productos</h1>
      <h3 className="greeting">{greeting}</h3>
      <Itemlist products={products} />
    </Container>
  );
};

export default ItemListContainer;
