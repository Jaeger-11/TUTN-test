import { useNavigate } from 'react-router-dom';
import arrow from '../Assets/Home-Images/arrow-right.png'
import cate from '../Assets/Home-Images/category.png';
import search from '../Assets/Home-Images/search.png';


const Categories = () => {
    let navigate = useNavigate();

    const votingCategories = [
        'Exceptional Data Analyst',
        'Promising Data Analyst',
        'Exceptional Data Scientist',
        'Exceptional Visual Designer',
        'Promising Virsual Designer',
        'Exceptional DevOps Expert'
    ] 

    const handleClick = (category) => {
        navigate(`/categories/${category}`);
    }

    return(
        <div className='categories'>
            <header>
                <h2>Voting Categories</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                <span> <img src={search} alt="search" className='search' /> <input type="text" name="" id="" placeholder="Nominee's Name"/></span>
                <button>Search</button>
            </form>
            </header>
            
            <section className='categories-flex'>
                {votingCategories.map((category) => {
                    return (
                    <article onClick={() => handleClick(category)} className='future-article' >
                        <img src={cate} alt="category" />
                        <p>{category}</p>
                        <p className='arrow-right'><img src={arrow} alt="arrow"/></p>
                    </article>
                    )
                })}
                {votingCategories.map((category) => {
                    return (
                    <article onClick={() => handleClick(category)} className='future-article' >
                        <img src={cate} alt="category" />
                        <p>{category}</p>
                        <p className='arrow-right'><img src={arrow} alt="arrow"/></p>
                    </article>
                    )
                })}
            </section>
        </div>
    )
}

export default Categories;