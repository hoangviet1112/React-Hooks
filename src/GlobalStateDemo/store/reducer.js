import { ADD_TODO, DELETE_TODO, SET_TODO_INPUT } from "./constants"

const initialState = {
  todos: [],
  todoInput: '',
}

function reducer(state, action) {
  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload
      }
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        todoInput: ""
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter((todo, index) => {
          return index !== action.payload
        })]
      }
    default: 
      throw new Error('Invalid action.')
  }
}

export default reducer
export { initialState }