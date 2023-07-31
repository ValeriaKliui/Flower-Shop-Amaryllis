import { CatalogItem } from "./CatalogItem";
import { useAppSelector } from "../assets/hooks/hooks";
import { Info } from "./Info";
import React from "react";
import { selectFlowers, selectStatus } from "../slices/flowers/flowersSlice";
import { selectSort } from "../slices/sort/sortSlice";

export const Catalog: React.FC = () => {
  const flowers = useAppSelector(selectFlowers);
  const status = useAppSelector(selectStatus);
  const inputValue = useAppSelector((state) => state.input.search);
  const choosenSort = useAppSelector(selectSort);

  const flowersInputFiltered = flowers.filter((flower) =>
    flower.name.toLowerCase().includes(inputValue)
  );

  const itemsSorted = () => {
    if (choosenSort) {
      return choosenSort === "name"
        ? [...flowersInputFiltered].sort((a, b) =>
            a[choosenSort].localeCompare(b[choosenSort])
          )
        : [...flowersInputFiltered].sort((a, b) => {
            return a[choosenSort][0] - b[choosenSort][0];
          });
    } else return flowersInputFiltered;
  };

  return (
    <div className="catalog">
      <div className="wrapper catalog__wrapper">
        {status === "success" && itemsSorted().length > 0 && (
          <h2 className="catalog__title">Choose your Dream Plant</h2>
        )}
        {status === "success" && itemsSorted().length > 0 ? (
          <div className="catalog__items">
            {itemsSorted().map((item) => {
              return <CatalogItem item={item} key={item.id} />;
            })}
          </div>
        ) : (
          <Info
            title="oops..."
            text={
              status === "failed"
                ? "something went wrong"
                : "we dont have this plant yet"
            }
          />
        )}
      </div>
    </div>
  );
};
