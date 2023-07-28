import { useEffect, useState, useRef } from "react";
import React from "react";

// import {
//   useAppSelector,
//   useAppDispatch,
// } from '../assets/hooks/hooks';
// import {
//   setChoosenSort,
//   sortOptions,
//   useSelectorSort,
// } from '../slices/filterSlice';

export const Sort: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  // const choosenSort = useAppSelector(useSelectorSort);
  // const dispatch = useAppDispatch();
  // const sortOptnsRef = useRef<HTMLInputElement>(null);
  // const sortRef = useRef<HTMLInputElement>(null);

  // function hidePopUp(event: MouseEvent) {
  //   const elemsClicked = event.composedPath();
  //   if (!elemsClicked.includes(sortOptnsRef.current as Node)) {
  //     elemsClicked.includes(sortRef.current as Node)
  //       ? setIsVisible(true)
  //       : setIsVisible(false);
  //   }
  // }
  // useEffect(() => {
  //   document.body.addEventListener("click", hidePopUp);
  //   return () => document.body.removeEventListener("click", hidePopUp);
  // }, []);

  return (
    <div className="sort">
      {/* <div className="sort" ref={sortRef}> */}
      {/* <p>sort by:</p>
      <p className="sort_choosen" onClick={() => setIsVisible((prev) => !prev)}>
        {choosenSort ? choosenSort : "choose"}
      </p>
      {choosenSort && (
        <div
          className="close"
          onClick={() => {
            setIsVisible((prev) => !prev);
            dispatch(setChoosenSort(null));
          }}
        >
          <svg
            className="close__pic"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
          >
            <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
          </svg>
        </div>
      )}
      <div
        id={!isVisible ? "non-visible" : ""}
        className="sort__options"
        ref={sortOptnsRef}
      >
        {sortOptions.map((e, index) => {
          return (
            <p
              className="sort__option"
              key={index}
              onClick={() => {
                setIsVisible((prev) => !prev);
                dispatch(setChoosenSort(index));
              }}
            >
              {e}
            </p>
          );
        })}
      </div> */}
    </div>
  );
};
