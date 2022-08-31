import { FormHTMLAttributes } from 'react';
import { ChangeEvent, FC, useState } from 'react';

import Button from './Button';
import Input from './Input';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  className?: string;
}

interface Form extends FC<FormProps> {
  Input: typeof Input;
  Button: typeof Button;
}

const Form: Form = ({ children, onSubmit, ...props }) => {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit?.(e);
      }}
      {...props}
    >
      {children}
    </form>
  );
};

Form.Input = Input;
Form.Button = Button;

export default Form;
