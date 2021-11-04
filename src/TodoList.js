import React, { Fragment } from "react"
import Todo from "./Todo"
import { Paper } from "@mui/material"
import { List } from "@mui/material"

import { Divider } from "@mui/material"

const TodoList = ({ todos, deleteTodo, toggleTodo, updateTodo }) => {
  return (
    <Paper>
      <List>
        {todos.map((todo, i) => (
          <Fragment key={todo.id}>
            <Todo
              id={todo.id}
              task={todo.task}
              completed={todo.completed}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
              updateTodo={updateTodo}
            />
            {i < todos.length - 1 && <Divider />}
          </Fragment>
        ))}
      </List>
    </Paper>
  )
}

export default TodoList
