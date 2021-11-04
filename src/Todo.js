import React from "react"
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

const Todo = ({ task, completed, deleteTodo, id, toggleTodo, updateTodo }) => {
  const [isEditing, toggleIsEditing] = useToggle(false)

  return (
    <ListItem style={{ height: "96px" }}>
      {isEditing ? (
        <EditTodoForm
          task={task}
          updateTodo={updateTodo}
          id={id}
          toggleIsEditing={toggleIsEditing}
        />
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
            onClick={() => toggleTodo(id)}
          />
          <ListItemText style={{ textDecoration: completed && "line-through" }}>
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label='Delete' onClick={() => deleteTodo(id)}>
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
