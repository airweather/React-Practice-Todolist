import './App.css';
import Todolist from './component/Todolist';
import Container from '@mui/material/Container';
import Calendar from './component/Calendar';
// import Todoinput from './component/Todoinput';s

function App() {
  return (
    <Container component="main" maxWidth="sm">
      <div className="App">
        Todo-List with MUI
        <Todolist/>
      </div>
      <Calendar/>
    </Container>
  );
}

export default App;
