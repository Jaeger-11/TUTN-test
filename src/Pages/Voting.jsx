import { useGlobalContext } from "../Content-Manager/Context";
import Modal from "../Components/ModalVote";
import rocket from '../Assets/Home-Images/rocket.png';


const Voting = () => {

    const { setTotEnergy, totenergy } = useGlobalContext();

    const data = [
        {
            votes: 20,
            cost: 2.50,
            classname: 'p1',            
        },
        {
            votes: 45,
            cost: 5,  
            classname: 'p2',          
        },
        {
            votes: 70,
            cost: 7.50,   
            classname: 'p3',          
        },
        {
            votes: 100,
            cost: 10,      
            classname: 'p4',       
        },
    ]

    const { modal, setModal } = useGlobalContext();

    const handleBuy = (votes) => {
        setTotEnergy( totenergy + votes )
        setModal(true)
    }

    return(
        <div className="voting-container">
            <div className="voting">
            <header>
                <h2>Increase Your voting Power Here</h2>
                <p>Cheer Your Favourite Nominee to Success</p>
            </header>

            <section className="voting-section">
                {data.map((item) => {
                    const { votes, cost, classname } = item;

                    return(
                        <article className= {classname} >
                            <div>
                            <h3>{votes}</h3>
                            <h6>Votes</h6>
                            </div>
                            <section>
                            <h2>${cost}</h2>
                            <button className="voting-btn" onClick={() => handleBuy(votes)} >Buy</button>
                            </section>
                            
                            {modal && <Modal  
                            image={rocket} 
                            title={'Awesome!'}
                            text={'You have successfully Increased your voting power. Go and make your favorite candidate win!'}
                            button={'Go to voting page'} 
                            to={'/categories'}
                            />}

                        </article>
                    )
                })}
            </section>
        </div>
        </div>
    )
}

export default Voting;