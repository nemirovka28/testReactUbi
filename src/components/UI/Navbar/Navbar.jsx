import { BrowserRouter as Router,Link, Route, Routes } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
        <div className="navbar__links">
            <Link className="navbar__links--item" to='/about'> O сайте</Link>
            <Link className="navbar__links--item" to='/post'> Посты</Link>
        </div>
      </div>
    )
}

export default Navbar;