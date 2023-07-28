import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../assets/hooks/hooks";
// import {
//   addExistToCart,
//   addNewToCart,
//   useSelectorItemsAtCart,
// } from "../slices/itemsAtCartSLice";
import { MyButton } from "./UI/MyButton/MyButton";
import React from "react";
import { addToCartAsync, increaseAmount } from "../slices/cart/flowersAtCart";

type Item = {
  id: number;
  price: string[];
  size: string[];
  // amount: number;
  // parentId?: string;
  name: string;
  src: string;
  category: string;
};

interface CatalogItemProps {
  item: Item;
}

export const CatalogItem: React.FC<CatalogItemProps> = ({ item }) => {
  const { id, src, name, price, size, category } = item;
  const [choosenSize, setChoosenSize] = useState(size[0]);
  const [choosenPrice, setChoosenPrice] = useState(price[0]);
  // const [amountAtCart, setAmountAtCart] = useState<number | null>(0);
  const dispatch = useAppDispatch();
  // // const itemsAtCart = useAppSelector(useSelectorItemsAtCart).itemsAtCart;
  // const itemsAtCart = [];
  // let itemAtCart = itemsAtCart.find((e) => {
  //   if (e.name === name && e.size === choosenSize) return e;
  //   else return null;
  // });

  // useEffect(() => {
  //   if (itemAtCart) {
  //     setAmountAtCart(itemAtCart.amount);
  //   } else setAmountAtCart(null);
  // }, [choosenSize, itemsAtCart]);

  // function checkAndAdd(item: Item) {
  //   const itemAtCart = itemsAtCart.find(
  //     (e) => e.name === item.name && e.size === item.size
  //   );
  //   if (!!itemAtCart) {
  //     setAmountAtCart(itemAtCart.amount + 1);
  //     dispatch(
  //       addExistToCart({ ...itemAtCart, amount: itemAtCart.amount + 1 })
  //     );
  //   } else {
  //     setAmountAtCart(1);
  //     dispatch(addNewToCart({ ...item, amount: 1 }));
  //   }
  // }

  return (
    <div key={id} className="catalog__item">
      <img
        src={src}
        alt={name}
        className="item__pic"
        width="230px"
        height="300px"
      />
      <h3 className="item__name">{name}</h3>
      <div className="choose-size">
        {Array.isArray(size) &&
          size.map((e, index) => (
            <div
              className={choosenSize === e ? "size size_choosen" : "size"}
              key={index}
              onClick={() => {
                setChoosenSize(e);
                setChoosenPrice(price[index]);
              }}
            >
              {e}
            </div>
          ))}
      </div>
      <div className="item__info">
        <h3 className="text_bright ">{choosenPrice} BYN</h3>
        <MyButton
          text="add"
          amountAtCart={100}
          isDivided={!!100 && true}
          onClick={() => {
            dispatch(
              addToCartAsync({
                ...item,
                size: choosenSize,
                price: choosenPrice,
              })
            );
            // dispatch(
            //   increaseAmount({ id, size: choosenSize, price: choosenPrice })
            // );
            // checkAndAdd({
            //   ...item,
            //   size: choosenSize,
            //   price: choosenPrice,
            // });
          }}
        />
      </div>
    </div>
  );
};
