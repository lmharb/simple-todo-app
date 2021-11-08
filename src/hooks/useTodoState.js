import { useLocalStorageState } from "./useLocalStorageState"
import { v4 as uuidv4 } from "uuid"

// eslint-disable-next-line import/no-anonymous-default-export
export default (initialTodos) => {
  const [todos, setTodos] = useLocalStorageState("todos", initialTodos)

  return {
    todos,
    addTodo: (newTodoTask) => {
      setTodos([
        ...todos,
        { id: uuidv4(), task: newTodoTask, completed: false },
      ])
    },
    deleteTodo: (id) => {
      const updatedTodos = todos.filter((todo) => todo.id !== id)
      setTodos(updatedTodos)
    },
    toggleTodo: (id) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
      setTodos(updatedTodos)
    },
    updateTodo: (id, updatedTask) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, task: updatedTask } : todo
      )
      setTodos(updatedTodos)
    },
  }
}
