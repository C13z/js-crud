

/**
 * @returns {Object} quote information
 */
const fetchQuote = async () => {
    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes')
    const data = await res.json();
    return data[0];
}


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp = async (element) => {

    document.querySelector('#app-tittle').innerHTML = 'Breakingbad App';


    const quoteLabel = document.createElement('blockquote');
    const authoLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next Quote';

    const renderQuote = (data) => {
        quoteLabel.innerHTML = data.quote;
        authoLabel.innerHTML = data.author;
        element.replaceChildren(quoteLabel, authoLabel, nextQuoteButton);
    }

    //Añadir listener
    nextQuoteButton.addEventListener('click', async() => {

        element.innerHTML = 'Loading...';
        const quote = await fetchQuote();
        renderQuote(quote);
    })



    fetchQuote().then(renderQuote);
}

