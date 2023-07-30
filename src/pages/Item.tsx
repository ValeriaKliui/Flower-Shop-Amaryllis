import { useParams } from 'react-router-dom';
import { useAppSelector } from '../assets/hooks/hooks';
import { selectFlowers } from '../slices/flowers/flowersSlice';
import React, { useEffect, useState } from 'react';
import { MyButton } from '../components/UI/MyButton/MyButton';

export const Item: React.FC = () => {
  const { pageId } = useParams();
  const flowers = useAppSelector(selectFlowers);
  const [index, setIndex] = useState(0);
  const flower = flowers.filter((e) => pageId && e.id === +pageId)[0];
  const [choosenSize, setChoosenSize] = useState('');

  useEffect(() => {
    if (flower) setChoosenSize(flower.size[0]);
  }, [flower]);

  if (!flower) return <div className="wrapper">loading...</div>;
  return (
    <div className="item">
      <div className="wrapper item__wrapper">
        <div className="item__media">
          <img
            src={`/${flower.src}`}
            alt={flower.name}
            className="item__pic"
          />
        </div>
        <div className="item__properties">
          <h2 className="item__name">{flower.name}</h2>
          <div className="item__sizes">
            <p>sizes:</p>
            {Array.isArray(flower.size) &&
              flower.size.map((size, index) => {
                return (
                  <p
                    className={
                      choosenSize === size
                        ? 'item__size size_choosen'
                        : 'item__size'
                    }
                    key={size}
                    onClick={() => {
                      setIndex(index);
                      setChoosenSize(size);
                    }}
                  >
                    {size}
                  </p>
                );
              })}
          </div>
          <div className="item__prices">
            <h3 className="price">{flower.price[index]} BYN</h3>
          </div>
          <MyButton text="add to cart" />
        </div>
      </div>
    </div>
  );
};
