import { useParams , Link} from 'react-router-dom'
import minus from '../Assets/Home-Images/minus.png';
import plus from '../Assets/Home-Images/plus.png';
import { useState } from 'react';
import { useGlobalContext } from '../Content-Manager/Context';
import Modal from '../Components/ModalVote';
import thumbs from '../Assets/Home-Images/thumbsup.png';
import search from '../Assets/Home-Images/search.png'
import Fade from 'react-reveal/Fade';

const techies = [
    {
        name: 'Adewale Akinola',
        votes: 700,
    },
    {
        name: 'Falodun Damilola',
        votes: 767,
    },
    {
        name: 'Susan Itodo',
        votes: 530,
    },
    {
        name: 'Micheal Jake',
        votes: 478,
    },
    {
        name: 'Akpan Promise',
        votes: 234,
    },
    {
        name: 'Dorathy James',
        votes: 354,
    },
    {
        name: 'Ahmed Bukar',
        votes: 569,
    },
    {
        name: 'Chidera Chukwu',
        votes: 123,
    }
]

const Cate = ({name, votes}) => {
    const [ vote, setVote ] = useState(1);
    const { setModal } = useGlobalContext();

    const handleMinus = () => {
        if(vote > 1){
            setVote(vote - 1);
        } else {
            setVote(1)
        }
    }

    const handleVote = (name) => {
        // techies.filter((techie) => {
        //     techie.name === name
        //     return( {...techies, votes: votes + vote  } )
        // })
        setModal(true);
        votes = votes + vote
        setVote(1);
    }

    return (
        <Fade left>
        <article className='category-article'>
            <p className='category-image'></p>
            <h5>{name}</h5>
            <h6> {votes} votes </h6>
            <section>
                <div className='category-div'>
                    <img src={minus} alt="minus" onClick={handleMinus} className='minus' />
                    <p>{vote}</p>
                    <img src={plus} alt="plus" onClick={()=>setVote(vote + 1)} className='plus'/>
                </div>
                <button onClick={() => handleVote(name)}>Vote</button>
            </section>
        </article>
        </Fade>
    ) 
}

const Category =() => {
    let params = useParams();
    const { modal, totalEnergy, user } = useGlobalContext();

    return(
        <div className='category'>
            <header> 
                <h2>{params.category}</h2> 
                <form onSubmit={(e) => e.preventDefault()}>
                <span> <img src={search} alt="search" className='search' style={{bottom: '5px'}} /> <input type="text" name="" id="" placeholder="Nominee's Name, Nominee's Category"/></span>
                <button>Search</button>
            </form>
            <p>You have <span>{totalEnergy}</span> votes left</p>
            <Link to='/voting' style={{textDecoration:'none'}} ><p>Increase your voting power Here!</p></Link>
            </header>
            <section className='category-section'>
                {techies.map((techie) => {
                    return <Cate {...techie} />
                })}
            </section>
           
            {modal && <Modal  
            image={thumbs} 
            title={'Awesome!'}
            text={'Thank you for taking the time to vote. We are commited to promoting technology in Africa'}
            button={'Return to voting page'} 
            to={'/categories'}
            />}
            
        </div>
    )
}

export default Category;