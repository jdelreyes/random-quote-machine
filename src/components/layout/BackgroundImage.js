import { useEffect, useState } from "react";
import QuoteBox from "../quote/QuoteBox";

export default function BackgroundImage() {
    const [backgroundImage, setBackgroundImage] = useState('');

    const randomIntFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const generateBackgroundImage = () => {
        setBackgroundImage(`linear-gradient(${randomIntFromInterval(1, 360)}deg, rgba(${randomIntFromInterval(130, 255)},${randomIntFromInterval(130, 255)},${randomIntFromInterval(130, 255)},1) 0%, rgba(${randomIntFromInterval(130, 255)},${randomIntFromInterval(130, 255)},${randomIntFromInterval(130, 255)},1) 50%, rgba(${randomIntFromInterval(130, 255)},${randomIntFromInterval(130, 255)},${randomIntFromInterval(130, 255)},1) 100%)`)
    }

    return (
        <div style={{
            backgroundImage: `${backgroundImage}`
        }} className="d-flex flex-grow-1 justify-content-center align-items-center">
            <QuoteBox generateBackgroundImage={generateBackgroundImage} >

            </QuoteBox>
        </div>
    );
}