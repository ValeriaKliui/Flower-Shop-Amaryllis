import React from 'react';
import { MyButton } from '../components/UI/MyButton/MyButton';
import cleanPic from '../assets/icons/trash.svg';
import cartPic from '../assets/icons/shopping-cart_dark.svg';
import { CartItem } from '../components/CartItem';
import {
  useAppSelector,
  useAppDispatch,
} from '../assets/hooks/hooks';
import { Link } from 'react-router-dom';
import { Info } from '../components/Info';
import { selectFlowersAtCart } from '../slices/cart/flowersAtCart';

export const Cart: React.FC = () => {
  const flowersAtCart = useAppSelector(selectFlowersAtCart);
  const totalPrice = flowersAtCart.reduce(
    (acc, elem) => acc + +elem.price * elem.amount,
    0
  );
  const totalAmount = flowersAtCart.reduce(
    (acc, elem) => acc + elem.amount,
    0
  );
  const dispatch = useAppDispatch();

  return (
    <div className="cart ">
      <div className="wrapper cart__wrapper">
        {flowersAtCart.length > 0 ? (
          <>
            <div className="cart_top">
              <div className="cart_top__text">
                <img src={cartPic} alt="your cart" />
                <h2>your cart</h2>
              </div>
              <div className="cart_top__clean">
                <p>clean cart</p>
                <img src={cleanPic} alt="clean cart" />
              </div>
            </div>
            <div className="cart__items">
              {flowersAtCart.map((item) => {
                return (
                  <CartItem
                    key={item.id}
                    id={item.id}
                    src={item.src}
                    name={item.name}
                    price={item.price}
                    amount={item.amount}
                    size={item.size}
                  ></CartItem>
                );
              })}
            </div>
            <div className="cart_info">
              <p>
                plants to order:{' '}
                <span className="text_bold">{totalAmount}</span>
              </p>
              <p>
                cost:
                <span className="text_bold text_bright">
                  {' '}
                  {totalPrice} BYN
                </span>
              </p>
            </div>
            <div className="cart__buttons">
              <Link to="/">
                <MyButton text="back to main" isShadowed={true} />
              </Link>
              <MyButton text="order now" />
            </div>
          </>
        ) : (
          <Info
            title="cart is empty"
            text="probably, you haven't ordered any plants yet. to order something, visit our main page."
          />
        )}
      </div>
    </div>
  );
};
