import {useEffect, useState} from 'react';
import styles from './Calendar.module.css';

const isWeekend = (date) => {
  const day = date.day();

  return day === 0 || day === 6;
};


const Calender = (props) => {
  const {setSelectedDate} = props;

  const today = new Date();

  const [month, setMonth] = useState();
  const [date, setDate] = useState(today);
  const [todoList, setTodoList] = useState({});

  // const setTodoListDate = (date) => {
  //   const firstDate = new Date(date.getFullYear(), date.getMonth()+1, 1);
  //   const lastDate = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();

  //   const todoListObj = {};

  //   for(let i = 0; i < lastDate; i++) {
  //     const data = new Date(date.getFullYear(), date.getMonth(), i);
  //     todoListObj[i] = data;
  //     todoListObj[i].todolist = [];
  //   }

  //   console.log(todoListObj)
  // }

  // setTodoListDate(today)
  const calendarHeader = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const setCalendar = (date) => {

    const firstDate = new Date(date.getFullYear(), date.getMonth()+1, 1);
    const lastDate = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();


    const arr = Array.from({length: 42}, (_, i)=>
      {
        const day = i - firstDate.getDate();

        const data = new Date(date.getFullYear(), date.getMonth(), day);

        if(day > 0 && day <= lastDate) {
          return {date:data,
            // todo:["a", "b", "c","d","e","f"]
            todo:[]
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
   return arr;
  }

  const datePick = (date) => {
    setSelectedDate(date)
  }

  useEffect(() => {
    setCalendar(date);
  }, [])

  return (
    <>
      <div>{today.getFullYear()}. {today.getMonth()+1}</div>
      <div className={styles.container}>
        {
          calendarHeader.map((item, index) => {
            return (
              <div className={styles.calendar} key={index}>{item}</div>
            )
            })
        }
        {month && month.map((item, index) => {
            return (
              <div className={styles.calendar} key={index}>
                <div className={styles.calendar} key={index} onClick={()=>datePick(item.date)} style={{cursor:"pointer"}}>
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