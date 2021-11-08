import React, { createContext, useReducer } from "react"
import todoReducer from "../reducers/todo.reducer"

const defaultTodos = [
  { id: 1, task: "Buy new shirt", completed: "false" },
  { id: 2, task: "Wash the car", completed: "false" },
]

export const TodosContext = createContext()
export const DispatchContext = createContext()

export const TodosProvider = (props) => {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos)
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  )
}
