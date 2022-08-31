import { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ type = 'text', ...props }: InputProps) => {
  return <input type={type} {...props} />;
};

export default Input;
