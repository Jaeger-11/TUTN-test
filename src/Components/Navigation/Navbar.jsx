import './navigation.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Menu from './Menu';
import { useGlobalContext } from '../../Content-Manager/Context';

//Import Navigation Images
import times from '../../Assets/Navigation-Images/Times.png';
import hamburger from '../../Assets/Navigation-Images/Hamburger.png';
import logo from '../../Assets/Navigation-Images/logo.png';
import energy from '../../Assets/Navigation-Images/energy.png';
import usericon from '../../Assets/Navigation-Images/usericon.png';
import arrowdown from '../../Assets/Navigation-Images/arrowdown.png';
import logout from '../../Assets/Navigation-Images/logout.png';


const Navbar = () => {
    const { user, totalEnergy, userOut } = useGlobalContext();
    const [menu, setMenu] = useState(false);
    const [log, setLog] = useState(false);
    
    const toggleMenu = () => {
        setMenu(!menu);
    }

    const handleOut =()=>{
        setLog(false)
        userOut()
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
            {
                user ? <div className={`${ log && 'nav-out'} nav-user`}>
                    <p> <img src={energy} alt="energy" /> {totalEnergy} </p>
                    <p onClick={() => setLog(!log)}> <img src={usericon} alt="user" /> {user} <img src={arrowdown} alt="arrow"  /></p>
                    {log &&  <div className='nav-out-p'>
                        <p onClick={handleOut}> <img src={logout} alt="log"  /> Log Out </p>
                    </div> }
                </div> :
                <section className='nav-btns'>
                <Link to='sign'><button className='login'>Log In</button></Link>
                <Link to='create'><button>Create Account</button></Link>
            </section>
            }
            {menu && <Menu setMenu={setMenu}/> }
        </nav>
    )
}

export default Navbar;