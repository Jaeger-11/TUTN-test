import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../Content-Manager/Context';

const Menu = ({setMenu, log}) => {
    const {  } = useGlobalContext()

    return(
        <aside className='menu'>
            <ul className='menu-ul'>
                <Link to='/categories' className='menu-link' onClick={() => setMenu(false)}><li>Categories</li></Link>
                <Link to='/past' className='menu-link' onClick={() => setMenu(false)}><li>Past editions</li></Link>
                <Link to='/future' className='menu-link'onClick={() => setMenu(false)}><li>Future editions</li></Link>
                <Link to='/about' className='menu-link' onClick={() => setMenu(false)}><li>About us</li></Link>
                <Link to='/donate' className='menu-link' onClick={() => setMenu(false)}><li>Make a donation</li></Link>
                {!log && <>
                <Link to='/sign' className='menu-link'><li onClick={() => setMenu(false)}>Log In</li></Link>
                <Link to='/create' className='menu-link'><li onClick={() => setMenu(false)}>Create Account</li></Link> </>}
            </ul>
        </aside>
    )
}

export default Menu;