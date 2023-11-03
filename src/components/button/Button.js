export default function Button(props) {

    return (
        <button
            id="new-quote"
            onClick={() => {
                props.fetchRandomQuote();
                props.generateBackgroundImage();
            }}
            className="btn btn-dark btn-lg w-100"
        >
            Generate
        </button >)
}
