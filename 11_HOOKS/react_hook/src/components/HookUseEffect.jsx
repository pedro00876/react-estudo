import { useEffect, useState } from "react"

const HookUseEffect = () => {
    // 1 - useEffect, sem dependencias
    useEffect(() => {
      console.log("Estou sendo executado")
    
      return () => {
        second
      }
    }, [third])

    const [number, setNumber] = useState(1)

    const changeSomething = () => {
        setNumber(number + 1)
    }
    
  return (
    <div>
        <h2>useEffect</h2>
        <p>Numero: {number}</p>
        <button onClick={changeSomething}>Executar!</button>
        <hr />
    </div>
  )
}

export default HookUseEffect