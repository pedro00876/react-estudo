import { useState } from "react";
import "./MyForm.css";

const MyForm = ({ user }) => {
  // Controled Input
  // 3-Gerenciamento de dados
  const [role, setRole] = useState(user ? user.role : "");
  const [bio, setBio] = useState(user ? user.bio : "");
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const handelName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando o Formulário");
    console.log(name, email, bio, role);

    // Validação
    // Envio

    // 7-Limpar Form
    setName("");
    setEmail("");
    setBio("");
    setRole("");
  };

  //   console.log(name);
  //   console.log(email);

  return (
    <div>
      {/* 5-Envio de form */}

      <form onSubmit={handleSubmit}>
        {/* 1-Criação de form */}
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          name="name"
          placeholder="Digite o seu nome:"
          onChange={handelName}
          value={name}
        />
        {/* 2-Label envolvendo o form */}
        <label>
          <span>E-mail:</span>
          {/* 4-Simplificação da manipulação de state */}
          <input
            type="email"
            name="email"
            placeholder="Digite o seu email:"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>

        {/* 8-TextArea */}
        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            onChange={(e) => setBio(e.target.value)}
            value={bio}
            placeholder="Descrição do usário"
          ></textarea>
        </label>
        {/* 9-Select */}
        <label>
          <span>Função no Sistema</span>
          <select
            name="role"
            onChange={(e) => setRole(e.target.value)}
            value={role}
          >
            <option value="user">Usuário</option>
            <option value="develope">Programador</option>
            <option value="designer">Designer</option>
            <option value="ceo">CEO</option>
          </select>
        </label>
        <input type="submit" value="Criar usuário" />
      </form>
    </div>
  );
};

export default MyForm;
