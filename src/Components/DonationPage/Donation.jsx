
import notebook from '../../Assets/Home-Images/notebook.png';

const Donation = () => {

    return(
        <div>
            <header>
                <h2>Make a Donation</h2>
                <p>Make a contribution to the growth of technology in Africa</p>
            </header>
            <img src={notebook} alt="notebook" />
            <form>
                <p> <label htmlFor="donate">Enter Donation Amount</label> </p>
                <input type="number" name="" id="donate" min={5} />
                <button>Make Donation</button>
            </form>
            <section>
                <p></p>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </section>
        </div>
    )
}

export default Donation;