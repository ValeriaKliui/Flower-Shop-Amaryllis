import { selectFlowersAtCart } from '../../slices/cart/flowersAtCart';
import { useAppSelector } from './hooks';

export const usePriceAmount = () => {
  const flowersAtCart = useAppSelector(selectFlowersAtCart);
  const totalPrice = Number(
    flowersAtCart
      .reduce((acc, elem) => acc + +elem.price * elem.amount, 0)
      .toFixed(1)
  );
  const totalAmount = flowersAtCart.reduce(
    (acc, elem) => acc + elem.amount,
    0
  );
  return { totalPrice, totalAmount };
};
