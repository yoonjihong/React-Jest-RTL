import { useEffect, useState } from 'react';

import Todo from '~components/Todo';
import AddForm from '~components/Todo/AddForm';

// import asdf from '~components/asdf';

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

      <Test />
    </div>
  );
};

export default Home;

const Test = () => {
  useEffect(() => {});

  return <div>asdfsd</div>;
};
