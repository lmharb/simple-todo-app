import React from "react"
import useImputState from "./hooks/useInputState"
import { TextField } from "@mui/material"
import { IconButton } from "@mui/material"
import { ListItemSecondaryAction } from "@mui/material"
import EditOffIcon from "@mui/icons-material/EditOff"
import EditOff from "@mui/icons-material/EditOff"

const EditTodoForm = ({ task, updateTodo, id, toggleIsEditing }) => {
  const [value, handleChange, resetValue] = useImputState(task)

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        updateTodo(id, value)
        toggleIsEditing()
      }}
      style={{
        marginLeft: "1rem",
        width: "50%",
      }}
    >
      <TextField
        margin='normal'
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      ></TextField>
      <ListItemSecondaryAction>
        <IconButton onClick={toggleIsEditing}>
          <EditOffIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </form>
  )
}

export default EditTodoForm
