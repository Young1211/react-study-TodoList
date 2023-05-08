import TodoItem from "./TodoItem";
import "./TodoList.css";
import { useState, useRef } from "react";

const TodoList = ({ todo, onUpdate, onDelete }) => {
  //App에서 전달받은 할 일 목록의 데이터
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    // console.log(e.target.value);
    setSearch(e.target.value);
  };
  //setSearch

  const getSearchResult = () => {
    //필터 사용함
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };

  return (
    <div className="TodoList">
      <h4>Todo List🌱</h4>
      <input
        type="text"
        placeholder="새로운 검색어를 입력하세요"
        className="searchbar"
        onChange={onChangeSearch}
        value={search}
      />
      <div className="list-wrapper">
        {
          /* todoItem, todo 배열을 순회하면서, 요소의 갯수만큼 아이템 생성 */
          getSearchResult().map((it) => (
            <TodoItem
              key={it.id}
              {...it}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          ))
        }
      </div>
    </div>
  );
};

export default TodoList;
