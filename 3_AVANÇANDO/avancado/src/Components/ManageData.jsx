import { useState } from "react";

const ManageData = () => {
  let someData = 10;

  const [number, setNumber] = useState(0);

  return (
    <div>
      <div>
        <p>Valor: {someData}</p>
        <button onClick={() => (someData = 15)}>Mudar variável</button>
      </div>
      <div>
        <p>Valor: {number} </p>
        <button onClick={() => setNumber(25)}>Mudar o State</button>
      </div>
    </div>
  );
};

export default ManageData;
