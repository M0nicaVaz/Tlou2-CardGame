function Card(name, vitality, strength, stealth, imgUrl) {
  this.name = name;
  this.attributes = {
    força: strength,
    vitalidade: vitality,
    furtividade: stealth,
  };
  this.imgUrl = imgUrl;
}

let card1 = new Card(
  'Ellie',
  95,
  60,
  85,
  'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/08/ellie-tlou2-3.jpg'
);
let card2 = new Card(
  'Joel',
  00,
  95,
  60,
  'https://mocah.org/thumbs/344318-Joel-The-Last-of-Us-Part-2-The-Last-of-Us-Part-II-TLOU-TLOU2-Video-Game.jpg'
);
let card3 = new Card(
  'Tommy',
  70,
  55,
  50,
  'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/06/promo-last-us-ii-secundarios-tommy-1973825.jpg?itok=oumVe2vl'
);
let card4 = new Card(
  'Abby',
  92,
  85,
  65,
  'https://s2.glbimg.com/2OHh2Dw0gCVSjrYOtv6X4yNGHCA=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/t/n/3BORX0SAy9q3KBK5dwHw/the-last-of-us-part-2-abby.jpeg'
);
let card5 = new Card(
  'Dina',
  95,
  40,
  40,
  'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/06/promo-last-us-ii-secundarios-dina-1973823.jpg?itok=DewsNatw'
);
let card6 = new Card(
  'Jesse',
  00,
  65,
  50,
  'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/06/promo-last-us-ii-secundarios-jessie-1973827.jpg?itok=eje7xri7'
);
let card7 = new Card(
  'Lev',
  97,
  30,
  80,
  'https://www.nerdsite.com.br/wp-content/uploads/2021/12/qqqf1uijakk5qdp2b4vp-e1639586745116.webp'
);
let card8 = new Card(
  'Corredor',
  10,
  80,
  0,
  'https://static2.srcdn.com/wordpress/wp-content/uploads/2020/06/LastOfUs-03.jpg'
);
let card9 = new Card(
  'Estalador',
  20,
  70,
  97,
  'https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2020/08/legiao_Dj6MrU59OsLw.jpg.jpeg'
);
let card10 = new Card(
  'Perseguidor',
  30,
  68,
  15,
  'https://digitaltrends-uploads-prod.s3.amazonaws.com/2020/07/the-last-of-us-part-2-stalker.jpg'
);
let card11 = new Card(
  'JJ',
  100,
  01,
  10,
  'https://64.media.tumblr.com/c422a6c3903ec107892c1c6a75c6235e/3e8de250e3c9353f-4f/s500x750/b1daa5b9539e539bd0ff4c640c5a57dfda6342ce.jpg'
);
let card12 = new Card(
  'Maria',
  32,
  70,
  30,
  'https://i.ytimg.com/vi/WkqJMvRDbFE/maxresdefault.jpg'
);
let card13 = new Card(
  'Alice',
  00,
  92,
  51,
  'https://thelastofus.com.br/wp-content/uploads/2021/08/Cena-de-cachorro-lamentando-perda-do-dono-em-The-Last-of-Us-2-e-de-partir-o-coracao.jpg'
);
let card14 = new Card(
  'Owen',
  00,
  81,
  45,
  'https://img.game8.co/3253668/37cb30d83159273a09bcd4c3eac43dc1.jpeg/show'
);
let card15 = new Card(
  'Mel',
  00,
  37,
  62,
  'https://img.game8.co/3253673/43e4ae0186bd6083dc0b0f1bda3d6fae.jpeg/show'
);
let card16 = new Card(
  'Manny',
  00,
  93,
  62,
  'https://img.game8.co/3253714/59d1b2cada49306c655dc50b5690e78e.jpeg/show'
);
let card17 = new Card(
  'Rei dos Ratos',
  00,
  100,
  80,
  'https://icdn.digitaltrends.com/image/digitaltrends/the-last-of-us-part-ii_20200708100158-1920x1080.jpg'
);

let cards = [];

let radioAttributes = document.getElementsByName('attribute');

let playerImg = document.querySelector('#playerImg');
let aiImg = document.querySelector('#playerImg');
let playBtn = document.querySelector('#playBtn');
let sortBtn = document.querySelector('#sortBtn');
let divCardPlayer = document.querySelector('#card-player');
let divCardAi = document.querySelector('#card-ai');
let round = 1;
let aiScore = 0;
let playerScore = 0;
let cardAi;
let cardPlayer;
let playerUsedCards;
let aiUsedCards;

function sortCards() {
  let cardAiNum = parseInt(Math.random() * cards.length);
  cardAi = cards[cardAiNum];

  let cardPlayerNum = parseInt(Math.random() * cards.length);
  while (cardAiNum == cardPlayerNum) {
    cardPlayerNum = parseInt(Math.random() * cards.length);
  }

  cardPlayer = cards[cardPlayerNum];
  cards.splice(cardAiNum, 1);

  showAiCard();
  showPlayerCard();
}

function clearCard() {
  divCardPlayer.style.display = 'none';
  divCardAi.style.display = 'none';
}

function getSelectedAttr() {
  for (let i = 0; i < radioAttributes.length; i++) {
    if (radioAttributes[i].checked) {
      return radioAttributes[i].value;
    }
  }
}

function showPlayerCard() {
  divCardPlayer.style.display = 'flex';

  let cardPlayerImg = ` <img src="${cardPlayer.imgUrl}" class="card-img"/>`;
  let tagHTML = `<div id='options' class='card-status'>`;
  let name = `<p class="card-subtitle"> ${cardPlayer.name} </p>`;
  let textOptions = '';

  for (let attributes in cardPlayer.attributes) {
    textOptions += ` 
    <input type="radio" name="attribute" value=${attributes}> ${attributes}: ${cardPlayer.attributes[attributes]} <br> `;
  }

  divCardPlayer.innerHTML = `${name} ${cardPlayerImg} ${tagHTML} ${textOptions} </div>`;
}

function showAiCard() {
  divCardAi.style.display = 'flex';

  let cardAiImg = ` <img src="${cardAi.imgUrl}" class="card-img"/>`;
  let aiTagHTML = `<div id='options' class='card-status'>`;
  let aiName = `<p class="card-subtitle"> ${cardAi.name} </p>`;
  let aiTextOptions = '';

  for (let attributes in cardAi.attributes) {
    aiTextOptions += ` 
    <p>${attributes} </p> <br> `;
  }

  divCardAi.innerHTML = `${aiName} ${cardAiImg} ${aiTagHTML}</div>`;
}

function countRoundsAndScore() {
  let roundElement = document.querySelector('#round-counter');
  round++;
  roundElement.textContent = `ROUND ${round}`;

  let scoreElement = document.querySelector('#score');
  scoreElement.innerHTML = `<tr>
  <td>${playerScore}</td>
  <td>${aiScore}</td>
  <tr>`;

  if (round > 5) {
    roundElement.classList.toggle('game-over');
    if (playerScore > aiScore) {
      roundElement.textContent = `GAME OVER! HUMANO VENCEU!`;
    } else if (playerScore < aiScore) {
      roundElement.textContent = `GAME OVER! COMPUTADOR VENCEU!`;
    } else {
      roundElement.textContent = `GAME OVER! FOI UM EMPATE!`;
    }

    sortBtn.disabled = true;
    setTimeout(() => {
      startGame();
      roundElement.textContent = `ROUND ${round}`;
      roundElement.classList.toggle('game-over');
    }, 2000);
  }
}

function startGame() {
  document.querySelector('.container').classList.toggle('display-none');
  document.querySelector('#homeScreen').classList.toggle('display-none');
  round = 0;
  aiScore = 0;
  playerScore = 0;
  sortBtn.disabled = false;

  cards = [
    card1,
    card2,
    card3,
    card4,
    card5,
    card6,
    card7,
    card8,
    card9,
    card10,
    card11,
    card12,
    card13,
    card14,
    card15,
    card16,
    card17,
  ];

  countRoundsAndScore();
}

homeBtn.addEventListener('click', () => {
  startGame();
});

playBtn.addEventListener('click', () => {
  let selectedAttr = getSelectedAttr();
  let elementResult = document.querySelector('#result');
  let cardPlayerStat = cardPlayer.attributes[selectedAttr];
  let cardAiStat = cardAi.attributes[selectedAttr];

  if (selectedAttr == undefined) {
    elementResult.innerHTML = `Selecione um atributo!`;
    setTimeout(() => {
      elementResult.innerHTML = '';
    }, 1000);
  } else {
    if (cardPlayerStat > cardAiStat) {
      elementResult.innerHTML = `Você venceu esse round! ${cardPlayer.name} tem ${cardPlayerStat} de ${selectedAttr} e ${cardAi.name} tem ${cardAiStat}!`;
      divCardAi.style.display = 'none';
      playerScore++;
      setTimeout(() => {
        divCardPlayer.style.display = 'none';
      }, 3000);
    } else if (cardPlayerStat < cardAiStat) {
      elementResult.innerHTML = `Você perdeu esse round! ${cardAi.name} tem ${cardAiStat} de ${selectedAttr} e ${cardPlayer.name} tem ${cardPlayerStat}!`;
      divCardPlayer.style.display = 'none';
      aiScore++;
      setTimeout(() => {
        divCardAi.style.display = 'none';
      }, 3000);
    } else {
      elementResult.innerHTML = `Empate! ${cardAi.name} tem ${cardAiStat} de ${selectedAttr} e ${cardPlayer.name} tem ${cardPlayerStat}!`;
      divCardPlayer.style.display = 'none';
    }

    setTimeout(() => {
      elementResult.innerHTML = '';
      sortBtn.style.display = 'block';
      countRoundsAndScore();
    }, 3000);

    playBtn.style.display = 'none';
  }
});

sortBtn.addEventListener('click', () => {
  sortCards();

  sortBtn.style.display = 'none';
  playBtn.style.display = 'block';
});
