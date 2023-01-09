import {Button, TextField, Grid, FormControl } from '@mui/material';


export default function Todoinput() {
  return (
    <>
      <div>
        <Grid container sx={{m:3}}>
          <Grid item xs>
            <FormControl sx={{ width: '50ch'}}>
              <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
            </FormControl>
          </Grid>
          <Grid item>
            <Button variant="contained" sx={{m:1 ,mr:5}}>입력</Button>
          </Grid>
        </Grid>
      </div>
      <hr/>
    </>
  )
};