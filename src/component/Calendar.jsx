import {useState} from 'react';
// import dayjs from 'dayjs';
import Todolist from './Todolist';

const isWeekend = (date) => {
  const day = date.day();

  return day === 0 || day === 6;
};


const Calender = () => {
  // const [value, setValue] = useState(dayjs());
  // const today = value.$y +'.'+(value.$M+1)+'.'+value.$D
  const [month, setMonth] = useState();
  const today = new Date();

  const setCalendar = (date) => {
    
    const arr = Array.from({length: 42}, (_, i)=>
      {
        return i
      }
    );

    console.log(arr)
  }

  setCalendar(today)

  return (
    <>
      <Todolist date={today}/>
      <div>{today.getTime()}</div>
      <button>이동</button>
    </>
  );
};

export default Calender;