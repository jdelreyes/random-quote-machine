import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Share(props) {
	return (
		<a
			id='tweet-quote'
			href={`https://twitter.com/intent/tweet?text=${props.quote}\n\n-${props.author}`}
			target='_blank'
			rel='noreferrer'
			className='fs-1 text-black'
		>
			<FontAwesomeIcon icon={faShareFromSquare} />
		</a>
	);
}
