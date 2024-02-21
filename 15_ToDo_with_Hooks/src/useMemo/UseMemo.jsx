import React, { useMemo, useState } from "react";

function UseMemo() {
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

  const displayUsers = useMemo(
    () =>
      users.map((user) => {
        console.log("user to display");

        return (
          <div key={user.id}>
            <p>{user.name}</p>
          </div>
        );
      }),
    [users]
  );

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
      {displayUsers}
    </div>
  );
}

export default UseMemo;
