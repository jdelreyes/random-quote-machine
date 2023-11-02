import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [quote, setQuote] = useState(null);

  const fetchRandomQuote = () => {
    const apiUrl = "https://api.quotable.io/quotes/random";

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setQuote(data.content);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <section
      id="quote-box"
      className="mx-auto container d-flex flex-column text-center border border-primary-subtle mw-60 rounded"
    >
      <div className="d-flex flex-column">
        <h1 id="text" className="">
          "{quote}"
        </h1>
        <p id="author" className="opacity-50 fst-italic">
          author
        </p>
      </div>
      <div className="d-flex flex-column">
        <button
          id="new-quote"
          onClick={fetchRandomQuote}
          className="btn btn-primary"
        >
          Generate New Quote
        </button>
        <a
          id="tweet-quote"
          href="https://twitter.com/intent/tweet"
          target="_blank"
        >
          Tweet
        </a>
      </div>
    </section>
  );
}

export default App;
