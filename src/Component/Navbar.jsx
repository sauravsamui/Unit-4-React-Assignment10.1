import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'
const Navbar = () => {
  const {isLight,toggleTheme} = useContext(ThemeContext)
  return (
    <nav  className="navbar navbar-expand-lg bg-light">
    <div  className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onChange={toggleTheme} />
  <label  className="form-check-label" >{isLight?"Dark":"Light"}</label>
</div>
      
    </div>
  </nav>
  )
}

export default Navbar