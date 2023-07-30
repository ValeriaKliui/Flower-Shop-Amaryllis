import { useAppDispatch } from '../assets/hooks/hooks';
import React, { useState } from 'react';
import { fetchFlowers } from '../slices/flowers/asyncActions';

export const Categories: React.FC = () => {
  const categories = ['all', 'indoor', 'outdoor'];
  const [choosenCategory, setChoosenCategory] = useState('all');
  const dispatch = useAppDispatch();
  return (
    <div className="categories">
      {categories.map((e, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              setChoosenCategory(e);
              dispatch(
                fetchFlowers({
                  category: index === 0 ? '' : categories[index],
                })
              );
            }}
            className={
              e === choosenCategory
                ? 'category category_choosen'
                : 'category'
            }
          >
            {e}
          </div>
        );
      })}
    </div>
  );
};
