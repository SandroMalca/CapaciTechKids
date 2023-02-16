import { NavLink, useLocation } from 'react-router-dom'
import styles from './Nav.module.css'

function Nav() {
  const location = useLocation()


  let activeStyle = {
    color: location.pathname === '/' ? 'white' : 'white'
  }

  let inactiveStyle = {
    color: location.pathname === '/' ? 'white' : 'white'
  }

  return (
    <>
      <nav className={styles.navbar}>
        <ul>
          <li><NavLink to={"/"} style={({isActive}) => isActive ? activeStyle : inactiveStyle}>Home</NavLink></li>
          <li><NavLink to={"/course"} style={({isActive}) => isActive ? activeStyle : inactiveStyle}>My Course</NavLink></li>
          <li><NavLink to={"/about"} style={({isActive}) => isActive ? activeStyle : inactiveStyle}>About</NavLink></li>
        </ul>
      </nav>
    </>
  )
}

export default Nav