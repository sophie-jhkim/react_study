import React from 'react'
import '../assets/css/style.css'
import { Todo } from '../model';
import SingleTodo from './SingleTodo';

interface Props{
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}


const TodoList = ({todos, setTodos}:Props) => {
  return (
    <div className='todos'>
      {
todos.map(item => <SingleTodo todo={item} key={item.id} todos={todos} setTodos={setTodos}/>)
      }
    </div>
  )
}

export default TodoList