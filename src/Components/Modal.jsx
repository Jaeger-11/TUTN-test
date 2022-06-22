import times from '../Assets/Navigation-Images/Times.png'

const Modal = ({image, title, text, button}) => {

    return(
        <div>
            <section>
                <p><img src={times} alt="" /></p>
                <img src={image} alt="icon" />
                <h3>{title}</h3>
                <p>{text}</p>
                <button>{button}</button>
            </section>
        </div>
    )
}

export default Modal;