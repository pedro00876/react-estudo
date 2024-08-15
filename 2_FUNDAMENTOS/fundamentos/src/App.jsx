//Components
import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";
import MyComponent from "./components/MyComponent"; //Importação do componente 'MyComponent', para demonstrar a hierarquização
import Events from "./components/Events";
import Challenge from "./components/Challenge";

//styles / css
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
      <Challenge />
    </div>
  );
};

export default App;
