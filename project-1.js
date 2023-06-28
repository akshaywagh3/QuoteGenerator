//variables
let btn=document.querySelector('#new-quote');
let quote=document.querySelector('.quote');
let person=document.querySelector('.person');

const quotes=[
    {
      "quote": "Be the change that you wish to see in the world.",
      "person": "Mahatma Gandhi"
    },
    {
      "quote": "The only way to do great work is to love what you do.",
      "person": "Steve Jobs"
    },
    {
      "quote": "I have not failed. I've just found 10,000 ways that won't work.",
      "person": "Thomas Edison"
    },
    {
      "quote": "Believe you can and you're halfway there.",
      "person": "Theodore Roosevelt"
    },
    {
      "quote": "If you want to live a happy life, tie it to a goal, not to people or things.",
      "person": "Albert Einstein"
    },
    {
        "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "person": "Winston Churchill"
      },
      {
        "quote": "You miss 100% of the shots you don't take.",
        "person": "Wayne Gretzky"
      },
      {
        "quote": "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        "person": "Aristotle"
      },
      {
        "quote": "It does not matter how slowly you go as long as you do not stop.",
        "person": "Confucius"
      },
      {
        "quote": "The best way to predict the future is to invent it.",
        "person": "Alan Kay"
      },
      {
        "quote": "The purpose of our lives is to be happy.",
        "person": "Dalai Lama"
      },
      {
        "quote": "Your time is limited, don't waste it living someone else's life.",
        "person": "Steve Jobs"
      },
      {
        "quote": "If you can dream it, you can achieve it.",
        "person": "Zig Ziglar"
      },
      {
        "quote": "Don't watch the clock; do what it does. Keep going.",
        "person": "Sam Levenson"
      },
      {
        "quote": "The only true wisdom is in knowing you know nothing.",
        "person": "Socrates"
      },
      {
        "quote": "In three words I can sum up everything I've learned about life: it goes on.",
        "person": "Robert Frost"
      },
      {
        "quote": "We are all in the gutter, but some of us are looking at the stars.",
        "person": "Oscar Wilde"
      },
      {
        "quote": "Happiness is not something ready made. It comes from your own actions.",
        "person": "Dalai Lama"
      },
      {
        "quote": "The best revenge is massive success.",
        "person": "Frank Sinatra"
      },
      {
        "quote": "Life is 10% what happens to us and 90% how we react to it.",
        "person": "Charles R. Swindoll"
      },
      {
        "quote": "It always seems impossible until it's done.",
        "person": "Nelson Mandela"
      },
      {
        "quote": "The only limit to our realization of tomorrow will be our doubts of today.",
        "person": "Franklin D. Roosevelt"
      },
      {
        "quote": "Don't let yesterday take up too much of today.",
        "person": "Will Rogers"
      },
      {
        "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "person": "Nelson Mandela"
      },
      {
        "quote": "The only way to have a good day is to start it with a positive attitude.",
        "person": "Unknown"
      },
      {
        "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "person": "Nelson Mandela"
      },
      {
        "quote": "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
        "person": "Steve Jobs"
      },
      {
        "quote": "Believe you can and you're halfway there.",
        "person": "Theodore Roosevelt"
      },
      {
        "quote": "Happiness is not a goal; it is a by-product.",
        "person": "Eleanor Roosevelt"
      },
      {
        "quote": "The best way to find yourself is to lose yourself in the service of others.",
        "person": "Mahatma Gandhi"
      }
  ];
  btn.addEventListener('click', function(){
    let random=Math.floor(Math.random()*quotes.length);
    quote.innerText=quotes[random].quote;
    person.innerText=quotes[random].person;

  });
