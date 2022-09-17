let realData = "";
let quotesData = "";

let quotes = document.getElementById('quotes');
let author = document.getElementById('author');
let btn = document.getElementById('btn');
// let tweetMe = document.getElementById('tweet');


let getNewQuotes = () => {
    // console.log(realData.length);
    let rnum = Math.floor(Math.random() * 20);
    quotesData = realData[rnum];
    quotes.innerHTML = `${quotesData.text}`;

    quotesData.author == null ? (author.innerHTML = "unknown") : (author.innerHTML = `${quotesData.author}`);
    // console.log(rnum);
};

const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realData = await data.json();
        // console.log(realData[0].text);

        getNewQuotes();
    } catch (error) {
        console.log(error);

    }

}

// let tweetNow = () => {
//     let tweetPost = `https://twitter.com/intent/tweet?text= ${quotesData.text} ${quotesData.author}`;
//     window.open(tweetPost);
// };

btn.addEventListener('click', getNewQuotes);
// tweetMe.addEventListener('click', tweetNow);

getQuotes();
