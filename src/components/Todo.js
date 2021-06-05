import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  // Events
  const deleteHandler = () => {
    // filter existing todos
    // if the element.id does not match the todo.id, then remove it
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  // check if the item that is clicked has the same id as the one in state

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      {/* ternary operator - if todo item is checked then toggle completed on and off */}
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
