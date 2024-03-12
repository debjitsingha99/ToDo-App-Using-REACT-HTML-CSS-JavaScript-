import { useState } from "react";
import styles from "./AddTodo.module.css";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handelNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handelDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handelAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container text-center">
      <div className="row ds-row ">
        <div className="col-6">
          <input
            className={styles.todoInput}
            type="text"
            placeholder="Enter ToDo Here"
            value={todoName}
            onChange={handelNameChange}
          />
        </div>
        <div className="col-4">
          <input
            className={styles.todoInput}
            type="date"
            value={dueDate}
            onChange={handelDateChange}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success ds-button"
            onClick={handelAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
