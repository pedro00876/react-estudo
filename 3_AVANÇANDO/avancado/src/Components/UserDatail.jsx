import React from "react";

const UserDatail = ({ name, age, job }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Idade: {age}</p>
      <p>Profissão: {job}</p>
      {age >= 18 ? (
        <p>Pode tirar habiilitação</p>
      ) : (
        <p>Não pode tirar habilitação</p>
      )}
    </div>
  );
};

export default UserDatail;
