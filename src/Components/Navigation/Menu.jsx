import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../Content-Manager/Context';
import energy from '../../Assets/Navigation-Images/energy.png';
import usericon from '../../Assets/Navigation-Images/usericon.png';
import arrowdown from '../../Assets/Navigation-Images/arrowdown.png';
import logout from '../../Assets/Navigation-Images/logout.png';
import times from '../../Assets/Navigation-Images/Times.png';
import logo from '../../Assets/Navigation-Images/logo.png';
import Fade  from 'react-reveal/Fade';

const Menu = ({setMenu, log, setLog}) => {
    const { user, totalEnergy, userOut } = useGlobalContext()

    return(
        <aside className='menu'>
            <nav> 
            <Link to='/'><img src={logo} alt="logo" className='nav-logo'onClick={()=> setMenu(false)} /></Link>
            <img src={times} alt="times"  onClick={() =>setMenu(false)} className='nav-icon' /> 
            </nav>
            <ul className='menu-ul'>
                
            {user && <div className='menu-user'>
                        <p> <img src={energy} alt="energy" /> {totalEnergy} </p>
                        <p onClick={() => setLog(!log)}> <img src={usericon} alt="user" /> {user} <img src={arrowdown} alt="arrow"  /></p> </div>}
                <Link to='/categories' className='menu-link' onClick={() => setMenu(false)}><li>  <Fade left>Categories</Fade> </li></Link>
                <Link to='/past' className='menu-link' onClick={() => setMenu(false)}><li> <Fade left> Past editions</Fade></li></Link>
                <Link to='/future' className='menu-link'onClick={() => setMenu(false)}><li><Fade left>Future editions</Fade></li></Link>
                <Link to='/about' className='menu-link' onClick={() => setMenu(false)}><li><Fade left>About us</Fade></li></Link>
                <Link to='/donate' className='menu-link' onClick={() => setMenu(false)}><li><Fade left>Make a donation</Fade></li></Link>
                { !user ? <> <Link to='/sign' className='menu-link'><li onClick={() => setMenu(false)}><Fade left>Log In</Fade></li></Link>
                <Link to='/create' className='menu-link'><li onClick={() => setMenu(false)}><Fade left>Create Account</Fade></li></Link> </> :
                <li onClick={userOut} style={{backgroundColor: '#3E0563', color:'white', display:'flex', alignItems:'center', gap:'1rem'}}><Fade left> <img src={logout} alt="log"  /> Log Out </Fade></li>
                }
                
            </ul>
        </aside>
    )
}

export default Menu;