export default function Container(props) {
    return (
        <section
            id="quote-box"
            className="p-5 border-0 rounded-4 m-2 container"
        >
            {props.children}
        </section>
    );
}