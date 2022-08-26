import React, { useRef } from 'react'
import '../assets/css/style.css'


interface Props{
  todo:string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addTodo: (event: React.FormEvent) => void ;
}

const InputField = ({todo, setTodo, addTodo }:Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className="input" onSubmit={(event) => {
      addTodo(event);
      inputRef.current?.blur();
    }}><input ref={inputRef} type="text" value={todo} onChange={(event) =>setTodo(event.target.value)} placeholder='Enter a task' className="input__box"/>
    <button className='input_submit' type="submit" >Go</button></form>
  )
}

export default InputField