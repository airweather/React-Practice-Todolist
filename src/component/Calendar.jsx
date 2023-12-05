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
  const [todoList, setTodoList] = useState({});

  const setTodoListDate = (date) => {
    const firstDate = new Date(date.getFullYear(), date.getMonth()+1, 1);
    const lastDate = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();

    const todoListObj = {};

    for(let i = 0; i < lastDate; i++) {
      const data = new Date(date.getFullYear(), date.getMonth(), i);
      todoListObj[i] = data;
      todoListObj[i].todolist = [];
    }

    console.log(todoListObj)
  }

  setTodoListDate(today)

  const setCalendar = (date) => {

    const firstDate = new Date(date.getFullYear(), date.getMonth()+1, 1);
    const lastDate = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();

    const arr = Array.from({length: 42}, (_, i)=>
      {
        const day = i - firstDate.getDate();

        const data = new Date(date.getFullYear(), date.getMonth(), day);

        if(day > 0 && day <= lastDate) {
          return {date:data,
            todo:["a", "b", "c","d","e","f"]
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

  const getTodoList = (data) => {

    const arr = Array.from({length: 4}, (_, i)=> {

      if(data[i]) {
        return <div>{data[i]}</div>;
      }
      return <div></div>;
    }

   )
    // console.log(arr);
   return arr;
  }

  const zeroTime = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
  }

  useEffect(() => {
    setCalendar(date);
  }, [])

  return (
    <>
      <Todolist date={zeroTime(today)} todoList={todoList}/>

      <div>{today.getFullYear()}. {today.getMonth()+1}</div>
      <div className={styles.container}>
        {month && month.map((item, index) => {
            return (
              <div className={styles.calendar}>
                <div className={styles.calendar} key={index}>
                  {getDateInfo(item.date)}
                </div>
                  {<div>{item.todo && getTodoList(item.todo)}</div>}
              </div>
            )
          })
        }
      </div>
    </>
  );
};

export default Calender;