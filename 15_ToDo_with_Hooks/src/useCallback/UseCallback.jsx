import React, { useCallback, useState } from "react";
import DisplayUsers from "./DisplayUsers";

function UseCallback() {
  const userList = [
    { id: 1, name: "raj" },
    { id: 2, name: "mau" },
    { id: 3, name: "david" },
    { id: 4, name: "ram" },
    { id: 5, name: "nolan" },
    { id: 6, name: "gani" },
  ];
  const [users, setUsers] = useState(userList);
  const [count, setCount] = useState(0);

  function addUser(value) {
    setUsers(() => [...users, { id: users.length + 1, name: value }]);
  }

  const handleDelete = useCallback((id) => {
      setUsers((list) => list.filter((user) => user.id != id));
    },[]);

  return (
    <div>
      <div>
        <p>{count}</p>
        <button onClick={() => setCount((prev) => prev + 1)}>Count</button>
      </div>
      <div>
        <label htmlFor="">Enter Name</label>
        <input type="text" onBlur={(e) => addUser(e.target.value)} />
      </div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <DisplayUsers user={user} handleDelete={handleDelete} />
          </div>
        );
      })}
    </div>
  );
}

export default UseCallback;
