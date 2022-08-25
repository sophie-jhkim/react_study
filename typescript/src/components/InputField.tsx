import React from 'react'

interface Props{
  todo:string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addTodo: (event: React.FormEvent) => void ;
}

const InputField = ({todo, setTodo, addTodo }:Props) => {
  return (
    <form className="input" onSubmit={addTodo}><input type="text" value={todo} onChange={(event) =>setTodo(event.target.value)} placeholder='Enter a task' className="input__box"/>
    <button className='input_submit' type="submit" >Go</button></form>
  )
}

export default InputField