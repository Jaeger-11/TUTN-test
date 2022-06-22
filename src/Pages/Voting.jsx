

const Voting = () => {

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

    return(
        <div className="voting-container">
            <div className="voting">
            <header>
                <h2>Increase Your Voting Power</h2>
                <p>Cheer Your Favourite Nominee to Success</p>
            </header>

            <section className="voting-section">
                {data.map((item) => {
                    const { votes, cost, classname } = item;

                    return(
                        <article className= {classname} >
                            {/* <article>

                            </article> */}
                            <div>
                            <h3>{votes}</h3>
                            <h6>Votes</h6>
                            </div>
                            <section>
                            <h2>${cost}</h2>
                            <button className="voting-btn">Buy</button>
                            </section>
                            
                        </article>
                    )
                })}
            </section>
        </div>
        </div>
    )
}

export default Voting;