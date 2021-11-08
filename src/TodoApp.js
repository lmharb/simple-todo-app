import React, { useContext } from "react"
import TodoList from "./TodoList"
import TodoForm from "./TodoForm"
import { Typography } from "@mui/material"
import { Paper } from "@mui/material"
import { AppBar } from "@mui/material"
import { Toolbar } from "@mui/material"
import { Grid } from "@mui/material"
import { TodosProvider } from "./context/todos.context"

const TodoApp = () => {
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
          <TodosProvider>
            <TodoForm />
            <TodoList />
          </TodosProvider>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default TodoApp
