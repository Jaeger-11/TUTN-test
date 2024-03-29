import times from '../Assets/Navigation-Images/Times.png';
import { useNavigate } from  'react-router-dom';
import { useGlobalContext } from '../Content-Manager/Context';
import Swing from 'react-reveal/Swing'

const Modal = ({image, title, text, button, to, err,res}) => {
    let navigate = useNavigate();
    const { setModal, setError, setRestricted } = useGlobalContext();
    const handleClick = () => {
        navigate(to);
        if (err) {
            setError(false)
        } else if(res){
            setRestricted(false)
        }
         else setModal(false)
    }
    const  handleTimes = () => {
        if (err) {
            setError(false)
        } else if(res){
            setRestricted(false)
        }
         else setModal(false)
    }

    return(
        <div className='modal-container'>
            <Swing>
            <section className='modal'>
                <p className='times' ><img src={times} alt="" onClick={handleTimes} /></p>
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