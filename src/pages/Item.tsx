import { useParams } from 'react-router-dom';
import { useGetAllItems } from '../assets/hooks/useGetAllItems';

interface ItemP {
  id: string;
  price: string | string[];
  size: string | string[];
  amount: number;
  parentId?: string;
  name: string;
  src: string;
}

export const Item: React.FC = () => {
  const { pageId } = useParams();
  const allItems = useGetAllItems();
  const item = allItems.filter((e) => pageId && +e.id === +pageId)[0];
  if (!item) return <div className="wrapper">loading</div>;
  const { src, name, price, size }: ItemP = item;

  return (
    <div className="item">
      <div className="wrapper item__wrapper">
        <div className="item__media">
          <img src={`/${src}`} alt={name} className="item__pic" />
        </div>
        <div className="item__properties">
          <h2>{name}</h2>
          <div className="item__prices">
            <p>prices: </p>
            {Array.isArray(price) &&
              price.map((price) => {
                return (
                  <p className="item__price" key={price}>
                    {price} BYN
                  </p>
                );
              })}
          </div>
          <div className="item__sizes">
            <p>sizes:</p>
            {Array.isArray(size) &&
              size.map((size) => {
                return (
                  <p className="item__size" key={size}>
                    {size}
                  </p>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
