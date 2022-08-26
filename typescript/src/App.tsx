import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  // const [todo, setTodo] = useState(""); 괄호안에 ""만 넣어도 타입은 string으로 인식하지만 명확히 하기 위해 <string>을 써준다
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (event: React.FormEvent) =>{ //이벤트도 타입을 적어줘야함
    event.preventDefault();
    if(todo){
      setTodos([...todos, {id:Date.now(), todo, isDone:false}]);
      setTodo("");
    }
  }
  console.log(todos)
  return (
    <div className="App">
      <h1 className="heading">To Do List</h1>
      <InputField todo={todo} setTodo={setTodo} addTodo={addTodo}/>
      <TodoList todos={todos}  setTodos={setTodos}/>
    </div>
  );
}

export default App;
