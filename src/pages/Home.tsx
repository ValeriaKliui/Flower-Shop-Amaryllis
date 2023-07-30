import { MainScreen } from '../components/MainScreen';
import { Catalog } from '../components/Catalog';
import { Categories } from '../components/Categories';
import { Sort } from '../components/Sort';
import { MyInput } from '../components/UI/MyInput/MyInput';
import {
  useAppSelector,
  useAppDispatch,
} from '../assets/hooks/hooks';
import { handleChange } from '../slices/input/inputSLice';
import React from 'react';

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const inputValue = useAppSelector((state) => state.input.search);

  return (
    <>
      <MainScreen />
      <div className="wrapper search">
        <Categories />
        <div className="filter_sort">
          <MyInput
            name="search"
            value={inputValue}
            onChange={(e) =>
              dispatch(
                handleChange((e.target as HTMLInputElement).value)
              )
            }
            placeholder="Search..."
          />
          <Sort />
        </div>
      </div>
      <Catalog />
    </>
  );
};
