import {Button, Grid, Typography, FormControl, TextField} from '@mui/material';
import {useState} from 'react';

const getDate = () => {
  const date = new Date();
  const today = {
    year : date.getFullYear(),
    month : date.getMonth(),
    date : date.getDate(),
    day : date.getDay(),
    hour : date.getHours(),
    min : date.getMinutes(),
    sec : date.getSeconds(),
  }
  return today;
}

export default function Todolist() {
  const [todos, setTodos] = useState([]);
  

  let text = '';
  let id = todos.length;

  const complete = (props) => {
    const num = props;
    const newTodos = [];
    const complete = window.confirm('완료했나요?');

    if(complete) {
      todos.map((todo) => {
        if(todo.id !== num) {
          newTodos.push(todo);
        }
      })
    }
    setTodos(newTodos);
  };
  
  const push = () => {
    if(text ==='') return;
    const today = getDate();
    setTodos([...todos, {id, text, date:today}])
    id++;
   
  };

  const textInput = (e) => {
    text = e.target.value;
  };
  
  const TodoInput = () => {
    return (
      <Grid container sx={{m:3}}>
        <Grid item xs>
          <FormControl sx={{ width: '50ch'}}>
            <TextField 
              autoFocus
              id="outlined-basic" 
              label="해야할 일을 입력하세요" 
              variant="outlined"
              onChange={textInput} />
          </FormControl>
        </Grid>
        <Grid item>
          <Button variant="contained" sx={{m:1 ,mr:5}} onClick={push}>입력</Button>
        </Grid>
      </Grid>
    )
  }

  const InputList = () => {
    return (
      <div>
        {todos.map((todo) => 
          <Grid container sx={{m:3}} key={todo.id}>
            <Grid item xs>
              <Typography variant="h5" component="h5" sx={{m:1}}>
                {todo.text}
              </Typography>
              
            </Grid>
            <Grid item>
              <Button variant="contained" sx={{m:1 ,mr:5}} color="success" onClick={()=>complete(todo.id)}>완료</Button>
            </Grid>
          </Grid>
        )}
      </div>
    );
  };
  
  return (
    <>
      <TodoInput/>
      <hr/>
      <InputList/>
    </>
  );

};