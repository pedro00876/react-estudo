import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

// precisa ajustar alguma coisa
const Home = () => {

  const {counter} = useContext(CounterContext)

  return (
    <div>
      <h1>Home</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  )
}
// precisa ajustar alguma coisa
export default Home