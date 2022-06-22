import './home.css';
import { Link, useNavigate } from 'react-router-dom'

//Import Home Images
import arrow from '../../Assets/Home-Images/arrow-right.png';
import speaker from '../../Assets/Home-Images/speaker.svg';
import target from '../../Assets/Home-Images/target.png';
import trophy from '../../Assets/Home-Images/trophy.png';
import dices from '../../Assets/Home-Images/dices.png';
import group from '../../Assets/Home-Images/group-photo.png';
import person1 from '../../Assets/Home-Images/person1.png';
import person2 from '../../Assets/Home-Images/person2.png';
import person3 from '../../Assets/Home-Images/person3.png';
import person4 from '../../Assets/Home-Images/person4.png';
import vectorright from '../../Assets/Home-Images/vectorright.png';
import vectorleft from '../../Assets/Home-Images/vectorleft.png';
import ribbon from '../../Assets/Home-Images/ribbon.png';
import star from '../../Assets/Home-Images/star.png';
import stars from '../../Assets/Home-Images/3stars.png';
import footerlogo from '../../Assets/Home-Images/footer-logo.png';
import search from '../../Assets/Home-Images/search.png';

const Home = () => {
    let navigate = useNavigate();
    return (
        <div className='home'>
            <header style={{margin:'3rem 0'}}>
                <h1>First Ever Tech Personality Award For Africans in Europe</h1>
                <form style={{margin:'1rem 0'}}>
                    <span> <img src={search} alt="search" className='search' /> <input type="text" name="" id="" placeholder="Nominee's Name"/></span>
                    <button>Search</button>
                </form>
                <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap:'5px'}} onClick={() => navigate('categories')} >
                    <p>View all categories</p> 
                    <img src={arrow} alt='arrow' style={{width: '24px'}}/> 
                </div> 
            </header>

            <article className='home-target'>
                <h2>Our Target</h2>
                <section className='home-flex'>
                    <div>
                        <img src={speaker} alt='speaker' className='home-vector' />
                        <p>Awareness</p>
                    </div>
                    <div>
                        <img src={target} alt='target' className='home-vector'/>
                        <p>Competition</p>
                    </div>
                    <div>
                        <img src={dices} alt='dices' className='home-vector'/>
                        <p>Entertainment</p>
                    </div>
                    <div>
                        <img src={trophy} alt='trophy' className='home-vector'/>
                        <p>Recognition</p>
                    </div>
                </section>
            </article>

            <section className='home-section-one'>
                <div>
                    <img src={group} alt='group' style={{width:'inherit'}} /> 
                </div>
                <section>
                <article>
                    <h2>The Connected Awards</h2>
                    <p className='home-dash'></p>
                    <p className='home-mobile'>
                        The connected is....it is a long established facts that a reader will be distracted by the readable contnt of a page when looking at its layout
                    </p>
                    <p className='home-content'>
                    The connected is.....It is a long established fact that 
                    a reader will be distracted by the readable content 
                    of a page when looking at its layout. The point of 
                    using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    </p>
                    <p><button>Learn More</button></p>
                </article>
                <p style={{textAlign: 'right'}} ><img src={vectorright} alt='vector' className='home-rainbow'/></p>
                </section>
            </section>

            <section className='home-section-one'>
                <div style={{margin:0}}>
                    <p className='home-grid'>
                    <img src={person1} alt="person1" className='home-grid-img'/>
                    <img src={person2} alt="person2" className='home-grid-img'/>
                    <img src={person3} alt="person3" className='home-grid-img'/>
                    <img src={person4} alt="person4" className='home-grid-img'/>
                    </p>
                    
                </div>
                <section className='toleft'>
                    <article >
                        <h2>Past Editions</h2>
                        <p className='home-dash'></p>
                        <p className='home-mobile'>
                            The connected is....it is a long established facts that a reader will be distracted by the readable content of a page when looking at its layout
                        </p>
                        <p className='home-content'>
                        The connected is.....It is a long established fact that 
                        a reader will be distracted by the readable content 
                        of a page when looking at its layout. The point of 
                        using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                        </p>
                        <p><button>Read More</button></p>
                        
                    </article>
                    <img src={vectorleft} alt='vector' className='home-rainbow'/>
                </section>
            </section>

            <section className='home-section-two'>
                <article>
                    <p><img src={ribbon} alt="ribbon" /></p>
                    <h4>Promising Talent</h4>
                    <p>Promising Talent is an individual with less than 5 years experience in Nigeria technology ecosystem. Such individual are well recognized in their field for impacting with their skills.</p>
                </article>
                <article>
                    <p><img src={star} alt="star" /></p>
                    <h4>Intermediate Talent</h4>
                    <p>Intermediate Talent is an individual with less than 5 years experience in Nigeria technology ecosystem. Such individual are well recognized in their field for impacting with their skills.</p>
                </article>
                <article>
                    <p><img src={stars} alt="stars" /></p>
                    <h4>Exceptional Talent</h4>
                    <p>ExceptionalTalent is an individual with less than 5 years experience in Nigeria technology ecosystem. Such individual are well recognized in their field for impacting with their skills.</p>
                </article>
            </section>

            <footer>
                <section className='footer-section-one'>
                    <ul>
                        <li>About</li>
                        <li><Link to='/' style={{textDecoration:'none', color:'white'}}>The Connected Magazine</Link></li>
                        <li><Link to='/' style={{textDecoration:'none', color:'white'}}>Past Editions</Link></li>
                        <li><Link to='/' style={{textDecoration:'none', color:'white'}}>Celebrated Techies</Link></li>
                    </ul>
                    <ul>
                        <li>Legal</li>
                        <li><Link to='/' style={{textDecoration:'none', color:'white'}}>Terms of Service</Link></li>
                        <li><Link to='/' style={{textDecoration:'none', color:'white'}}>Privacy Policy</Link></li>
                    </ul>
                    <ul>
                        <li>Social</li>
                        <li><Link to='/' style={{textDecoration:'none', color:'white'}}>Linkedin</Link></li>
                    </ul>
                    <ul>
                        <li>Contact</li>
                        <li>+2347057219951</li>
                        <li>Chat on WhatsApp</li>
                        <li>connectedawards@gmail.com</li>
                    </ul>
                </section>
                
                <img src={footerlogo} alt="logo" />
                <section className='footer-section-two'>
                    <p>Connecting Techies Globally</p>
                    <p>@2022 The Connected Awards- All rights reserved</p>
                </section>
            </footer>
        </div>
    )
}

export default Home;