import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">useCONTEX</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink 
                            className={({isActive}) => {
                                const active = isActive? 'nav-link active' : 'nav-link';
                                return active
                            }}  
                            aria-current="page" 
                            to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            className={({isActive}) => {
                                const active = isActive? 'nav-link active' : 'nav-link';
                                return active
                            }} 
                            to="about"
                        >About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            className={({isActive}) => {
                                const active = isActive? 'nav-link active' : 'nav-link';
                                return active
                            }}  
                            to="login"
                        >Login</NavLink>
                    </li>
                </ul>
            </div>
        </div>
  </nav>
  )
}
