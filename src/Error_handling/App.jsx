import { useEffect, useState } from "react";

const App = () => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [Errors, setErrors] = useState("");
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    async function Fetching() {
      try {
        setLoading(true);
        setErrors("");

        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users?name=${encodeURIComponent(query)}`,
        );

        if (!response.ok) {
          throw new Error("Please check your internet connection");
        }

        const data = await response.json();

        if (data.length === 0) {
          throw new Error("No users found");
        }

        setUsers(data);
      } catch (error) {
        setErrors(error.message);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    }

    Fetching();
  }, [query]);
  return (
    <div className="App">
      <Header query={query} setQuery={setQuery} />
      <Users users={users} Loading={Loading} Errors={Errors} />
    </div>
  );
};

function Header({ query, setQuery }) {
  return (
    <header>
      <form>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search"
        />
        <button>Search</button>
      </form>
    </header>
  );
}

function Users({ users, Loading, Errors }) {
  return (
    <main>
      {!Errors && Loading ? (
        <Loadings />
      ) : (
        <ul>
          {users.map((user) => (
            <User user={user} key={user.id} />
          ))}
        </ul>
      )}

      {Errors ? Errors : ""}
    </main>
  );
}

function User({ user }) {
  return (
    <li>
      <span>ID: {user.id}</span>
      <span>Name: {user.name}</span>
      <span>Email : {user.email} </span>
      <span>Address : {user.address.city}</span>
      <span>Phone : 0703416305 </span>
    </li>
  );
}

function Loadings() {
  return <h2>Loading...</h2>;
}

function Errors_compo({ Errors }) {
  return <p></p>;
}

export default App;
