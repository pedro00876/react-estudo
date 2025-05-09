import { useParams, Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Product = () => {
  // 4 - Rota dinâmica
  const {id} = useParams()

  // 5 - carregamento dado individual
const url = "http://localhost:3000/products/" + id

  const {data: items, loading, error} = useFetch(url)
  return (
    <div>
      <p>ID do produto: {id}</p>
      {error && <p>Ocorreu um erro inesperado...</p>}
      {loading && <p>Carregando...</p>}
      {items && (
        <div>
          <h1>{items.name}</h1>
          <p>R$: {items.price}</p>
          {/* 6 - nested routes */}
          <Link to={`/products/${items.id}/info`}>Mais Informações</Link>
        </div>
      )}
    </div>
   
  )
}

export default Product