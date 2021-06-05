// import React from node modules
import React from "react";
import { isCompositeComponentWithType } from "react-dom/test-utils";

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
  // Javascript code and function
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  // to stop page refreshing everytime you submit a todo item
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
      // in practice, use proper id instead of math.random
    ]);
    // reset state back to 0
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      {/* on change on input means that everytime the input changes, it runs the inputTextHandler function */}
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
