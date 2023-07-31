import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../assets/hooks/hooks";
import { MyButton } from "./UI/MyButton/MyButton";
import React from "react";
import { addToCartAsync, increaseAmount } from "../slices/cart/asyncActions";
import { selectFlowersAtCart } from "../slices/cart/flowersAtCart";

type Item = {
  id: number;
  price: string[];
  size: string[];
  amount?: number;
  name: string;
  src: string;
  category: string;
};

interface CatalogItemProps {
  item: Item;
}

export const CatalogItem: React.FC<CatalogItemProps> = ({ item }) => {
  const { id, src, name, price, size } = item;
  const [choosenSize, setChoosenSize] = useState(size[0]);
  const [choosenPrice, setChoosenPrice] = useState(price[0]);
  const dispatch = useAppDispatch();
  const flowersACart = useAppSelector(selectFlowersAtCart);
  const alreadyAtCart = flowersACart.find(
    (item) => item.name === name && item.size === choosenSize
  );

  return (
    <div key={id} className="catalog__item">
      <a href={`${item.id}`}>
        <img
          src={src}
          alt={name}
          className="item__pic"
          width="230px"
          height="300px"
        />
      </a>
      <h3 className="item__name">{name}</h3>
      <div className="choose-size">
        {size.map((e, index) => (
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
          amountAtCart={alreadyAtCart?.amount}
          isDivided={!!alreadyAtCart?.amount && true}
          onClick={() => {
            alreadyAtCart
              ? dispatch(
                  increaseAmount({
                    id: alreadyAtCart.id!,
                    amount: alreadyAtCart.amount + 1,
                  })
                )
              : dispatch(
                  addToCartAsync({
                    ...item,
                    size: choosenSize,
                    price: choosenPrice,
                    amount: 1,
                  })
                );
          }}
        />
      </div>
    </div>
  );
};
