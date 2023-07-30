import Logo from './Logo';
import { MyButton } from './UI/MyButton/MyButton';
import plant from '../assets/icons/plant.svg';
import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import { usePriceAmount } from '../assets/hooks/usePriceAmount';

const Header: React.FC = () => {
  const totalAmount = usePriceAmount().totalAmount;
  const totalPrice = usePriceAmount().totalPrice;
  const location = useLocation();
  const isCart = location.pathname.includes('cart');

  return (
    <header className="header">
      <img src={plant} alt="plant" className="header__plant" />
      <div className="wrapper header__wrapper">
        <Link to="/">
          <Logo />
        </Link>
        {!isCart && (
          <Link to="/cart">
            <MyButton
              isDivided={true}
              text={totalPrice > 0 ? totalPrice + ' BYN' : 'cart'}
              amountAtCart={totalAmount > 0 && totalAmount}
            />
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
