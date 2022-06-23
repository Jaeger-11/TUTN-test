import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

const Past = () => {

    return(
        <div className="past">
            <Fade top>
            <header>
                <h2>Celebrated Techies</h2>
                <p>A look into some of our past winners</p>
            </header>
            </Fade>

            
            <section className="past-section">
                <Slide left>
                <div>
                    <p className="past-image"></p>
                    <h4>Sarah Olalore</h4>
                    <h5>Exceptional Visual Designer</h5>
                </div>
                <div>
                    <p className="past-image"></p>
                    <h4>Sarah Olalore</h4>
                    <h5>Exceptional Visual Designer</h5>
                </div>
                <div>
                    <p className="past-image"></p>
                    <h4>Sarah Olalore</h4>
                    <h5>Exceptional Visual Designer</h5>
                </div>
                <div>
                    <p className="past-image"></p>
                    <h4>Sarah Olalore</h4>
                    <h5>Exceptional Visual Designer</h5>
                </div>
                </Slide>
                <Fade right>
                <div>
                    <p className="past-image"></p>
                    <h4>Sarah Olalore</h4>
                    <h5>Exceptional Visual Designer</h5>
                </div>
                    
                <div>
                    <p className="past-image"></p>
                    <h4>Sarah Olalore</h4>
                    <h5>Exceptional Visual Designer</h5>
                </div>
                <div>
                    <p className="past-image"></p>
                    <h4>Sarah Olalore</h4>
                    <h5>Exceptional Visual Designer</h5>
                </div>
                <div>
                    <p className="past-image"></p>
                    <h4>Sarah Olalore</h4>
                    <h5>Exceptional Visual Designer</h5>
                </div>
                </Fade>
            </section>
        </div>
    )
}

export default Past;