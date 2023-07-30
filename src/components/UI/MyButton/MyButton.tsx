import classes from './MyButton.module.scss';
import shoppingCartPic from '../../../assets/icons/shopping-cart.svg';
import React from 'react';

type MyButtonProps = {
  isDivided?: boolean;
  amountAtCart?: number | boolean | null;
  text: string;
  onClick?: () => void;
  isShadowed?: boolean;
};

export const MyButton: React.FC<MyButtonProps> = ({
  isDivided,
  amountAtCart,
  text,
  onClick,
  isShadowed,
}) => {
  return (
    <>
      {isDivided ? (
        <button className={classes.MyButton} onClick={onClick}>
          <span className={classes.MyButton_divided__left}>
            {text}
          </span>
          <span className={classes.MyButton_divided__right}>
            <img src={shoppingCartPic} alt="shoppingCartPic" />
            {amountAtCart}
          </span>
        </button>
      ) : (
        <button
          className={
            isShadowed
              ? [classes.MyButton, classes.MyButton_shadowed].join(
                  ' '
                )
              : classes.MyButton
          }
          onClick={onClick}
        >
          {text}
        </button>
      )}
    </>
  );
};
