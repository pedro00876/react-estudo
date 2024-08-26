import "./App.css";
import MyComponent from "./components/MyComponent";

const App = () => {
  const carDatail = [
    { id: 1, brand: "Ford", km: 1000, color: "Vermelho" },
    { id: 2, brand: "Toyota", km: 0, color: "Preto" },
    { id: 3, brand: "VW", km: 1000, color: "Branco" },
  ];
  return (
    <div className="App">
      <h1>Carros Disponíveis</h1>
      {carDatail.map((car) => (
        <MyComponent
          key={car.id}
          brand={car.brand}
          km={car.km}
          color={car.color}
        />
      ))}
    </div>
  );
};

export default App;
