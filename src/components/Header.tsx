import Logo from './Logo';
import { MyButton } from './UI/MyButton/MyButton';
import plant from '../assets/icons/plant.svg';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../assets/hooks/hooks';
import React from 'react';
import { selectFlowersAtCart } from '../slices/cart/flowersAtCart';

const Header: React.FC = () => {
  const flowersAtCart = useAppSelector(selectFlowersAtCart);
  const totalPrice = flowersAtCart.reduce(
    (acc, elem) => acc + +elem.price * elem.amount,
    0
  );
  const totalAmount = flowersAtCart.reduce(
    (acc, elem) => acc + elem.amount,
    0
  );
  return (
    <header className="header">
      <img src={plant} alt="plant" className="header__plant" />
      <div className="wrapper header__wrapper">
        <Link to="/">
          <Logo />
        </Link>
        <Link to="/cart">
          <MyButton
            isDivided={true}
            text={totalPrice ? totalPrice + ' BYN' : 'cart'}
            amountAtCart={totalAmount > 0 && totalAmount}
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
