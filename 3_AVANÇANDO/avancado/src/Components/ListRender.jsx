import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Pedro", "Elias", "Chagas", "Silva"]);

  const [users] = useState([
    { id: 32895, name: "Elias", age: 47 },
    { id: 32986, name: "Jozineide", age: 44 },
    { id: 32987, name: "Pedro", age: 18 },
  ]);

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
      <ul>
        {telefone.map((tell) => (
          <li key={tell.id}>{tell.number}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListRender;
