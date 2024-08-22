import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Pedro", "Elias", "Chagas", "Silva"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Elias", age: 47 },
    { id: 2, name: "Jozineide", age: 44 },
    { id: 3, name: "Pedro", age: 18 },
  ]);
  // Previus State
  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  const [telefone] = useState([
    { id: 123, number: 79998979980 },
    { id: 124, number: 79998979980 },
    { id: 125, number: 79998979980 },
  ]);

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete</button>
      <ul>
        {telefone.map((tell) => (
          <li key={tell.id}>{tell.number}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListRender;
