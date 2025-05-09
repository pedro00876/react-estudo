// 2- Links com react router
import "./Navbar.css"
import { Link, NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      {/* <Link to="/">Home</Link>
      <Link to="/About">About</Link> */}
      <NavLink to="/" 
      //className={({isActive}) => (isActive ? "esa-ativo" : "nao-ativo")}
      >
        Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  )
}

export default Navbar