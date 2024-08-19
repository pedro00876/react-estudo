const TemplateExpressions = () => {
  //obeject com informações

  const name = "Pedro";
  const data = {
    age: 18,
    job: "Developer Web",
  };
  return (
    <div>
      {/* Informações nos templates */}
      <h1>Olá, {name}! Como vai?</h1>
      <p>A sua profissão é: {data.job}</p>
      <p>A sua idade é: {data.age}</p>
    </div>
  );
};

export default TemplateExpressions;
