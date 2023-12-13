import {useState} from 'react';
import styles from './Todolist.module.css';

export default function Todolist(props) {
  const {date, todoLists, setTodoLists} = props;

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

    const todo = [...todos, {id, text, date}]

    console.log(todo);
    console.log('todo list : ',todoLists);

    setTodos(todo);

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