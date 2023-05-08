import "./App.css";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import { useState, useRef } from "react";
const monkTodo = [
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "방 청소해야 함",
    createDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "덕질하기",
    createDate: new Date().getTime(),
  },
];
function App() {
  const [todo, setTodo] = useState(monkTodo);
  const idRef = useRef(3);
  //초기값을 3으로 설정함

  //아이템 생성 함수 -> onCreate
  const onCreate = (content) => {
    //새로운 아이템을 추가해줌
    const newItem = {
      id: idRef.current,
      content,
      isDone: false,
      createDate: new Date().getTime(),
    };
    //newItem을 기존 데이터에 추가
    setTodo([newItem, ...todo]);
    idRef.current += 1;
    //id 3의 아이템을 생성 후, 아이디의 값을 1 증가시킴
    //다음에 만드는 아이템은 4가 됨
  };

  //아이템 수정 함수
  const onUpdate = (targetId) => {
    //targetId 필요
    setTodo(
      todo.map((it) => {
        if (targetId === it.id) {
          return { ...it, isDone: !it.isDone };
        } else {
          return it;
        }
      })
    );
  };

  //아이템 삭제 함수
  const onDelete = (targetId) => {
    //targetId 이용
    //targtgetId가 일치하지 않는 것만 보여줌
    setTodo(todo.filter((it) => it.id !== targetId));
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
