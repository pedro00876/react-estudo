import { useState } from 'react'

const HookUseState = () => {
  // 1 - useState
  let userName = 'Pedro'

  const [name, setName] = useState('Matheus')

  const changerNames = () => {
    userName = 'Pedro Elias'
    setName('Matheus Chagas')
  }

  return (
    <div>
      {/* 1 - useState */}
      <h2>useState</h2>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changerNames}>Clique!</button>
      <hr />
    </div>
  )
}

export default HookUseState
