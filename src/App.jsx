import { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState("")
  const [list, setList] = useState([])

  console.log(list)

  const handleChange = (e) => {
    setTask(e.target.value)
  }

  const handleSubmit= (e) => {
    e.preventDefault()
    setList((prev) => [...prev, task])
    console.log(list)
  }
  const listItems = list.map(item => <li key={item}>{item}</li>)
 
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={handleChange}
      >
      </input>
      <button >Submit</button>
    </form>
    <p></p>
    <ul>
      {listItems}
    </ul>
      
    </>
  )
}

export default App
