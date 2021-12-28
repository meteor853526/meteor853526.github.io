import { Link } from "react-router-dom";
import logo from "./images/starbucks.png"



const NavBar = () => {
    return ( 
      <header>
        <div className="fixed-top">
          <nav className="NavBar">
            <img src={logo} className="logo" alt=""></img>
                  <ul className="nav_links">
                      <li><Link to="/order">ORDER</Link></li>
                      <li><Link to="/cards">CARDS</Link></li>
                      <li><Link to="/gifts">GIFTS</Link></li>
                  </ul>
            
            <Link to="#" className="btn1"><button className="btn1">Sign in</button></Link>
            <Link to="#" className="btn2"><button className="btn2">Join Now</button></Link>
          </nav>
        </div>
      </header>
    );
}
 
export default NavBar;