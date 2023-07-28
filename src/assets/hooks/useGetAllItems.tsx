import { useAppSelector } from "../../assets/hooks/hooks";

interface ItemAtCart {
  id: string;
  price: string | string[];
  size: string | string[];
  amount: number;
  parentId?: string;
  name: string;
  src: string;
}

export const useGetAllItems = () => {
  const items = useAppSelector((state) => state.items.items);
  const allItems: ItemAtCart[] = Object.values(items).flat();
  return allItems;
};
