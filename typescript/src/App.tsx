import React, { useState } from 'react';
import './App.css';
import './assets/css/style.css'
import InputField from './components/InputField';
import { Todo } from './model';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  // const [todo, setTodo] = useState(""); 괄호안에 ""만 넣어도 타입은 string으로 인식하지만 명확히 하기 위해 <string>을 써준다
  const [todos, useTodos] = useState<Todo[]>([]);

  const addTodo = (event: React.FormEvent) =>{
    event.preventDefault();
    if(todo){
      //TODO  https://youtu.be/FJDVKeh7RJI?t=2120 여기부터
    }

  }
  return (
    <div className="App">
      <h1 className="heading">To Do List</h1>
      <InputField todo={todo} setTodo={setTodo} addTodo={addTodo}/>
    </div>
  );
}

export default App;
