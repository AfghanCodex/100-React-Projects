const Forms = ({ handleTodo, todo, setTodo }) => {
  return (
    <form onSubmit={(e) => handleTodo(e)}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Todo"
      />
      <button onClick={(e) => handleTodo(e)}>Add</button>
    </form>
  );
};

export default Forms;
