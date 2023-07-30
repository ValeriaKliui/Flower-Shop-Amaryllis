import { useAppDispatch } from '../assets/hooks/hooks';
// import {
//   removeFromCart,
//   decreaseAmount,
//   increaseAmount,
// } from '../slices/itemsAtCartSLice';
import React from 'react';
import {
  decreaseAmount,
  deleteFlower,
  increaseAmount,
} from '../slices/cart/asyncActions';

type CartItemProps = {
  id: number;
  src: string;
  name: string;
  price: string[] | string;
  amount: number;
  size: string[] | string;
};

export const CartItem: React.FC<CartItemProps> = ({
  id,
  src,
  name,
  price,
  amount,
  size,
}) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="cart__item__block">
        <img
          src={src}
          alt=""
          width="150px"
          className="cart_item__pic"
        />
        <div className="cart__item__text">
          <h3>{name}</h3>
          <p>{size}</p>
        </div>
      </div>
      <div className="amount">
        <div
          className="decrease"
          onClick={() =>
            amount > 1
              ? dispatch(
                  decreaseAmount({
                    id,
                    amount: amount - 1,
                  })
                )
              : dispatch(deleteFlower(id))
          }
        >
          <svg
            className="close__pic delete__pic"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="200px"
            transform="rotate(135)"
          >
            <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25  L 40.9375 43.78125 L 43.78125 40.9375   Z" />
          </svg>
        </div>
        <p className="text_bold">{amount}</p>
        <div
          className="increase"
          onClick={() =>
            dispatch(
              increaseAmount({
                id,
                amount: amount + 1,
              })
            )
          }
        >
          <svg
            className="close__pic delete__pic"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="200px"
            transform="rotate(45)"
          >
            <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
          </svg>
        </div>
      </div>

      <p>{price} BYN</p>
      <div
        className="close"
        onClick={() => dispatch(deleteFlower(id))}
      >
        <svg
          className="close__pic delete__pic"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="200px"
        >
          <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
        </svg>
      </div>
    </>
  );
};
