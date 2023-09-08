import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useAppDispatch } from '../app/hooks';
import { RemoveItemFromCart } from '../features/cartSlice';

function CartProduct(props) {

  const { title, price, image } = props;
  const product = props;
  const dispatch = useAppDispatch();

    const handleRemoveFromCart = () => {
        console.log('removed from cart');
        dispatch(RemoveItemFromCart(product));
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
                  onClick={handleRemoveFromCart}
                  variant='danger'>
                  Add to cart
                </Button>
                <Button
                    onClick={handleRemoveFromCart}
                    variant='danger'
                >
                    Remove from cart
                </Button>
            </article>

        </section>
    </div>
  )
}

export default CartProduct