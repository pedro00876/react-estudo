import { useState } from "react";
import "./App.css";
import MyComponent from "./Components/MyComponent";
import Title from "./Components/Title";

const App = () => {
  const n = 15;
  const redTitle = false;

  const [name] = useState("Matheus");

  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React com css</h1>

      {/* CSS de Componente */}
      <MyComponent />
      <p>olá</p>

      {/* CSS Inline */}
      <p
        style={{
          color: "gray",
          backgroundColor: "black",
          padding: "25px",
          borderTop: "2px solid red",
        }}
      >
        Olá, esse parágrafo contém CSS INLINE!
      </p>

      {/* CSS Inline Dinâmico */}
      <p style={n < 10 ? { color: "green" } : { color: "red" }}>
        Teste CSS Inline Dinâmico
      </p>

      <h2 style={name === "Matheus" ? { color: "green" } : { color: "red" }}>
        Teste
      </h2>

      {/* Classe Dinâmica */}
      <p className={redTitle ? "red-title" : "title"}>
        Esse parágrafo contém Classe Dinâmica
      </p>

      {/* CSS Modules */}
      <Title />
      <h1 className="title">Este título não recebe CSS Modules</h1>
    </div>
  );
};

export default App;
