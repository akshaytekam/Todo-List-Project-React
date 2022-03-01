import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp';
import TodoList from './Components/TodoList';

function App() {
  return (
    <>
     <NavbarComp />
      
       <TodoList />
    </>
  )
}

export default App

