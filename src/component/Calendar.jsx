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

    const firstDate = new Date(date.getFullYear(), date.getMonth()+1, 1);
    const lastDate = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();

    const arr = Array.from({length: 42}, (_, i)=>
      {
        const day = i - firstDate.getDate();

        const data = new Date(date.getFullYear(), date.getMonth(), day);

        if(day > 0 && day <= lastDate) {
          return {date:data,
            todo:[0, 0, 0]
          }
        }
        else{
          return {}
        }
      }
    );
    setMonth(arr);
  }

  const getDateInfo = (data) => {
    if(data) {
      return new Date(data).getDate();
    }
    return ;
  }

  useEffect(() => {
    setCalendar(date);
  }, [])

  return (
    <>
      <Todolist date={today}/>
      <div>{today.getFullYear()}. {today.getMonth()+1}</div>
      <div className={styles.container}>
        {month && month.map((item, index) => {
            return (
              <>
                <div className={styles.calendar} key={index}>
                  {getDateInfo(item.date)}
                </div>
              </>
            )
          })
        }
      </div>
    </>
  );
};

export default Calender;