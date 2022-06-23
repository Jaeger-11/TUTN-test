
import persons from '../Assets/Home-Images/persons.png';
import group from '../Assets/Home-Images/group-photo.png';
import Fade  from 'react-reveal/Fade';

const About = ()=> {

    return(
        <div className='about'>
            <Fade top>
            <header>
                <h2>The Connected Awards</h2>
                <p>Learn about us</p>
            </header>
            </Fade>
            <p className='about-firstimage' ><img src={persons} alt='group2' /></p>
            <section className='about-section'>
                <article>
                    <Fade left>
                    <h2>Connecting Techies Globally</h2>
                    <p style={{marginTop:'1.5rem'}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    </Fade>
                </article>
                <p style={{width:'100%'}}><img src={group} alt='group' style={{width:'inherit'}} /></p>
            </section>
        </div>
    )
}

export default About;