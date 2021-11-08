import React, { useContext } from "react"
import useToggle from "./hooks/useToggle"
import EditTodoForm from "./EditTodoForm"
import { ListItem } from "@mui/material"
import { ListItemText } from "@mui/material"
import { Checkbox } from "@mui/material"
import { pink } from "@mui/material/colors"
import { IconButton } from "@mui/material"
import { ListItemSecondaryAction } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import { TodosContext } from "./context/todos.context"

const Todo = ({ id, task, completed }) => {
  const [isEditing, toggleIsEditing] = useToggle(false)

  const { dispatch } = useContext(TodosContext)
  return (
    <ListItem style={{ height: "96px" }}>
      {isEditing ? (
        <EditTodoForm task={task} id={id} toggleIsEditing={toggleIsEditing} />
      ) : (
        <>
          <Checkbox
            tabIndex={-1}
            sx={{
              color: pink[800],
              "&.Mui-checked": {
                color: pink[600],
              },
            }}
            checked={completed}
            onClick={() => dispatch({ type: "TOGGLE", id: id })}
          />
          <ListItemText style={{ textDecoration: completed && "line-through" }}>
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton
              aria-label='Delete'
              onClick={() => dispatch({ type: "DELETE", id: id })}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label='Edit' onClick={toggleIsEditing}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  )
}

export default Todo
