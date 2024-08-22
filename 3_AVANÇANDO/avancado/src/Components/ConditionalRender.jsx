import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(false);
  const [name, setName] = useState("Pedro");

  return (
    <div>
      <h1>Esse valor será exibido??</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Se x for false, sim!</p>}
      <h1>Operador Ternário</h1>
      {name === "Pedro" ? (
        <div>
          <p>O nome é Pedro</p>
        </div>
      ) : (
        <div>
          <p>O nome está errado</p>
        </div>
      )}
      <button onClick={() => setName("José")}>Clique aqui</button>
    </div>
  );
};

export default ConditionalRender;
