
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import TodoListPage from './Pages/TodoListPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/todolist' element={<TodoListPage></TodoListPage>} />
      </Routes>
    </div>
  );
}

export default App;
