const quotes = [
  {
    quote:
      'Many of life’s failures are people who did not realize how close they were to success when they gave up.',
    author: 'Thomas A. Edison',
  },
  {
    quote:
      'If you spend too much time thinking about a thing, you’ll never get it done.',
    author: 'Bruce Lee',
  },
  {
    quote:
      'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    author: 'Nelson Mandela',
  },
  {
    quote:
      'Successful people do what unsuccessful people are not willing to do. Don’t wish it were easier; wish you were better..',
    author: 'Jim Rohn',
  },
  {
    quote: 'Do not try to be original, just try to be good.',
    author: 'Paul Rand',
  },
  {
    quote:
      'If you cannot fly then run. If you cannot run, then walk. And, if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.',
    author: 'Martin Luther King Jr.',
  },
  {
    quote:
      'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
    author: 'Thomas Edison',
  },
  {
    quote:
      'The only thing worse than starting something and failing … is not starting something.',
    author: 'Seth Godin',
  },
  {
    quote:
      'If you really want to do something, you’ll find a way. If you do not, you’ll find an excuse.',
    author: 'Jim Rohn',
  },
  {
    quote:
      'You will face many defeats in life, but never let yourself be defeated.',
    author: 'Maya Angelou',
  },
];

// const author = quotes[0].author;
// const quote = quotes[0].quote;

// author.innerText = document.querySelector('#quote span:first-child');
// quote.innerText = document.querySelector('#quote span:last-child');

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

// quote.innerText = quotes[0].quote;
// author.innerText = Math.floor(Math.random(quotes[length]).author;

const randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randomQuotes.quote;
author.innerText = randomQuotes.author;

// Math.random()  0~1 사이  (1제외) 랜덤한 숫자 제공  (ex. 0.3847239847, 0.72847328244...)
// Math.random()  * 10 하면  0 ~ 10 사이 숫자 얻을 수 있음!

// Math.round() 반올림  (ex 1. Math.round(0.8)  #1       ex 2. Math.round(0.1)  #0)

// Math.ceil()  올림  (ex 1. Math.ceil(1.1)   #2       ex 2. Math.ceil(1.0001)  #2)

// Math.floor()  주어진 수 이하의 가장 큰 정수 반환   (ex 1. Math.floor(1.9)   #1       ex 2. Math.floor(1.9999)  #1)
