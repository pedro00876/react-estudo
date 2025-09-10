import { useEffect, useState } from "react"

const HookUseEffect = () => {
    // 1 - useEffect, sem dependencias
    useEffect(() => {
      console.log("Estou sendo executado")
    })

    const [number, setNumber] = useState(1)

    const changeSomething = () => {
        setNumber(number + 1)
    }



    // 2 - Array de dependência vazio
    useEffect(() => {
      
        console.log("Serei executado apenas uma vez")

    }, [third])
    
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