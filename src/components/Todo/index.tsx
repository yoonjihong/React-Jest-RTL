import { FC, ReactNode } from 'react';

import AddForm from './AddForm';
import List from './List';

export interface TodoProps {
  children?: ReactNode;
}

interface Todo extends FC<TodoProps> {
  List: typeof List;
  AddForm: typeof AddForm;
}

const Todo: Todo = () => {
  return <div></div>;
};

Todo.List = List;
Todo.AddForm = AddForm;

export default Todo;
