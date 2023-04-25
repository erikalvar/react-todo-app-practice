export default function Todo(props) {
  return (
    <div>
      {props.todo}
      <button onClick={() => props.deleteTodo(props.index)}>X</button>
    </div>
  );
}
