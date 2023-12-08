import Calendar from './Calendar';
import Todolist from './Todolist';
import {useState} from 'react';

const Container = () => {
  const today = new Date();

  const [todoList, setTodoList] = useState({});
  const [targetDate, setTargetDate] = useState(today);

  const zeroTime = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
  }

  return (
    <>
      <h1>
        Container
      </h1>
      <Calendar targetDate={targetDate}/>
      <Todolist date={zeroTime(targetDate)} todoList={todoList}/>
      </>
  )
}

export default Container;