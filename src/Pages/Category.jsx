import { useParams , Link} from 'react-router-dom'
import minus from '../Assets/Home-Images/minus.png';
import plus from '../Assets/Home-Images/plus.png';
import { useState } from 'react';

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
        votes = votes + vote
        setVote(1);
    }

    return (
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
    ) 
}

const Category =() => {
    let params = useParams();


    return(
        <div className='category'>
            <header> 
                <h2>{params.category}</h2> 
                <form>
                <input type="text" name="" id="" placeholder="Nominee's Name, Nominee's Category"/>
                <button>Search</button>
            </form>
            <p>You have <span>70</span> votes left</p>
            <Link to='/voting'><p>Increase your voting power</p></Link>
            </header>
            <section className='category-section'>
                {techies.map((techie) => {
                    return <Cate {...techie} />
                })}
            </section>
            
        </div>
    )
}

export default Category;