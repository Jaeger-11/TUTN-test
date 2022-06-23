
import africa from '../Assets/Home-Images/africamap.png';
import { useNavigate } from 'react-router-dom';
import Fade  from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';

const Future = () => {
    let navigate = useNavigate();

    const handleClick = () => {
        navigate('/nominate')
    }

    return(
        <div className='future'>
            <Fade top>
            <header>
                <h2>Future Editions</h2>
                <p>Nominate candidates for future editions</p>
            </header>
            </Fade>

            <section className='home-flex' style={{margin: '2rem 0'}}>
                <Pulse>
                <article className='future-article'>
                    <img src={africa} alt="africa" />
                    <h4>East African Edition</h4>
                    <button onClick={handleClick} >Nominate</button>
                </article>
                <article className='future-article'>
                    <img src={africa} alt="africa" />
                    <h4>South African Edition</h4>
                    <button onClick={handleClick}>Nominate</button>
                </article>
                <article className='future-article'>
                    <img src={africa} alt="africa" />
                    <h4>North African Edition</h4>
                    <button onClick={handleClick}>Nominate</button>
                </article>
                <article className='future-article'>
                    <img src={africa} alt="africa" />
                    <h4>West African Edition</h4>
                    <button onClick={handleClick}>Nominate</button>
                </article>
                </Pulse>
            </section>
        </div>
    )
}

export default Future;