import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../features/Productslice';
import Product from './Product';

function List() {
    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    console.log('products', products);

  return (
    <div>
        <h1>List</h1>
        <ul>
            {products.map((product) => (<Product key={product.id} {...product} />))}
        </ul>

    </div>
  )
}

export default List