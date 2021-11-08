import { v4 as uuidv4 } from "uuid"

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: uuidv4(), task: action.task, completed: false }]
    case "DELETE":
      return state.filter((todo) => todo.id !== action.id)
    case "TOGGLE":
      console.log(state)
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    case "UPDATE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, task: action.updatedTask } : todo
      )
    default:
      return state
  }
}

export default todoReducer
