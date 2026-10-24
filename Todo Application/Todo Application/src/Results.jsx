function Results({ GetTodo, setGetToto }) {
  function handleDelete(id) {
    setGetToto(() => GetTodo.filter((todo, index) => index !== id));
  }

  return (
    <div className="results">
      <ul>
        {GetTodo.map((todo, index) => (
          <li key={index}>
            {index + 1}: {todo}{" "}
            <button
              className="delete_button"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Results;
