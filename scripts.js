const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
  { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "To be or not to be, that is the question.", author: "William Shakespeare" },
  { text: "Genius is one percent inspiration and ninety-nine percent perspiration.", author: "Thomas Edison" }
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  const quoteBox = document.getElementById("quote-box");
  const quoteText = document.getElementById("quote");
  const authorText = document.getElementById("author");


  quoteBox.style.animation = "none";
  void quoteBox.offsetWidth;
  quoteBox.style.animation = "fadeIn 0.8s ease forwards";

  
  quoteText.textContent = `"${quote.text}"`;
  authorText.textContent = `— ${quote.author}`;
}

window.onload = generateQuote;
