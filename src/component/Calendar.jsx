import {useEffect, useState} from 'react';
// import dayjs from 'dayjs';
import Todolist from './Todolist';
import styles from './Calendar.module.css';

const isWeekend = (date) => {
  const day = date.day();

  return day === 0 || day === 6;
};


const Calender = () => {
  // const [value, setValue] = useState(dayjs());
  // const today = value.$y +'.'+(value.$M+1)+'.'+value.$D
  const today = new Date();

  const [month, setMonth] = useState();
  const [date, setDate] = useState(today);

  const setCalendar = (date) => {

    const firstDate = new Date(date.getFullYear(), date.getMonth()+1, 1).getDay();
    const lastDate = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();

    console.log(lastDate)
    
    const arr = Array.from({length: 42}, (_, i)=>
      {
        const day = i - firstDate;

        if(day > 0 && day <= lastDate) {
          return {date:day}
        }
        else{
          return {}
        }
      }
    );
    setMonth(arr);
  }

  useEffect(() => {
    setCalendar(date);
  }, [])

  return (
    <>
      <Todolist date={today}/>
      <div>{today.getTime()}</div>
      <div className='calendar-container'>
        {month && month.map((item, index) => {
            return (
              <div className="calendar" key={index}>
                {item.date}
              </div>
            )
          })
        }
      </div>
    </>
  );
};

export default Calender;