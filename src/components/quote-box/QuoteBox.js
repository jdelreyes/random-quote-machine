import React from "react";
import { useState, useEffect } from "react";

import Share from "../share/Share";
import Button from "../button/Button";
import Header from "../layout/Header";
import Container from "../container/Container";

export default function QuoteBox(props) {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchRandomQuote = async () => {
    setLoading(true);
    const apiUrl = "https://api.quotable.io/quotes/random";

    await fetch(apiUrl, {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setQuote(data[0].content);
        setAuthor(data[0].author);
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
    <Container>
      <div className="d-flex flex-column">
        {loading ? (
          <div class="d-flex justify-content-center m-5 fs-1">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <Header quote={quote} author={author} />
        )}
      </div>
      <hr />
      <div className="row justify-content-start">
        <div className="col-11 d-flex justify-content-center align-items-center">
          <Button
            fetchRandomQuote={fetchRandomQuote}
            generateBackgroundImage={props.generateBackgroundImage}
          ></Button>
        </div>
        <div className="col-1 d-flex justify-content-center align-items-center">
          <Share quote={quote} author={author} />
        </div>
      </div>
    </Container>
  );
}
