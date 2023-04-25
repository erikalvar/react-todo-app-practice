import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import Form from './components/Form'

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
