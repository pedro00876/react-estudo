//Components
import ManageData from "./Components/ManageData";
import ListRender from "./Components/ListRender";

///Style /Css
import "./App.css";
import City from "./assets/city.jpg";

const App = () => {
  return (
    <div className="App">
      <h1>Avançando em em React</h1>
      <ManageData />
      <ListRender />

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
