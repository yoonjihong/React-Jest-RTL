import { ButtonHTMLAttributes, HTMLProps } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, ...props }: ButtonProps) => {
  return <button {...props}>{children}</button>;
};

export default Button;
