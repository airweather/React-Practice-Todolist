import {Button, Grid, Typography } from '@mui/material';

function complete() {
  alert('완료했나요?');
};

export default function Todolist() {
  return (
    <>
    <div>
      <Grid container sx={{m:3}}>
        <Grid item xs>
          <Typography variant="h5" component="h5" sx={{m:1}}>할일1</Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" sx={{m:1 ,mr:5}} color="success" onClick={complete}>완료</Button>
        </Grid>
      </Grid>
    </div>
    </>
  );

};