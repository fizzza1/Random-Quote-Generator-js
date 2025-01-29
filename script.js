const quoteGenerator = [
    '"Never give up on a dream that you’ve been chasing almost your whole life."',
    '"Popularity is a bubble. It’s a mountain: you can go up really hard but walk down really fast."',
    '"I have come to love myself for who I am, for who I was, and for who I hope to become."',
    '"To lose your path is the way to find that path."',
    '"I want to hear your voice…no matter who you are, where you’re from, your skin colour, gender identity: Speak yourself."',
    '"Silence is golden. Don’t waste time."',
    '"Remember: You are the leader of your own life, and chant it over and over again. ‘I can do it. You got it. I can do it well. I can do it better than anybody."',
    '"Those who keep trying without giving up are the ones who succeed."'
  ];

  const btn = document.getElementById('btn');
  const quote = document.getElementById('quote-para');
  const quoteContainer = document.getElementById('quote-container');

  function changeQuote() {
    const randomNumber = getRandomNumber();
    quote.innerHTML = quoteGenerator[randomNumber];
    
    quoteContainer.classList.remove('show');
    setTimeout(() => {
      quoteContainer.classList.add('show');
    }, 300); 
  }

  function getRandomNumber() {
    return Math.floor(Math.random() * quoteGenerator.length);
  }
