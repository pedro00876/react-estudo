import "./GameOver.css";

const GameOver = ({ retry }) => {
  return (
    <div>
      <h1>Jogo Finalizado!</h1>
      <button onClick={retry}>Reiniciar o Jogo!</button>
    </div>
  );
};

export default GameOver;
