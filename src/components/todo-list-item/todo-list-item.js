import React, {useState} from 'react';

import './todo-list-item.css';

const TodoListItem = ({ label, remove }) => {
  const [isDone, setIsDone] = useState(false);
  const [isImportant, setIsImportant] = useState(false);
  
  const handleItem = () => {
    setIsDone((prev) => !prev);
  };

  const handleImportant = () => {
    setIsImportant((prev) => !prev);
  };

  const important = isImportant && "important";
  const done = isDone && "done";

  return (
    <span className={`todo-list-item ${done}`}>
      <span
        className={`todo-list-item-label ${important}`}
        onClick={handleItem}>
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right"
              onClick={handleImportant}>
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right"
              onClick={() => remove(label)}>
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default TodoListItem;
