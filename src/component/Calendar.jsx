import {useState} from 'react';
import dayjs from 'dayjs';

const isWeekend = (date) => {
  const day = date.day();

  return day === 0 || day === 6;
};


const Calender = () => {
  const [value, setValue] = useState(dayjs());
  const today = value.$y +'.'+(value.$M+1)+'.'+value.$D
  
  return (
  <>
    
   <p>{today}</p>
   <button>이동</button>
  </>
  );
};

export default Calender;