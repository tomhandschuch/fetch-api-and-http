async function fetchNewQuote() {
    try {
        const response = await fetch("https://dummy-apis.netlify.app/api/quote");
        const data = await response.json();
        
        document.querySelector("#quote-text").textContent = `"${data.quote}"`;
        document.querySelector("#quote-author").textContent = `- ${data.author}`;
    } catch (error) {
        console.error("Error fetching the quote:", error);
    }
}

document.querySelector("#quote-btn").addEventListener("click", fetchNewQuote);