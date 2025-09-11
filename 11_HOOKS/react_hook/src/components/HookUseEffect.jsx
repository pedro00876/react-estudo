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

    }, [])

    // 3 - Item no array de dependência
    const [anotherNumber, setAnotherNumber] = useState(0)

    useEffect(() =>{
        if(anotherNumber > 0){
            console.log("Sou executado apenas quando o anotherNumber muda!")
        }
    }, [anotherNumber])

    
  return (
    <div>
        <h2>useEffect</h2>
        <p>Numero: {number}</p>
        <button onClick={changeSomething}>Executar!</button>
        <p>Another Number: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(anotherNumber + 1)}></button>
        <hr />
    </div>
  )
}

export default HookUseEffect