import React from 'react'
import '../App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function TodoList() {
    const [todos, setTodos] = React.useState([]);  //New list of todos is here
    const [todo, setTodo] = React.useState("");     //First Input Field
    const [todoEditing, setTodoEditing] = React.useState(null);
    const [editingText, setEditingText] = React.useState("");
  
    React.useEffect(() => {
      const json = localStorage.getItem("todos");
      const loadedTodos = JSON.parse(json);
      if (loadedTodos) {
        setTodos(loadedTodos);
      }
    }, []);
  
    React.useEffect(() => {              //Store list in local storage
      const json = JSON.stringify(todos);
      localStorage.setItem("todos", json);
    }, [todos]);
    
    function handleSubmit(e) {
      e.preventDefault();
      // Below Code for Preventing from Empty string input:
      // if (!todo.text || /^\s*$/.test(todo.text)) {
      //   return;
      // }
      // if(e.target.value == ''){
      //   return;
      // }
        
      const newTodo = {
        id: new Date().getTime(),
        text: todo,
        completed: false,
      };
      setTodos([...todos].concat(newTodo));
      setTodo("");
    }
  
    function deleteTodo(id) {
      let updatedTodos = [...todos].filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
    }
  
    function toggleComplete(id) {            //For checkbox
      let updatedTodos = [...todos].map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;    //if checkbox clicked
        }
        return todo;
      });
      setTodos(updatedTodos);
    }
  
    function submitEdits(id) {                  //Submit todo list
      const updatedTodos = [...todos].map((todo) => {
        if (todo.id === id) {
          todo.text = editingText;  //assign initial value of editing which is empty string
        }
        return todo;
      });
      setTodos(updatedTodos);
      setTodoEditing(null);
    }
  
      return (
        <>
      <div id="main">
      
      <div className="title-div"><h1>Todo List</h1></div>
        <form className="form-input" onSubmit={handleSubmit}>
          <input
            id="task"
            type="text" 
            defaultValue={''}
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <button id="btn" type="submit">Add Todo</button>
        </form>
        <br/>
        <div className='list-main-containt'>
        {todos.map((todo) => (
          <div key={todo.id} className="todo">
            <div className="todo-text">
              <input
                type="checkbox"
                id="completed"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
              />
              {todo.id === todoEditing ? (
                <input
                  className="editTask"
                  type="text"
                  onChange={(e) => setEditingText(e.target.value)}
                />
              ) : (
                <div className="list-area">{todo.text}</div>
              )}
            </div>
            
            <div className="todo-actions">
              {todo.id === todoEditing ? (
                <button className="saveTask" onClick={() => submitEdits(todo.id)}>Submit Edits</button>
              ) : (
                <button className="edit" onClick={() => setTodoEditing(todo.id)}>Edit</button>
              )}
  
              <button className="delete" onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
            <hr style={{
                        color: "red",
                        backgroundColor: "red",
                        height: 5
                      }}
            />
          </div>      
        ))}
        </div>
      </div>
      </>
      );
}

export default TodoList
