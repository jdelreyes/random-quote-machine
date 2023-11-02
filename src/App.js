import { useState, useEffect } from 'react';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchRandomQuote = () => {
    setLoading(true);
    // const apiUrl = '';
    const apiUrl = "https://api.quotable.io/quotes/random";

    fetch(apiUrl, {
      method: 'GET'
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // This returns a Promise
      })
      .then((data) => {
        data.forEach((response) => {
          setQuote(response.content);
          setAuthor(response.author);
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <div style={{
      backgroundImage: 'url("https://picsum.photos/50/75?blur")',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }} className="d-flex flex-grow-1 justify-content-center align-items-center">
      <section
        id="quote-box"
        className="p-5 border-0 rounded-4 m-2"
      >
        <div className="d-flex flex-column">
          {loading ? <div class="spin-border m-5 mx-auto" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
            : <>
              <header id="text" className="h4">

                <h1 className="fw-bolder text-black">
                  <span className="quotation-mark">"</span>&nbsp;&nbsp;&nbsp;{quote}
                </h1>
              </header>
              <h3 id="author" className="opacity-75 fst-italic text-right mt-5">- {author}&nbsp;&nbsp;&nbsp;</h3>
            </>}
        </div>
        <hr />
        <div className="d-flex flex-column">
          <button
            id="new-quote"
            onClick={fetchRandomQuote}
            className="btn btn-outline-dark btn-lg"
          >
            Generate
          </button>
          <a
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text=${quote}\n\n-${author}`}
            target="_blank"
            rel="noreferrer"
          >
          </a>
        </div>
        <hr />
        <div>
          <div></div>
          <div></div>
        </div>
      </section >
    </div >
  );
}

export default App;
