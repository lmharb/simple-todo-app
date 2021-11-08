import React, { Fragment, useContext } from "react"
import Todo from "./Todo"
import { Paper } from "@mui/material"
import { List } from "@mui/material"
import { TodosContext } from "./context/todos.context"

import { Divider } from "@mui/material"

const TodoList = () => {
  const todos = useContext(TodosContext)

  return (
    <Paper>
      <List>
        {todos.length === 0 ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "30vh",
            }}
          >
            <span
              style={{
                color: "darkgray",
                fontSize: "1.5rem",
                fontWeight: "bold",
                justifyContent: "center",
              }}
            >
              You currently have no TODOS
            </span>
          </div>
        ) : (
          todos.map((todo, i) => (
            <Fragment key={todo.id}>
              <Todo id={todo.id} task={todo.task} completed={todo.completed} />
              {i < todos.length - 1 && <Divider />}
            </Fragment>
          ))
        )}
      </List>
    </Paper>
  )
}

export default TodoList
