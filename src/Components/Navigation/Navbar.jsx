import './navigation.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Menu from './Menu';

//Import Navigation Images
import times from '../../Assets/Navigation-Images/Times.png';
import hamburger from '../../Assets/Navigation-Images/Hamburger.png';
import logo from '../../Assets/Navigation-Images/logo.png';

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    
    const toggleMenu = () => {
        setMenu(!menu);
    }

    return(
        <nav>
            <Link to='/'><img src={logo} alt="logo" className='nav-logo'/></Link>  
            { menu ? <img src={times} alt="times"  onClick={toggleMenu} className='nav-icon' /> : <img src={hamburger} alt="hamburger" onClick={toggleMenu} className='nav-icon' /> }
            
            <section className='nav-links'>
                <Link to ='/categories' className='nav-link'>Categories</Link>
                <Link to ='/past' className='nav-link'>Past editions</Link>
                <Link to ='/future' className='nav-link'>Future editions</Link>
                <Link to ='/about' className='nav-link'>About us</Link>
                <Link to ='/donate' className='nav-link'>Make a donation</Link>
            </section>
            <section className='nav-btns'>
                <Link to='sign'><button className='login'>Log In</button></Link>
                <Link to='create'><button>Create Account</button></Link>
            </section>
            {menu && <Menu setMenu={setMenu}/> }
        </nav>
    )
}

export default Navbar;