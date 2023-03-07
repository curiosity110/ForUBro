import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { delete_from_cart, increment_qty, decrement_qty } from '../../store/reducers/cartReducer';


function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotal = useSelector((state) => state.cart.cartTotal);
  const delete_item = (id) => {
    dispatch(delete_from_cart({
      id,
    }));
  };
  const increment = (id) => {
    dispatch(increment_qty(id));
  };
  const decrement = (id) => {
    dispatch(decrement_qty(id));
  };

  return (
    <div className='card-container cart-wrapper'>
      <h1 className='cart-title'>Cart</h1>
      <div className='cart-list'>
        {cartItems.length !== 0 ? (
          <>
            <ul>
              {cartItems.map((item) => {
                return (
                  <li key={item.id}>
                    <button onClick={() => delete_item(item.id)}>x</button>
                    <p>{item.title}</p>
                    <div className='item-quantity'>
                      <button onClick={() => decrement(item.id)}>-</button>
                      <p>{item.quantity}</p>
                      <button onClick={() => increment(item.id)}>+</button>
                    </div>
                    <p className='item-price'>
                      {item.price.toFixed(2) + ' CHF'}
                    </p>
                    <p className='item-price'>
                      {item.total.toFixed(2) + ' CHF'}
                    </p>
                  </li>
                );
              })}
            </ul>
            <h2 className='cart-total'>
              Total {cartTotal.toFixed(2) + ' CHF'}
            </h2>
          </>
        ) : (
          <p>
            <strong>Your cart is empty</strong>
          </p>
        )}
      </div>
    </div>
  );
}

export default Cart;
