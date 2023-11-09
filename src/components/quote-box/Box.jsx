import Header from "../layout/Header";

export default function Box({ isLoading, quote, author }) {
	return (
		<>
			<div className='d-flex flex-column'>
				{isLoading ? (
					<div className='d-flex justify-content-center m-5 fs-1'>
						<div className='spinner-border' role='status'>
							<span className='sr-only'>Loading...</span>
						</div>
					</div>
				) : (
					<Header quote={quote} author={author} />
				)}
			</div>
		</>
	);
}
