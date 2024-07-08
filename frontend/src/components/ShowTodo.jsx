import React, { useEffect, useState } from "react";
import {
  Button,
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const ShowTodo = ({todos, setTodos}) => {

  const deleteTodo = async (id) => {
    const response = await fetch("http://localhost:3000/todos", {
      method: "DELETE",
      body: JSON.stringify({ id: id }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    getTodos();
  };

  const getTodos = async () => {
    const response = await fetch("http://localhost:3000/todos");
    const data = await response.json();
    setTodos(data);
  };


  useEffect(() => {
    getTodos();
  }, []);


  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));


  return (
    <div>
      <TableContainer sx={{ width: 700 }} component={Paper}>
        <Table sx={{ width: 700 }}>
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Title</StyledTableCell>
              <StyledTableCell align="center">Description</StyledTableCell>
              <StyledTableCell align="center">Delete</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {todos.map((todo) => {
              return (
                <TableRow>
                  <TableCell align="center">{todo.title}</TableCell>
                  <TableCell align="center">{todo.description}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="outlined"
                      onClick={() => deleteTodo(todo.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ShowTodo;
