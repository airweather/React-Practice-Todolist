import Calendar from './Calendar';
import Todolist from './Todolist';
import {useState} from 'react';

const Container = () => {
  const today = new Date();

  const [todoList, setTodoList] = useState({});

  const zeroTime = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
  }

  return (
    <>
      <h1>
        Container
      </h1>
      <Calendar />
      <Todolist date={zeroTime(today)} todoList={todoList}/>
      </>
  )
}

export default Container;