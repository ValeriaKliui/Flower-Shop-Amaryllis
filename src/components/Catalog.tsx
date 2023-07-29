import { CatalogItem } from './CatalogItem';
import { useAppSelector } from '../assets/hooks/hooks';
import { Info } from './Info';
// import { useGetAllItems } from "../assets/hooks/useGetAllItems";
// import { useSelectorCategory, useSelectorSort } from "../slices/filterSlice";
import React from 'react';
import {
  selectFlowers,
  selectStatus,
} from '../slices/flowers/flowersSlice';

export const Catalog: React.FC = () => {
  const flowers = useAppSelector(selectFlowers);
  const status = useAppSelector(selectStatus);
  // const inputValue = useAppSelector((state) => state.input.search);
  // const choosenCategory = useAppSelector(useSelectorCategory);
  // const choosenSort = useAppSelector(useSelectorSort);
  // const items = useAppSelector((state) => state.items.items);
  // const allItems = useGetAllItems();

  // const itemsCategory = items[choosenCategory as keyof Items]
  //   ? items[choosenCategory as keyof Items]
  //   : allItems;

  // const itemsSorted = () => {
  //   if (choosenSort) {
  //     return choosenSort === "name"
  //       ? [...itemsCategory].sort((a, b) =>
  //           a[choosenSort].localeCompare(b[choosenSort])
  //         )
  //       : [...itemsCategory].sort((a, b) => {
  //           return a[choosenSort][0] - b[choosenSort][0];
  //         });
  //   } else return itemsCategory;
  // };

  // const itemsSearched = () => {
  //   const searchValue = inputValue && inputValue.toLowerCase();
  //   if (searchValue && allItems.length > 0) {
  //     return itemsSorted().filter((elem) => {
  //       return elem.name.toLowerCase().includes(searchValue);
  //     });
  //   } else return itemsSorted();
  // };

  return (
    <div className="catalog">
      <div className="wrapper catalog__wrapper">
        {status === 'success' && (
          <h2 className="catalog__title">Choose your Dream Plant</h2>
        )}
        {status === 'success' ? (
          <div className="catalog__items">
            {flowers.map((item) => {
              return <CatalogItem key={item.id} item={item} />;
            })}
          </div>
        ) : (
          <Info
            title="oops..."
            text={
              status === 'failed'
                ? 'something went wrong'
                : 'we dont have this plant yet'
            }
          />
        )}
      </div>
    </div>
  );
};
