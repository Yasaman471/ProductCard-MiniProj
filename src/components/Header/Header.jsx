import "./Header.css"
import Logo from "./Logo/Logo.jsx";
import Navbar from "./Navbar/Navbar.jsx";


function Header(){

    return(
       <header>
        <Logo />
        <Navbar />
       </header>
    );
}

export default Header