import React from "react"
import useInputState from "./hooks/useInputState"
import { Paper } from "@mui/material"
import { TextField } from "@mui/material"

const TodoForm = (props) => {
  const [value, handleChange, resetValue] = useInputState("")

  const { addTodo } = props

  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          addTodo(value)
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
