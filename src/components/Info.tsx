import { Link } from 'react-router-dom';
import { MyButton } from './UI/MyButton/MyButton';
import emptyCartPic from '../assets/icons/withered-plant.png';
import React from 'react';

type InfoProps = {
  title: string;
  text: string;
};

export const Info: React.FC<InfoProps> = ({ title, text }) => {
  return (
    <div className="info">
      <h2>{title}</h2>
      <div className="info__text">
        <p>{text}</p>
      </div>
      <img
        src={emptyCartPic}
        alt="cart is empty"
        className="info__pic"
      />
      <Link to="/">
        <MyButton text="back to main page" />
      </Link>
    </div>
  );
};
