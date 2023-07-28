// import {
//   useAppSelector,
//   useAppDispatch,
// } from '../assets/hooks/hooks';
// import {
//   setChoosenCategory,
//   categories,
//   useSelectorCategory,
// } from '../slices/filterSlice';
import React from "react";

export const Categories: React.FC = () => {
  // const choosenCategory = useAppSelector(useSelectorCategory);
  // const dispatch = useAppDispatch();

  return (
    <div className="categories">
      {/* {categories.map((e, index) => {
        return (
          <div
            key={index}
            onClick={() => dispatch(setChoosenCategory(index))}
            className={
              e === choosenCategory ? "category category_choosen" : "category"
            }
          >
            {e}
          </div>
        );
      })} */}
    </div>
  );
};
