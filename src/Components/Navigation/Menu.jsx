import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../Content-Manager/Context';
import energy from '../../Assets/Navigation-Images/energy.png';
import usericon from '../../Assets/Navigation-Images/usericon.png';
import arrowdown from '../../Assets/Navigation-Images/arrowdown.png';
import logout from '../../Assets/Navigation-Images/logout.png';

const Menu = ({setMenu, log, setLog}) => {
    const { user, totalEnergy } = useGlobalContext()

    return(
        <aside className='menu'>
            <ul className='menu-ul'>
                <Link to='/categories' className='menu-link' onClick={() => setMenu(false)}><li>Categories</li></Link>
                <Link to='/past' className='menu-link' onClick={() => setMenu(false)}><li>Past editions</li></Link>
                <Link to='/future' className='menu-link'onClick={() => setMenu(false)}><li>Future editions</li></Link>
                <Link to='/about' className='menu-link' onClick={() => setMenu(false)}><li>About us</li></Link>
                <Link to='/donate' className='menu-link' onClick={() => setMenu(false)}><li>Make a donation</li></Link>
                {user ? <div className={`${ log && 'nav-out'} nav-user`}>
                        <p> <img src={energy} alt="energy" /> {totalEnergy} </p>
                        <p onClick={() => setLog(!log)}> <img src={usericon} alt="user" /> {user} <img src={arrowdown} alt="arrow"  /></p> </div>
                        : <>
                <Link to='/sign' className='menu-link'><li onClick={() => setMenu(false)}>Log In</li></Link>
                <Link to='/create' className='menu-link'><li onClick={() => setMenu(false)}>Create Account</li></Link> </>}
            </ul>
        </aside>
    )
}

export default Menu;