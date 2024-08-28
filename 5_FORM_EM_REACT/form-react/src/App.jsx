import "./App.css";
import MyForm from "./components/MyForm";
const App = () => {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm
        user={{
          name: "Pedro Chagas",
          email: "pedrochagas@gmail.com",
          bio: "Olá, eu me chamo Pedro",
          role: "designer",
        }}
      />
    </div>
  );
};

export default App;
