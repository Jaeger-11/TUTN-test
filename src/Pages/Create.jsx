import google from '../Assets/Home-Images/google.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useGlobalContext } from '../Content-Manager/Context';

const Create = () => {
    let navigate = useNavigate(); 
    const { setUser } = useGlobalContext();
    const [ firstname, setFirstname ] = useState('');
    const [ lastname, setLastname] = useState('');

    const handleFirst = (e) => {
        setFirstname(e.target.value)
    }
    const handleLast = (e) => {
        setLastname(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setUser(` ${firstname} ${lastname} `)
        navigate('/')
    }

    const handleGoogle = (e) => {
        e.preventDefault();
        setUser('Anonymous User')
        navigate('/')
    }

    return(
        <div className='sign-container'>

            <div className="sign">
                <header>
                    <h2>Time to vote your favourite Techie, lets make this amazing!</h2>
                    <h5>Create an Account</h5>
                    <p>Have an account? <Link to='/sign' style={{textDecoration: 'none'}}><span>Log in</span></Link> </p>
                </header>
                <section>
                    <p className='google' onClick={handleGoogle}> <img src={google} alt="google" /> Continue with google</p>
                    <div className='or'> <p></p> OR  <p></p></div>
                    <form onSubmit={handleSubmit}>
                        <p>
                            <label htmlFor="first">First Name</label> <br />
                            <input type="text" name="firstName" id="first" required onChange={handleFirst} />
                        </p>
                        <p>
                            <label htmlFor="last">Last Name</label> <br />
                            <input type="text" name="lastName" id="last" required onChange={handleLast}/>
                        </p>
                        <p>
                            <label htmlFor="email">Email Address</label> <br />
                            <input type="email" name="email" id="email" required/>
                        </p>
                        <p>
                            <label htmlFor="phone">Phone Number</label> <br />
                            <input type='tel' name="phone" id="phone" />
                        </p>
                        <p>
                            <label htmlFor="password">Set Password</label> <br />
                            <input type="password" name="password" id="password" required />
                        </p>
                        <p>
                            <label htmlFor="gender">Gender</label> <br />
                            <select id="gender" name="gender">
                            <option value="null"></option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </p>
                        <p className='forgot'>By registering you agree to Techtrend Africa's
                        <span>Terms of Use</span>  and <span> Privacy Policy</span></p>
                        <button >Create My Account</button>
                    </form>
                </section>
            </div>
            
        </div>
    )
}

export default Create;