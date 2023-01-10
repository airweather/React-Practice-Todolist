import {Button, TextField, Grid, FormControl } from '@mui/material';
import { useState } from 'react';


export default function Todoinput() {
  const [todo, setTodo] = useState([]);

  const push = () => {
    console.log(TextField);
  };

  return (
    <div>
      <Grid container sx={{m:3}}>
        <Grid item xs>
          <FormControl sx={{ width: '50ch'}}>
            <TextField id="outlined-basic" label="해야할 일을 입력하세요" variant="outlined" />
          </FormControl>
        </Grid>
        <Grid item>
          <Button variant="contained" sx={{m:1 ,mr:5}} onClick={push}>입력</Button>
        </Grid>
      </Grid>
      <hr/>
    </div>
  )
};