import React, {useState} from 'react';
import './App.css';

import TodoView from './pages/todo'

function App() {
  const [onTodo, setOnTodo] = useState(true)
  return (
    <div className="App">
      <button onClick={() => setOnTodo(!onTodo)}>버튼</button>
      <header className="App-header">
        {onTodo && <TodoView />}
      </header>
    </div>
  );
}

export default App;
