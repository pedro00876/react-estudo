//Components
import ManageData from "./Components/ManageData";
import ListRender from "./Components/ListRender";
import ConditionalRender from "./Components/ConditionalRender";
import ShowUserName from "./Components/ShowUserName";
import CarDatail from "./Components/CarDatail";
import Fragment from "./Components/Fragment";
import Container from "./Components/Container";
import ExecuteFuction from "./Components/ExecuteFuction";

///Style /Css
import "./App.css";
import City from "./assets/city.jpg";

const App = () => {
  function showMessage() {
    console.log("Evento do componente pai");
  }

  const car = [
    { id: 1, brand: "Ferrari", color: "Amarelo", km: 0, newCar: true },
    { id: 2, brand: "Lamborghini", color: "Roxo", km: 2700, newCar: false },
    { id: 3, brand: "Masserati", color: "Preta", km: 0, newCar: true },
  ];

  const name = "Joaquim";
  return (
    <div className="App">
      <h1>Avançando em em React</h1>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name="Pedro" />

      {/* destructuring */}
      <CarDatail brand="VM" km={1000} color="Vermelho" newCar={false} />

      {/* Reaproveitamento de componenentes */}
      <CarDatail brand="Ford" km={0} color="White" newCar={true} />
      <CarDatail brand="GM" km={2000} color="Blue" newCar={false} />

      {/* Loop de array */}
      {car.map((car) => (
        <CarDatail
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}

      {/* Fragment */}
      <Fragment propFragment="Teste" />

      {/* Childrens */}
      <Container myValue="Testing">
        <p>Testando o container</p>
      </Container>

      {/* Executar Função */}
      <ExecuteFuction myFunction={showMessage} />

      {/* Imagem em 'public' */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>

      {/* Imagem em 'assets' */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
    </div>
  );
};

export default App;
