import './App.css';
import Todolist from './component/Todolist';
import Container from '@mui/material/Container';
import Todoinput from './component/Todoinput';

function App() {
  return (
    <Container component="main" maxWidth="sm">
      <div className="App">
        Todo-List with MUI
        <Todolist/>
      </div>
    </Container>
  );
}

export default App;
