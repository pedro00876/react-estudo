//Arquivo de estilo

//Importação do componente 'MyComponent', para demonstrar a hierarquização
import MyComponent from "./MyComponent";

const FirstComponent = () => {
  //essa função faz isso...
  return (
    <div>
      {/* Algum comentário */}
      <h1>Meu primeiro Component</h1>
      <MyComponent />
    </div>
  );
};

export default FirstComponent;
