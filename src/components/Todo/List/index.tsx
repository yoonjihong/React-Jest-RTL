interface ListProps {
  list: string[];
}

const List = ({ list }: ListProps) => {
  return (
    <div>
      <h1>TODO 리스트</h1>

      <div className="list">
        {list.map((v, i) => (
          <div key={v + 'i'}>
            {v}
            <div className="actions">
              <button>수정</button>
              <button>삭제</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
