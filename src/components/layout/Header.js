import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

export default function Header(props) {
    return (
        <header id="text" className="fade-in">
            <h1 className="visually-hidden">Random Quote Machine</h1>
            <p className="fw-bolder text-black h1">
                <span className="fa-quote-left "><FontAwesomeIcon icon={faQuoteLeft} /></span>&nbsp;&nbsp;&nbsp;{props.quote}
            </p>
            <p id="author" className="opacity-75 fst-italic text-right mt-5 h3">- {props.author}&nbsp;&nbsp;&nbsp;</p>
        </header>
    )
}