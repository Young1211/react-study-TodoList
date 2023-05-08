import "./TodoEditor.css";
import { useState, useRef } from "react";

const TodoEditor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const inputRef = useRef("");
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    //만약 content의 길이가 없다면
    if (!content) {
      //내용이 공백이라면
      inputRef.current.focus();
      return;
    } else {
      onCreate(content);
      setContent("");
    }
  };

  return (
    <div className="TodoEditor">
      <h3>새로운 Todo 작성하기 🖊 </h3>
      <div className="editor-wrapper">
        <input
          type="text"
          placeholder="새로운 Todo..."
          value={content}
          onChange={onChangeContent}
          ref={inputRef}
          onKeyDown={onKeyDown}
        ></input>
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
};

export default TodoEditor;
