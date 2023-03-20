import useUsers from "./hooks/useUsers";
import userService, { User } from "./services/userService";

function App() {
  const { users, error, isLoading, setUsers, setError, setIsLoading } =
    useUsers();

  function handleDelete(id: number): void {
    const originalUsers = [...users];
    setUsers(users.filter((user) => user.id !== id));
    userService.delete(id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  }

  function addUser(): void {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Mosh" };
    setUsers([...users]);
    userService
      .create(newUser)
      .then(({ data: savedUser }) => {
        setUsers([...users, savedUser]);
      })
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  }

  function updateUser(user: User): void {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
    userService.update(user).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  }

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={() => addUser()}>
        Add User
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-3"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
