import google from '../Assets/Home-Images/google.png';
import { Link, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../Content-Manager/Context';

const Sign = () => {
    let navigate = useNavigate();
    const { userLogged } = useGlobalContext();

    const handleSubmit = (e) =>{
        e.preventDefault();
        userLogged('Williams Chinedu')
        navigate('/')
    }

    return(
        <div className="sign-container">

            <div className="sign">
                <header>
                    <h2>Let's pick up where we left off yeah?</h2>
                    <h5>Log in to your account</h5>
                    <p>Don't have an account?  <Link to='/create' style={{textDecoration: 'none'}} ><span>Sign Up</span></Link> </p>
                </header>
                <section>
                    <p className="google" onClick={handleSubmit}> <img src={google} alt="google" />  Continue with google</p>
                    <div className="or"> <p></p> OR  <p></p></div>
                    <form onSubmit={handleSubmit}>
                        <p>
                            <label htmlFor="email">Email Address</label> <br />
                            <input type="email" name="email" id="email" required/>
                        </p>
                        <p>
                            <label htmlFor="password">Set Password</label> <br />
                            <input type="password" name="password" id="password" required />
                        </p>
                        <button>Log In</button>
                        <p className='forgot'>Forgot Password</p>
                    </form>
                </section>
            </div>
            
        </div>
    )
}

export default Sign;