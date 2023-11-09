import { useCallback, useEffect, useState } from 'react';
import BackgroundImage from './components/layout/BackgroundImage';
import QuoteBox from './components/quote-box/QuoteBox';

export default function App() {
	const [backgroundImage, setBackgroundImage] = useState('');

	const randomIntFromInterval = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	const generateBackgroundImage = useCallback(() => {
		setBackgroundImage(
			`linear-gradient(${randomIntFromInterval(
				1,
				360,
			)}deg, rgba(${randomIntFromInterval(130, 255)},${randomIntFromInterval(
				130,
				255,
			)},${randomIntFromInterval(130, 255)},1) 0%, rgba(${randomIntFromInterval(
				130,
				255,
			)},${randomIntFromInterval(130, 255)},${randomIntFromInterval(
				130,
				255,
			)},1) 50%, rgba(${randomIntFromInterval(
				130,
				255,
			)},${randomIntFromInterval(130, 255)},${randomIntFromInterval(
				130,
				255,
			)},1) 100%)`,
		);
	}, []);

	useEffect(() => {
		generateBackgroundImage();
	}, [generateBackgroundImage]);

	return (
		<>
			<div className='d-flex flex-column min-vh-100 min-vw-100'>
				<BackgroundImage backgroundImage={backgroundImage}>
					<QuoteBox generateBackgroundImage={generateBackgroundImage} />
				</BackgroundImage>
			</div>
		</>
	);
}
