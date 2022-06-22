
import persons from '../../Assets/Home-Images/persons.png';
import group2 from '../../Assets/Home-Images/group2.png';
import group from '../../Assets/Home-Images/group-photo.png';

const About = ()=> {

    return(
        <div className='about'>
            <header>
                <h2>The Connected Awards</h2>
                <p>Learn about us</p>
            </header>
            <p className='about-firstimage' ><img src={persons} alt='group2' /></p>
            <section className='about-section'>
                <article>
                    <h2>Connecting Techies Globally</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae rerum ut odio facilis placeat aliquid optio quis, similique quibusdam. Voluptatum magni at delectus officia commodi libero, nostrum aspernatur? Nesciunt, molestiae.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nesciunt praesentium aspernatur iusto accusantium facilis, dolores, cupiditate vitae neque voluptas adipisci id quo porro veritatis totam, nobis nostrum doloribus alias.
                    </p>
                </article>
                <p style={{width:'100%'}}><img src={group} alt='group-photo' style={{width:'inherit'}} /></p>
            </section>
        </div>
    )
}

export default About;