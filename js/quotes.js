const quotesArr = [
  // 명언 array
  {
    quotes: "Act as if it were impossible to fail.",
    author: "Dorothea Brande",
  },
  {
    quotes:
      "One often contradicts an opinion when what is uncongenial is really the tone in which it was conveyed.",
    author: "Friedrich Nietzsche",
  },
  {
    quotes:
      "The weak can never forgive. Forgiveness is the attribute of the strong.",
    author: "Mahatma Gandhi",
  },
  {
    quotes: "I'm afraid I'm being an awful nuisance.",
    author: "Edith Sitwell",
  },
  {
    quotes:
      "Selfishness is not living as one wishes to live, it is asking others to live as one wishes to live.",
    author: "Oscar Wilde",
  },
  {
    quotes: "Seek not happiness too greedily, and be not fearful of happiness.",
    author: "Lao-tzu",
  },
  {
    quotes: "Measure not the work until the day's out and the labor done.",
    author: "Elizabeth Barrett Browning",
  },
  {
    quotes: "An optimist is the human personification of spring.",
    author: "Susan J. Bissonette",
  },
  {
    quotes: "All cats are gray in the dark.",
    author: "Benjamin Franklin",
  },
  {
    quotes: "Fear cannot be without hope nor hope without fear.",
    author: "Baruch Spinoza",
  },
];

const quote = document.querySelector(".quote span:first-child"); // 명언을 넣을 공간
const author = document.querySelector(".quote span:last-child"); // 명언을 한 사람의 이름을 넣을 공간

const todayQuote = quotesArr[Math.floor(Math.random() * quotesArr.length)]; // 사이트를 킬 때마다 랜덤으로 명언과 사람 이름을 보여줌
//단 랜덤 함수를 돌릴 때, 완벽한 정수가 아니므로 floor 함수(숫자를 내림 ex. 1.5 > 1)를 사용하여 쓸 것
// 랜덤으로 돌릴 때, 명언의 개수만큼 돌리기 위해, 명언의 개수를 세야됨.

quote.innerText = todayQuote.quotes;
author.innerText = todayQuote.author;
//html 안에 넣어주기.
