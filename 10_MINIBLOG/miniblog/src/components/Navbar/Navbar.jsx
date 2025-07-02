import { NavLink } from "react-router-dom"

// Style
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to='/' className={styles.brand}>
        Mini <span>Blog</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink to='/' className={({isactive}) => (isactive ? styles.active : '') }>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/About' className={({isactive}) => (isactive ? styles.active : '') }>
            Sobre
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar