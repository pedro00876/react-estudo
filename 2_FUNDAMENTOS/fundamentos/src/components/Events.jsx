const Events = () => {
  const handleMyEvents = (e) => {
    console.log(e);
    console.log("Ativou o Evento");
  };

  //função de renderização
  const renderSomeThing = (x) => {
    if (x) {
      return <h1>Renderizando isso</h1>;
    } else {
      return <h1>Também pode ser renderizado</h1>;
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleMyEvents}>Clique Aqui!</button>
      </div>
      <div>
        {/* function in line */}
        <button onClick={() => console.log("Você clicou.")}>
          Clique aqui novamente!
        </button>
      </div>
      {/* chamando a função de renderização */}
      {renderSomeThing(true)}
      {renderSomeThing(false)}
    </div>
  );
};

export default Events;
