import React, { createContext } from "react"
import { useLocalStorageReducer } from "../hooks/useLocalStorageReducer"
import todoReducer from "../reducers/todo.reducer"

const defaultTodos = [
  { id: 1, task: "Buy new shirt", completed: false },
  { id: 2, task: "Wash the car", completed: false },
]

export const TodosContext = createContext()
export const DispatchContext = createContext()

export const TodosProvider = (props) => {
  const [todos, dispatch] = useLocalStorageReducer(
    "todos",
    defaultTodos,
    todoReducer
  )
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  )
}
