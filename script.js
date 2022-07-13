const Colors = [
    '#ff9933',
    '#9999ff',
    '#84e184',
    '#00b386',
    '#ff531a',
    '#ff0055',
    '#ffd11a',
    '#006652',
    '#ffd480',
    '#cc99ff',
    '#ff3333',
    '#00b8e6',
    '#00cc66'
];

const Quotes = {
    "-Louis L`Amour": "Start writing, no matter what. The water does not flow until the faucet is turned on.",
    "-Steven Pressfield": "Start before you`re ready.",
    "-Jodi Picoult": "You can always edit a bad page. You can`t edit a blank page",
    "-Jack London": "You can`t wait for inspiration. You have to go after it with a club.",
    "-Herman Melville": "To produce a mighty book, you must choose a mighty theme.",
    "-Nelson Mandela": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "-Walt Disney": "The way to get started is to quit talking and begin doing.",
    "-Eleanor Roosevelt": "If life were predictable it would cease to be life, and be without flavor.",
    "-Franklin D. Roosevelt": "When you reach the end of your rope, tie a knot in it and hang on.",
    "-Benjamin Franklin": "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    "-Aristotle": "It is during our darkest moments that we must focus to see the light.",
    "-Abraham Lincoln": "In the end, it's not the years in your life that count. It's the life in your years.",
    "-Helen Keller": "Life is either a daring adventure or nothing at all. ",
    "-Dalai Lama": "The purpose of our lives is to be happy."
}

let currentColor = "", currentAuthor = "", currentQuote = "";

function ChangeQoute() 
{
    let index = Math.floor(Math.random() * Object.values(Quotes).length);
    currentAuthor = Object.keys(Quotes)[index];
    currentQuote = Object.values(Quotes)[index];
    currentColor = Colors[Math.floor(Math.random() * Colors.length)];
    document.getElementById("text").innerHTML = currentQuote;
    document.getElementById("author").innerHTML = currentAuthor;
    document.getElementById("myBody").style.color = currentColor;
    document.getElementById("myBody").style.backgroundColor = currentColor;
    let buttons = document.getElementsByClassName("button")
    for (let i = 0; i < buttons.length; i++)
    {
        buttons[i].style.backgroundColor = currentColor;
    }
}