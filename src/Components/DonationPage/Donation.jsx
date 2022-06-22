
import notebook from '../../Assets/Home-Images/notebook.png';
import classroom from '../../Assets/Home-Images/classroom.png';

const Donation = () => {

    return(
        <div className='donate-container'>
            
                <header>
                    <h2>Make a Donation</h2>
                    <p>Make a contribution to the growth of technology in Africa</p>
                </header>
                <div className='donate'>
                <article>
                <p style={{width:'100%'}}><img src={classroom} alt="notebook" style={{width: 'inherit'}} /></p>
                <form >
                    <p> <label htmlFor="donate">Enter Donation Amount</label> </p>
                    <div> <p>$</p> <input type="number" name="" id="donate" min={5} placeholder='5' /></div>
                    <p><button>Make Donation</button></p>
                </form>
                </article>
                
                <section>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p>
                    <ul>
                        <li>The Connected Hack-ton in Major Cities across Africa</li>
                        <li>The Peer to Gear  Competition for Secondary School Students in Africa </li>
                        <li>Marathon Events across various Cities in Africa </li>
                        <li>Tech-awareness across various schools, towns and villages in Africa </li>
                        <li>Empowering more ladies in tech to bring a balance to the African ecosystem</li>
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default Donation;