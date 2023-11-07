import React, { useEffect, useState } from "react";

import Container from "../container/Container";
import Error from "../error/Error";
import { fetchApiQuote } from "../service/fetchApi";
import ActionsBox from "./ActionsBox";
import Box from "./Box";

export default function QuoteBox({ generateBackgroundImage }) {
	// ~ 3 should-have useStates when it comes to data fetching ~
	const [quoteData, setQuoteData] = useState({ quote: "", author: "" });
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState();

	const fetchRandomQuote = async () => {
		// "loading" state first starts...
		setIsLoading(true);

		try {
			// split API fetch service into smaller component
			// looks cleaner :D
			const quoteData = await fetchApiQuote();

			// Check if the array is not empty before accessing the data
			// IMPORTANT: (quoteData?.length > 0) === (quoteData && quoteData.length > 0)
			if (quoteData?.length > 0) {
				// Choose a random index from the array
				const randomIndex = Math.floor(Math.random() * quoteData.length);
				const randomQuote = quoteData[randomIndex];

				// Set the quote and author state values
				setQuoteData({
					quote: randomQuote?.content,
					author: randomQuote?.author,
				});

				// *** (mistake desc by jay: this component will render twice when using setStates like below => bad performance) :< ***
				// setQuote(randomQuote.content);
				// setAuthor(randomQuote.author);
			}

			// IMPORTANT: setting the "loading" state right after the component is mounted/rendered (asynchronous)
			setIsLoading(false);

			// setting "error" useState for built-in "err.message"
		} catch (err) {
			setError({
				message:
					err.message || "Could not fetch quotes, please try again later",
			});

			// IMPORTANT: setting the "loading" state right after the component is mounted/rendered (asynchronous)
			setIsLoading(false);
		}
	};

	// ~ so that the function only renders when dependencies changed (with useEffect) ~
	useEffect(() => {
		fetchRandomQuote();
	}, []);

	// error handling: when baseUrl is mistyped :D
	if (error) {
		return <Error title='An error occurred...' message={error.message} />;
	}

	// JS object destructuring: to pull "quote", "author" values out for JSX usage
	const { quote, author } = quoteData;

	return (
		<Container>
			<Box isLoading={isLoading} quote={quote} author={author} />
			<ActionsBox
				fetchRandomQuote={fetchRandomQuote}
				quote={quote}
				author={author}
				generateBackgroundImage={generateBackgroundImage}
			/>
		</Container>
	);
}

// GOOD START JRMEOE!!
// ======================================================================================================
// export default function QuoteBox(props) {
//    const [quote, setQuote] = useState('');
//    const [author, setAuthor] = useState('');
//    const [loading, setLoading] = useState(false);

//    const fetchRandomQuote = async () => {
//        setLoading(true);
//        const apiUrl = "https://api.quotable.io/quotes/random";

//        await fetch(apiUrl, {
//            method: 'GET'
//        })
//            .then((response) => {
//                if (!response.ok) {
//                    throw new Error("Network response was not ok");
//                }
//                return response.json();
//            })
//            .then((data) => {
//                data.forEach((response) => {
//                    setQuote(response.content);
//                    setAuthor(response.author);
//                });
//            })
//            .catch((error) => {
//                console.error("Error fetching data:", error);
//            })
//            .finally(() => {
//                setLoading(false);
//            });
//    };

//    useEffect(() => {
//        fetchRandomQuote();
//    }, [])
// ======================================================================================================
