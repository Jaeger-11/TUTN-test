import times from '../Assets/Navigation-Images/Times.png';
import { useNavigate } from  'react-router-dom';
import { useGlobalContext } from '../Content-Manager/Context';
import Swing from 'react-reveal/Swing'

const Modal = ({image, title, text, button, to}) => {
    let navigate = useNavigate();
    const { setModal } = useGlobalContext();
    const handleClick = () => {
        navigate(to);
        setModal(false)
    }

    return(
        <div className='modal-container'>
            <Swing>
            <section className='modal'>
                <p className='times' ><img src={times} alt="" onClick={() => setModal(false)} /></p>
                <p><img src={image} alt="icon" /></p>
                <h3 className='title'>{title}</h3>
                <p style={{color: '#0C0114'}} >{text}</p>
                <button onClick={handleClick} > {button} </button>
            </section>
            </Swing>
        </div>
    )
}

export default Modal;