import React, { useContext } from "react"
import useInputState from "./hooks/useInputState"
import { Paper } from "@mui/material"
import { TextField } from "@mui/material"
import { DispatchContext } from "./context/todos.context"

const TodoForm = () => {
  const [value, handleChange, resetValue] = useInputState("")
  const dispatch = useContext(DispatchContext)

  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          dispatch({ type: "ADD", task: value })
          resetValue()
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          margin='normal'
          label='Add New Todo'
          fullWidth
        />
      </form>
    </Paper>
  )
}

export default TodoForm
