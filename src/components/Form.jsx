export default function Form(props) {
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