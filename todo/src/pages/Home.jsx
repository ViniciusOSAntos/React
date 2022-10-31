import React from 'react'
import { List } from '@mui/material';
import { Container } from '@mui/system';
import Form from '../components/Form'
import TodoItem from '../components/TodoItem';
import { useState } from 'react';

export default function Home() {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
      setTodos([...todos, todo])
    }

    const deleteTodo = (id) => {
      var filtered = todos.filter((todo) => todo.id !== id)
      setTodos(filtered)
    }
    const editTodo = (id, newText) => {
      var todosArray = [...todos]
      todosArray.splice(id, 1, {text: newText, id: id})
      setTodos(todosArray)
    }
  return (
    <Container maxWidth="sm" style={{ marginTop: "1em" }}>
      <Form addTodo={ addTodo }/>
      <List sx={{ width: '100%', marginTop: "1em" }}>
          {todos.map( (todo) => 
            <div key={todo.id} style={{ marginTop: "1em" }}>
              <TodoItem  editTodo = {editTodo} todo={todo} deleteTodo={deleteTodo}/>  

            </div>
          ) }
      </List>
      <a href="https://google.com" target="_blank" rel="noreferrer">
        Click para teste no GA -> Redireciona pra o Google
      </a>  
    </Container>
  )
}
 