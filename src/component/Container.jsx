import Calendar from './Calendar';
import Todolist from './Todolist';
import {useState} from 'react';

const Container = () => {
  const today = new Date();

  const [targetDate, setTargetDate] = useState(today);
  const [selectedDate, setSelectedDate] = useState(today);
  const [todoLists, setTodoLists] = useState([]);
  
  const dateNormalization = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
  }

  const monthlyTodoList = (date) => {
    const firstDate = new Date(date.getFullYear(), date.getMonth()+1, 1);
    const lastDate = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();

    const todoListData = [];

    for(let i = 1; i <= lastDate; i++) {
      const todoDate = new Date(date.getFullYear(), date.getMonth(), i);

      todoListData.push(
        {
          date:todoDate,
          list:[]
        }
      )
    }

    return todoListData;
  
  }


  return (
    <>
      <h1>
        Container
      </h1>
      <div>
        <div>{dateNormalization(selectedDate).getFullYear()} {dateNormalization(selectedDate).getMonth()+1} {dateNormalization(selectedDate).getDate()}</div>
        <Calendar targetDate={targetDate} setSelectedDate={setSelectedDate} todoLists={todoLists}/>
        <Todolist date={dateNormalization(selectedDate)} todoLists={todoLists} setTodoLists={setTodoLists}/>
      </div>
      </>
  )
}

export default Container;