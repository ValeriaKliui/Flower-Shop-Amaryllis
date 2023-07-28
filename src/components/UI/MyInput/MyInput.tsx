import { useDispatch } from 'react-redux';
import classes from './MyInput.module.scss';
import { ChangeEvent, useRef } from 'react';
import { setInputedValue } from '../../../slices/inputSLice';

type MyInputProps = {
  name: string;
  onChange: (e: ChangeEvent) => {};
  placeholder: string;
  value: string;
};

export const MyInput: React.FC<MyInputProps> = ({
  name,
  onChange,
  placeholder,
  value,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  function onClickClear() {
    dispatch(setInputedValue(''));
    inputRef.current?.focus();
  }
  return (
    <div className={classes.MyInput__wrapper}>
      <input
        ref={inputRef}
        type="text"
        className={classes.MyInput}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
      {value && (
        <svg
          onClick={onClickClear}
          className={[classes.MyInput__close__pic, 'close__pic'].join(
            ' '
          )}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
        >
          <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
        </svg>
      )}
    </div>
  );
};
