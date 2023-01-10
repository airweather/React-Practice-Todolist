import {useState} from 'react';
import dayjs from 'dayjs';
import {TextField} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
// import { CalendarPicker } from '@mui/x-date-pickers';

const isWeekend = (date) => {
  const day = date.day();

  return day === 0 || day === 6;
};


const Calender = () => {
  const [value, setValue] = useState(dayjs());
  const today = value.$y +'.'+(value.$M+1)+'.'+value.$D
  
  return (
  <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        orientation="landscape"
        openTo="day"
        value={value}
        shouldDisableDate={isWeekend}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
   <p>{today}</p>
  </>
  );
};

export default Calender;