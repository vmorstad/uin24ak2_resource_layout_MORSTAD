import {Checkbox, ListItemIcon, ListItemText, ListItem, List, TextField, Typography} from '@mui/material'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    document.addEventListener("keydown", function(Event){
      if(Event.key ==="Enter") {
        let todotext = document.getElementById("newtodo").value
        if(todotext) {
          setTodos([...todos, {title: todotext, completed: false}])
          //document.getElementById("newtodo").value = ""

        }
      }
    })
  }, [todos])

  console.log(todos)

  return (
    <>
      <Typography variant="h1" component="h2">Todo</Typography>
      <TextField id="newtodo" variant="outlined" />
    
      <List>
        {todos.map((todo, index) => (
          <ListItem key={index}>
          <ListItemIcon>
            <Checkbox />
          </ListItemIcon>
          <ListItemText primary={todo.title} />
        </ListItem>
        )
        )}
    </>
  )
}

export default App



