import google from '../Assets/Home-Images/google.png';


const Sign = () => {

    return(
        <div className="sign-container">

            <div className="sign">
                <header>
                    <h2>Let's pick up where we left off yeah?</h2>
                    <h5>Log in to your account</h5>
                    <p>Don't have an account? <span>Sign Up</span></p>
                </header>
                <section>
                    <p className="google"> <img src={google} alt="google" />  Continue with google</p>
                    <div className="or"> <p></p> OR  <p></p></div>
                    <form>
                        <p>
                            <label htmlFor="email">Email Address</label> <br />
                            <input type="email" name="email" id="email" />
                        </p>
                        <p>
                            <label htmlFor="password">Set Password</label> <br />
                            <input type="password" name="password" id="password" />
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