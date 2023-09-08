import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { add_to_cart } from '../features/cartSlice';
import { useLocation } from 'react-router-dom';


function Product(props) {

  const { title, price, image } = props;
  const product = props;
  const dispatch = useAppDispatch();
  const cart_items = useAppSelector(store => store.cart.cart);
  const location = useLocation();

    const handle_add_to_cart = () => {
        console.log('add to cart');
        dispatch(add_to_cart(product));
    }

    const handle_remove_from_cart = () => {
        console.log('remove from cart');
        dispatch(add_to_cart(product));
    }


  return (
    <div className='products'>
        <section>

            <article>
              <div className='img'>
                <img src={image} alt={title} />
              </div>
            </article>

            <article>
              <div className='title'>
                <h1>{title}</h1>
              </div>
            </article>

            <article>
                <div className='price'>
                  <h2>{price}</h2>
                </div>
                <Button
                  onClick={handle_add_to_cart}
                  variant='danger'>
                  Add to cart
                </Button>

                {location.pathname === '/cart' &&
                <Button onClick={handle_remove_from_cart} variant='danger'>
                  Remove from cart
                </Button>}

                {(cart_items.length > 0 &&
                  cart_items.find(item => item.id === product.id)) &&
                <Button onClick={handle_remove_from_cart} variant='danger'>
                  Remove from cart
                </Button>}
                
            </article>

        </section>
    </div>
  )
}

export default Product