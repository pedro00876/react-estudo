const MyComponent = ({ brand, km, color }) => {
  return (
    <div>
      <h1>Detalhes do carro</h1>
      <h2>Marca: {brand}</h2>
      <p>Quilometragem: {km}</p>
      <p>Cor: {color}</p>
    </div>
  );
};

export default MyComponent;
