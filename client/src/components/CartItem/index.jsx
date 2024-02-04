import React from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch hook from Redux
import { removeFromCart, updateCartQuantity } from '../../redux/actions'; // Import Redux actions
import { idbPromise } from '../../utils/helpers';

const CartItem = ({ item }) => {
  const dispatch = useDispatch(); // Redux useDispatch hook

  const removeFromCartHandler = (item) => {
    dispatch(removeFromCart(item._id)); // Dispatch action to remove item from cart
    idbPromise('cart', 'delete', { ...item });
  };

  const onChangeHandler = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch(removeFromCart(item._id)); // Dispatch action to remove item from cart
      idbPromise('cart', 'delete', { ...item });
    } else {
      dispatch(updateCartQuantity(item._id, parseInt(value))); // Dispatch action to update cart quantity
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });
    }
  };

  return (
    <div className="flex-row">
      <div>
        <img src={`/images/${item.image}`} alt="" />
      </div>
      <div>
        <div>
          {item.name}, ${item.price}
        </div>
        <div>
          <span>Qty:</span>
          <input
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={onChangeHandler}
          />
          <span
            role="img"
            aria-label="trash"
            onClick={() => removeFromCartHandler(item)}
          >
            🗑️
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
