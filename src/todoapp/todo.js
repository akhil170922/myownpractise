import React, { useState } from "react";
import ListItem from "./ListItem";
export default function TodoApp() {
  const [todo, setToDo] = useState("");
  const [todoList, setToDoList] = useState([]);
  const handleChange = (event) => {
    setToDo(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let tempList = todoList;
    tempList.push(todo);
    setToDoList(tempList);
    console.log(todoList);
    setToDo("");
  };
  const handleDeleteAll = () => {
    setToDoList([]);
  };
  return (
    <div>
      Todo App
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add todo..."
          value={todo}
          onChange={handleChange}
        />

        <button type="submit">Add</button>
        <button onClick={handleDeleteAll}> Delete All</button>
        <ul>
          {todoList.map((element, index) => (
            <ListItem key={index} name={element}/>
            //<li key={index}>{element}</li>
          ))}
        </ul>
      </form>
    </div>
  );
}
