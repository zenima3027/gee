/* =========================================================
   ✏️  EDIT THIS SECTION — that's it, that's the whole setup
   ========================================================= */
const SLIDES = [
  {
    photo: "assets/photos/IMG-20260628-WA0006.jpg",
    caption: "My Rithu`s Bday",
    heading: "Garima Rithu",
    text: "Happy birthday to the most rithu ahhh person in the entire fcking world. I love you so much and I hope you have the best birthday ever. Too bad I can`t be there to celebrate with you but I hope you have a great day and I hope you get everything you want. I love you so much and I hope you have the best birthday ever. Too bad I can`t be there to celebrate with you but I hope you have aa bom ahh day and khatraaaaaa bed rot garnu paossss hehee, if i were to there with you moh ni hunthiyoooo tara too baddd hehehee"
  },
  {
    photo: "assets/photos/PHOTO2.jpeg",
    caption: "MY RITHU KWEEN",
    heading: "I MISS YOU FATTYY",
    text: "Days we spent being so rithu and funny(only me hai tara not u, u r learning tara time cha u funny hunu till then i iwll carry us ni dw), I miss you so much and I hope that no one takes this day away from you. I hope you have a bom day even tho i am not there tara Garima don ko taaa patiiii niii haiiii"
  },
  {
    photo: "assets/photos/1000119605.jpg",
    caption: "<3",
    heading: "BEING RITHU IS WHAT MAKES US, US heheehehe",
    text: "I wish i could just spend all my days with you being rithu and just being us babe, maybe someday we will tara till then ig we gotta be nerfed down yesari naiiiii dukha cha tara garima is such a bom girlfriend bhai halcha , all we need is each other and we will continue being this bom rithu thing we got for ourselves heehhee, someday maybee we will be telling our jr versions how rithu our dates used to be and omg they will have the best rolemodels for loving someone , specially having soemone like youuu omg lovergirlll beat koo, they will look at us with utter disgust tbh , just imagine buro ahhh ppl being lovey dovey toooo bad they just gotta bear with it"
  },
  {
    photo: "assets/photos/IMG-20260628-WA0003.jpg",
    caption: "Happy birthday RITHU<3",
    heading: "Happy birthday to",
    text: "MY GARIMA, you are my one and only that i need in this lifetime and the lifetimes to come(huncha haina u tya pani, u better be there DHAMKIIIII CHA HAIII) without you i dont really know where i will be but i dont need to worrry about that for now cuz YOU ARE ALWAYS THERE WITH ME IN THE PRESENT , IN THE PAST NAD THE COMING FUTURE. MY LOVE HAPPY BIRTHDAYYYY sucks to be the old ahhh one in the relationship especially when ur boyfriend looks so bom and youngggg (sweeet 16 heeheh), i wish i could be there wiht you to make your day special like how you did for me on my birthday but i hope you khatra feel that bom.com love i am sending you through this whatever website"
  },
  {
    photo: "assets/photos/1.jpg",
    caption: "ily my rithu",
  },
  {
    photo: "assets/photos/2.jpg",
    caption: "<3",
  },
  {
    photo: "assets/photos/3.jpg",
    caption: "<3",
  },
  {
    photo: "assets/photos/4.jpg",
    caption: "<3",
  },
  {
    photo: "assets/photos/5.jpg",
    caption: "<3",
  },
  {
    photo: "assets/photos/6.jpg",
    caption: "<3",
  },
  {
    photo: "assets/photos/7.jpg",
    caption: "<3",
  },
  {
    photo: "assets/photos/8.jpg",
    caption: "<3",
  },
  {
    photo: "assets/photos/9.jpg",
    caption: "<3",
  },
  {
    photo: "assets/photos/10.jpg",
    caption: "<3",
  },
  {
    photo: "assets/photos/11.jpg",
    caption: "<3",
  },
  {
    photo: "assets/photos/12.jpg",
    caption: "<3",
  },
  {
    photo: "assets/photos/13.jpg",
    caption: "<3",
  },
  {
    photo: "assets/photos/14.jpg",
    caption: "<3",
  },
  {
    // final slide — no photo needed, just a closing message
    photo: "assets/photos/unnamed.jpg",
    caption: "HAPPY BIRTHDAY MY GARIMA<3",
    heading: "ALWAYS<3,",
    text: "Your rithu rozen. ♡",
    final: true
  }
];

/* =========================================================
   Below this line is just the machinery — no need to touch it
   ========================================================= */

// ---- Particles ----
const particleField = document.getElementById('particles');
for (let i = 0; i < 26; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  p.style.left = Math.random() * 100 + 'vw';
  p.style.animationDuration = (10 + Math.random() * 14) + 's';
  p.style.animationDelay = (Math.random() * 14) + 's';
  particleField.appendChild(p);
}

// ---- Build slides ----
const slidesContainer = document.getElementById('slides');
const dotsContainer = document.getElementById('dots');

SLIDES.forEach((s, i) => {
  const slide = document.createElement('div');
  slide.className = 'slide' + (s.final ? ' final' : '');
  slide.dataset.index = i;

  let html = '';
  if (s.photo) {
    const tilt = (i % 2 === 0 ? -1 : 1) * (2 + Math.random() * 3);
    html += `
      <div class="polaroid" style="--tilt:${tilt}deg">
        <div class="washi"></div>
        <img src="${s.photo}" alt="${s.caption || 'photo'}" onerror="this.style.background='linear-gradient(135deg,#dcd0b4,#efe4cb)'; this.src='';">
        <div class="caption">${s.caption || ''}</div>
      </div>`;
  }
  html += `
    <div class="letter">
      <p class="heading">${s.heading || ''}</p>
      <p>${s.text || ''}</p>
    </div>`;

  slide.innerHTML = html;
  slidesContainer.appendChild(slide);

  const dot = document.createElement('div');
  dot.className = 'dot';
  dotsContainer.appendChild(dot);
});

const slideEls = document.querySelectorAll('.slide');
const dotEls = document.querySelectorAll('.dot');
let current = 0;

function showSlide(index) {
  slideEls.forEach((el, i) => {
    el.classList.remove('active', 'prev');
    if (i === index) el.classList.add('active');
    else if (i < index) el.classList.add('prev');
  });
  dotEls.forEach((d, i) => d.classList.toggle('active', i === index));
  document.getElementById('prevBtn').disabled = index === 0;
  document.getElementById('nextBtn').disabled = index === slideEls.length - 1;
  current = index;
}

document.getElementById('nextBtn').addEventListener('click', () => {
  if (current < slideEls.length - 1) showSlide(current + 1);
});
document.getElementById('prevBtn').addEventListener('click', () => {
  if (current > 0) showSlide(current - 1);
});
document.addEventListener('keydown', (e) => {
  if (document.getElementById('slideshow-screen').classList.contains('hidden')) return;
  if (e.key === 'ArrowRight') document.getElementById('nextBtn').click();
  if (e.key === 'ArrowLeft') document.getElementById('prevBtn').click();
});

// swipe support
let touchStartX = null;
document.getElementById('slideshow-screen').addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
});
document.getElementById('slideshow-screen').addEventListener('touchend', (e) => {
  if (touchStartX === null) return;
  const diff = e.changedTouches[0].screenX - touchStartX;
  if (diff < -50) document.getElementById('nextBtn').click();
  if (diff > 50) document.getElementById('prevBtn').click();
  touchStartX = null;
});

showSlide(0);

// ---- Envelope open ----
const envelope = document.getElementById('envelope');
const waxSeal = document.getElementById('waxSeal');
const envelopeScreen = document.getElementById('envelope-screen');
const slideshowScreen = document.getElementById('slideshow-screen');
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');

function openEnvelope() {
  envelope.classList.add('opening');
  bgMusic.play().catch(() => {});
  musicToggle.classList.add('playing');
  setTimeout(() => {
    envelopeScreen.classList.add('hidden');
    slideshowScreen.classList.remove('hidden');
  }, 700);
}
waxSeal.addEventListener('click', openEnvelope);
envelope.addEventListener('click', openEnvelope);

// ---- Music toggle ----
musicToggle.addEventListener('click', () => {
  if (bgMusic.paused) {
    bgMusic.play().catch(() => {});
    musicToggle.classList.add('playing');
  } else {
    bgMusic.pause();
    musicToggle.classList.remove('playing');
  }
});
