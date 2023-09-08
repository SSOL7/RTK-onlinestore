import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../features/Productslice';
import Product from './Product';

function List() {
    const products = useSelector(state => state.products.data);
    const cart_items = useSelector(store => store.cart.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        if (products.length === 0) dispatch(fetchProducts());
    }, [dispatch, products]);

    console.log('products', products);

  return (
    <div>
        <h1>List</h1>
        <ul>
            {products.map((product) => (<Product key={product.id} {...product}
            cart_items={cart_items}
            />))}
        </ul>

    </div>
  )
}

export default List