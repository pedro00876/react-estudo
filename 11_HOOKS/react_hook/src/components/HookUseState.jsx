import { useState } from 'react'

const HookUseState = () => {
  // 1 - useState
  let userName = 'Pedro'

  const [name, setName] = useState('Matheus')

  const changerNames = () => {
    userName = 'Pedro Eliass'
    setName('Matheus Chagass')
  }

  // 2 - useState e Input
  const [age, setAge] = useState(18)

  const handleSubmit = (e) => {
    e.preventDefault()

    //envio a ua api
  }
  return (
    <div>
      {/* 1 - useState */}
      <h2>useState</h2>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changerNames}>Clique!</button>

      {/* 2 - useState e input */}
      <form onSubmit={handleSubmit}>
        <p>Digite a sua idade: </p>
        <input type="text" 
        value={age} 
        onChange={(e) => setAge(e.target.value)} />
        <input type="submit" value="Enviar" />
      </form>
      <p>Você tem {age} anos!</p>
      <hr />
    </div>
  )
}

export default HookUseState
