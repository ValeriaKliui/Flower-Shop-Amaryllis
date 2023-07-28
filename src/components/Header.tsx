import Logo from "./Logo";
import { MyButton } from "./UI/MyButton/MyButton";
import plant from "../assets/icons/plant.svg";
import { Link } from "react-router-dom";
// import { useAppSelector } from "../assets/hooks/hooks";
import React from "react";

const Header: React.FC = () => {
  const totalPrice = 100;
  const cartAmount = 100;
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
            text={totalPrice + " BYN"}
            amountAtCart={cartAmount}
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
