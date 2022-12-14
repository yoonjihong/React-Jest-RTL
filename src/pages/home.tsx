import { useState } from 'react';

import Todo from '~components/Todo';
import AddForm from '~components/Todo/AddForm';

const Home = () => {
  const [list, setList] = useState(['첫번째 아이템', '두번째 아이템']);

  return (
    <div>
      <Todo.List list={list} />

      <br />
      <hr />
      <br />

      <AddForm
        afterSubmit={data => {
          setList(prev => [...prev, data]);
        }}
      />
    </div>
  );
};

export default Home;
