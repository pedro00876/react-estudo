const CarDatail = ({ brand, km, color }) => {
  return (
    <div>
      <ul>
        <li>Marca: {brand}</li>
        <li>KM: {km}</li>
        <li>Cor: {color}</li>
      </ul>
    </div>
  );
};

export default CarDatail;
