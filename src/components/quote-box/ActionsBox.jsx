import Button from "../button/Button";
import Share from "../share/Share";

export default function ActionsBox({
	fetchRandomQuote,
	quote,
	author,
	generateBackgroundImage,
}) {
	return (
		<>
			<div className='row justify-content-start'>
				<div className='col-11 d-flex justify-content-center align-items-center'>
					<Button
						fetchRandomQuote={fetchRandomQuote}
						generateBackgroundImage={generateBackgroundImage}
					></Button>
				</div>
				<div className='col-1 d-flex justify-content-center align-items-center'>
					<Share quote={quote} author={author} />
				</div>
			</div>
		</>
	);
}
