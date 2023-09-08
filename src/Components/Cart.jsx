import { useSelector, useDispatch } from "react-redux"
import { Container } from "react-bootstrap"
import Product from "./Product";

function Cart() {
  const cart_items = useSelector(store => store.cart.cart);
  const dispatch = useDispatch();
  console.log('cart_items', cart_items);


  return (
    <div>
        <h1>Cart</h1>
        <Container>
          {cart_items.length === 0 && <h1>Cart is empty</h1>}
            {cart_items.map((item) => (
              <Product key={item.id} {...item} />
            ))}
        </Container>
    </div>
  )
}

export default Cart