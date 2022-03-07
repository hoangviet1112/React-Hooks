import React from "react";
import { actions, useStore } from "./store";
import { addTodo, deleteTodo } from "./store/actions";

export default function GlobalStateDemo() {
  const [state, dispatch] = useStore()

  const { todos, todoInput } = state

  const handleAdd = () => {
    dispatch(addTodo(todoInput))
  }

  return (
    <div>
      <h1>Hello Enouvoers</h1>
      <input 
        value={todoInput}
        placeholder="Enter To Do..."
        onChange={e => {
          dispatch(actions.setTodoInput(e.target.value))
        }}
      />
      <button onClick={handleAdd}>Add</button>
      {
        todos.map((todo, index) => {
          return <li key={index}>{todo} <span onClick={() => {dispatch(deleteTodo(index))}}>X</span></li>
        })
      }
    </div> 
  )
}