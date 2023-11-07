export default function BackgroundImage(props) {
	return (
		<div
			style={{
				backgroundImage: `${props.backgroundImage}`,
			}}
			className='d-flex flex-grow-1 justify-content-center align-items-center'
		>
			{props.children}
		</div>
	);
}
