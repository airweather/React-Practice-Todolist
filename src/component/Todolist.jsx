import {useState} from 'react';
import styles from './Todolist.module.css';

const getDate = () => {
  const date = new Date();
  const today = {
    year : date.getFullYear(),
    month : date.getMonth(),
    date : date.getDate(),
    day : date.getDay(),
    hour : date.getHours(),
    min : date.getMinutes(),
    sec : date.getSeconds(),
  }
  return today;
}

export default function Todolist() {
  const [todos, setTodos] = useState([]);
  

  let text = '';
  let id = todos.length;

  const complete = (props) => {
    const num = props;
    const newTodos = [];
    const complete = window.confirm('완료했나요?');

    if(complete) {
      todos.map((todo) => {
        if(todo.id !== num) {
          newTodos.push(todo);
        }
      })
    }
    setTodos(newTodos);
  };
  
  const push = () => {
    if(text ==='') return;
    const today = getDate();
    setTodos([...todos, {id, text, date:today}])
    id++;
   
  };

  const textInput = (e) => {
    text = e.target.value;
  };
  
  const TodoInput = () => {
    return (
      <div className={styles.container}>
        <div>
            <input onChange={textInput} />
        </div>
        <div>
          <button onClick={push}>입력</button>
        </div>
      </div>
    )
  }

  const InputList = () => {
    return (
      <div>
        {todos.map((todo) => 
          <div key={todo.id} className={styles.container}>
            <div>
              {todo.text}
            </div>
            <div>
              <button onClick={()=>complete(todo.id)}>완료</button>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <TodoInput/>
      <hr/>
      <InputList/>
    </>
  );

};