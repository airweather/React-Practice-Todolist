import Calendar from './Calendar';
import Todolist from './Todolist';
import {useState} from 'react';

const Container = () => {
  const today = new Date();

  const [todoList, setTodoList] = useState({});
  const [targetDate, setTargetDate] = useState(today);
  const [selectedDate, setSelectedDate] = useState(today);

  const dateNormalization = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
  }

  return (
    <>
      <h1>
        Container
      </h1>
      <div>{dateNormalization(selectedDate).getFullYear()} {dateNormalization(selectedDate).getMonth()+1} {dateNormalization(selectedDate).getDate()}</div>
      <Calendar targetDate={targetDate} setSelectedDate={setSelectedDate}/>
      <Todolist date={dateNormalization(selectedDate)} todoList={todoList}/>
      </>
  )
}

export default Container;