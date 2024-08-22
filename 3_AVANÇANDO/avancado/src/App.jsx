//Components
import ManageData from "./Components/ManageData";
import ListRender from "./Components/ListRender";
import ConditionalRender from "./Components/ConditionalRender";
import ShowUserName from "./Components/ShowUserName";

///Style /Css
import "./App.css";
import City from "./assets/city.jpg";

const App = () => {
  // const name = "Joaquim";
  return (
    <div className="App">
      <h1>Avançando em em React</h1>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name="Pedro" />

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
