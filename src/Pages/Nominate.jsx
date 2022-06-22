import twitter from '../Assets/Home-Images/twitter.png'
import instagram from '../Assets/Home-Images/instagram.png'
import linkedin from '../Assets/Home-Images/linkedin.png'
import facebook from '../Assets/Home-Images/facebook.png'
import Modal from '../Components/ModalVote'
import { useGlobalContext } from '../Content-Manager/Context'
import thumbs from '../Assets/Home-Images/thumbsup.png';


const Nominate = () => {
    const { modal, setModal } = useGlobalContext();
    const handleSubmit = (e) => {
        e.preventDefault();
        setModal(true)
    }

    return(
        <div className='sign-container'>
        <div className='sign nominate'>
            <section>
                <header>
                    <h2>Nominate a candidate for The Connected Award</h2>
                    <p>Enter The Nominee's Information Below</p>
                </header>
                <form onSubmit={handleSubmit} >
                    <p>
                        <label htmlFor="category">Award Category</label> <br />
                        <select id="category" name="award" >
                            <option value="null"></option>
                            <option value="1">Exceptional Data Analyst</option>
                            <option value="2">Exceptional Data Scientist</option>
                            <option value="3">Promising Data Scientist</option>
                            <option value="4">Promising Data Analyst</option>
                            <option value="5">Exceptional Virtual Designer</option>
                            <option value="6">Exceptional DevOps Expert</option>
                        </select>
                    </p>
                    <p>
                        <label htmlFor="fullname"> Full Name<span>*</span> </label>
                        <input type="text" id='fullname' className='fullname' style={{width: '93%'}} />
                    </p>
                    <p>
                        <label htmlFor="gender">Gender</label> <br />
                        <select id="gender" name="gender" >
                            <option value="null"></option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </p>
                    <h3 >Social Media Links</h3>
                    <p className='nominate-p'>
                        <label htmlFor="linkedin"className='nominate-label' > <img src={linkedin} alt="linkedin" />  Linkedin<span>*</span> </label>
                        <input type="text" id='linkedin' className='nominate-icons' />
                    </p>
                    <p className='nominate-p'>
                        <label htmlFor="instagram" className='nominate-label'> <img src={instagram} alt="instagram" /> instagram </label>
                        <input type="text" id='instagram' className='nominate-icons' />
                    </p>
                    <p className='nominate-p'>
                        <label htmlFor="twitter" className='nominate-label'> <img src={twitter} alt="twitter" /> twitter </label>
                        <input type="text" id='twitter' className='nominate-icons' />
                    </p>
                    <p className='nominate-p'>
                        <label htmlFor="facebook" className='nominate-label'> <img src={facebook} alt="facebook" /> facebook </label>
                        <input type="text" id='facebook' className='nominate-icons' />
                    </p>
                    <p className='forgot'>The First-Ever Tech Personality Awards Recognizing Promising and Exceptional African Talents in all Technological Fields. The West African Countries include 16 countries of Benin, Burkina Faso, Gambia, Ghana, Guinea, Guinea-Bissau, Ivory Coast, Liberia, Mali, Mauritania, Niger, Nigeria, Senegal, Sierra Leone, and Togo
                  <br/>  For questions, partnerships & enquiries, send us a mail via connectedawards@gmail.com</p>
                  <button >Submit</button>
                </form>
                {modal && <Modal  
            image={thumbs} 
            title={'Awesome!'}
            text={'Your Nomination has been submitted'}
            button={'Return to home page'} 
            to={'/'}
            />}
            </section>
        </div>
        </div>
    )
}

export default Nominate;