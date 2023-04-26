import { useState } from 'react'
import './App.css'

// function Input() {
//   return (
//     <>
//       <form>
//         <input
//           type="text"
//           value={todo}
//           onChange={e => setTodo(e.target.value)}
//         ></input>
//         <button>Add to List</button>
//       </form>
//     </>
//   )
// }

// function List() {
//   return (
//     <>
//       Test List
//     </>
//   )
// }

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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={e => setTodo(e.target.value)}
        ></input>
        <button>Add to List</button>
        <p>{todo}</p>
      </form>
      <ul>
        {todoList.map((todo, index) => (
          <div key={index}>{todo}<button onClick={() => deleteTodo(index)}>X</button></div>
        ))}
      </ul>
      
    </>
  )
}

export default App
