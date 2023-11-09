const baseUrl = "https://api.quotable.io";

export async function fetchApiQuote() {
	//  fetching begins...
	const res = await fetch(`${baseUrl}/quotes/random`);
	const data = await res.json();

	// error handling: in case "fetch" cannot reach to the server :D
	if (!res.ok) {
		throw new Error("Failed to fetch quotes...");
	}

	// ~ after "fetch" is successful ~
	return data;
}
