import Calendar from './Calendar';
import Todolist from './Todolist';
import {useState} from 'react';

const Container = () => {
  const today = new Date();

  const [todoLists, setTodoLists] = useState({});
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
      <Calendar targetDate={targetDate} setSelectedDate={setSelectedDate} todoLists={todoLists}/>
      <Todolist date={dateNormalization(selectedDate)} todoLists={todoLists}/>
      </>
  )
}

export default Container;