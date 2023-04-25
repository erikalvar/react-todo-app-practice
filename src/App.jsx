import { useState } from 'react'
import './App.css'

function Todo(props) {
  return (
    <div>
      {props.todo}
      <button onClick={() => props.deleteTodo(props.index)}>X</button>
    </div>
  )
}

function Form(props) {
  return (
    <form onSubmit={props.handleSubmit}>
        <input 
          type="text"
          value={props.todo} 
          onChange={e => props.setTodo(e.target.value)}>
        </input>
        <button>Add to List</button>
      </form>
  )
}

function App() {
  const [todo, setTodo] = useState("")
  const [todoList, setTodoList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setTodoList([...todoList, todo])
    setTodo("")
  }

  const deleteTodo = index => {
    const newTodoList = [...todoList]
    newTodoList.splice(index, 1)
    setTodoList(newTodoList)
  }

  return (
    <>
      <Form 
        handleSubmit={handleSubmit}
        todo={todo}
        setTodo={setTodo}
      />
      <ul>
        {todoList.map((todo, index) => (
          <Todo 
            key={index}
            index={index}
            todo={todo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </>
  )
}

export default App
