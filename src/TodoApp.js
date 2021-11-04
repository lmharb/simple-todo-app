import React, { useState, useEffect } from "react"
import TodoList from "./TodoList"
import TodoForm from "./TodoForm"
import { Typography } from "@mui/material"
import { Paper } from "@mui/material"
import { AppBar } from "@mui/material"
import { Toolbar } from "@mui/material"
import { Grid } from "@mui/material"
import useTodoState from "./hooks/useTodoState"

const TodoApp = () => {
  const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]")
  const { todos, addTodo, deleteTodo, updateTodo, toggleTodo } =
    useTodoState(initialTodos)

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <Paper
      style={{
        padding: "O",
        margin: "0",
        height: "100vh",
        background: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar color='secondary' position='static' style={{ height: "64px" }}>
        <Toolbar>
          <Typography color='inherit'>TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent='center' style={{ marginTio: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
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
            <TodoList
              todos={todos}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
              updateTodo={updateTodo}
            />
          )}
        </Grid>
      </Grid>
    </Paper>
  )
}

export default TodoApp
