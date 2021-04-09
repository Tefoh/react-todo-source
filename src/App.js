import { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([
    { text: 'Hit the gym', check: false },
    { text: 'Pay bills', check: true },
    { text: 'Meet George', check: false },
    { text: 'Buy eggs', check: true },
    { text: 'Read a book', check: false },
    { text: 'Organize office', check: false },
  ])

  function handleInputChange(event) {
    setText(event.target.value)
  }

  function addTodo() {
    const newTodo = { text: text, check: false };

    setTodos([...todos, newTodo]);

    setText('');
  }

  const handleCheckTodo = (index) => {
    setTodos(
      todos.map((todo, todoIndex) => {
        if (todoIndex === index) {
          todo.check = !todo.check;
        }
        return todo;
      })
    )
  }

  const handleRemoveTodo = (event, index) => {
    event.stopPropagation();

    setTodos(
      todos.filter((todo, todoIndex) => todoIndex !== index)
    )
  }

  const todoElements = todos
      .map((todo, index) => (
        <li
          className={todo.check ? 'checked' : ''}
          onClick={() => handleCheckTodo(index)}
          key={index}
        >
          {todo.text}
          <span className="close" onClick={(event) => handleRemoveTodo(event, index)}>×</span>
        </li>
        )
      )

  return (
    <>
      <div className="header">
        <h2 style={{ margin: 5 + 'px' }}>My To Do List</h2>
        <input type="text" onChange={handleInputChange} value={text} />
        <span className="addBtn" onClick={addTodo}>Add</span>
      </div>
      <ul>
        {todoElements}
      </ul>
    </>
  );
}

export default App;
