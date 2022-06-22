import google from '../Assets/Home-Images/google.png';

const Create = () => {

    return(
        <div className='sign-container'>

            <div className="sign">
                <header>
                    <h2>Time to vote your favourite Techie, lets make this amazing!</h2>
                    <h5>Create an Account</h5>
                    <p>Have an account? <span>Log in</span></p>
                </header>
                <section>
                    <p className='google'> <img src={google} alt="google" /> Continue with google</p>
                    <div className='or'> <p></p> OR  <p></p></div>
                    <form>
                        <p>
                            <label htmlFor="first">First Name</label> <br />
                            <input type="text" name="firstName" id="first" />
                        </p>
                        <p>
                            <label htmlFor="last">Last Name</label> <br />
                            <input type="text" name="lastName" id="last" />
                        </p>
                        <p>
                            <label htmlFor="email">Email Address</label> <br />
                            <input type="email" name="email" id="email" />
                        </p>
                        <p>
                            <label htmlFor="phone">Phone Number</label> <br />
                            <input type='tel' name="phone" id="phone" />
                        </p>
                        <p>
                            <label htmlFor="password">Set Password</label> <br />
                            <input type="password" name="password" id="password" />
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
                        <button>Create My Account</button>
                    </form>
                </section>
            </div>
            
        </div>
    )
}

export default Create;