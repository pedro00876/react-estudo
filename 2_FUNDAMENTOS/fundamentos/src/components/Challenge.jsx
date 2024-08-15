const Challenge = () => {
  const num1 = 5;
  const num2 = 4;

  return (
    <div>
      <div>
        <button onClick={() => console.log(num1 + num2)}>
          Clique aqui para somar!
        </button>
      </div>
    </div>
  );
};

export default Challenge;
