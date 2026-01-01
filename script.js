document.addEventListener("DOMContentLoaded", () => {

  const startBtn = document.getElementById("startBtn");
  const stage = document.getElementById("stage");
  const song = document.getElementById("song");
  const startDaydreaminBtn = document.getElementById("startDaydreamin");
  const daydreamin = document.getElementById("daydreamin");

  let heartInterval = null;
  let petalInterval = null;
  let starsInterval = null;

  /* =========================
     FIRST SONG – CARDS
  ========================== */

  const cards = [
    { name: "Shawarma", img: "images/shawarma.jpg", text:"Hey Safal! Guess who's here? 🎉 Yup, your all-time favorite Shawarma! 🌯 Ready to deliver some birthday magic just for you! Happy Birthday to my sweet, shawarma-loving superstar! 💖✨" },
    { name: "Vada Pav", img: "images/vadapav.jpg", text:"I know, I know… Shawarma isn’t your favorite 😏… I am! So here I am, showing up in person to wish you the happiest birthday ever! 🎉 As the lyrics say: ‘Ek aur saal purani ho gayi teri alhad jawani’ 😄💖 Hahaha, enjoy your day, birthday superstar!" },
    { name: "Momos 👑", img: "images/momos.jpg", text:"So Safal… I know I’ve always been your all-time favorite 😏. Khushi told me I used to be your phone password! 📱💖 But apparently, you’ve replaced me with… Shawarma? 😅🍴 Anyways, happy birthday! 🎉 No worries, you’re still my favorite! 💫"},
    { name: "Samosa", img: "images/samosa.jpg", text:"Oh man, I loved the lyrics 😏 — 'Kudiyan thi pehle ji, ab ho gayi teri auntiyan deewani' 😂. Here’s a samosa 🌮 for you, my handsome boy! Wishing you the happiest birthday ever! 🎉💖" }
  ];

  const timings = [
    { show: 6, hide: 26 },
    { show: 26, hide: 46 },
    { show: 46, hide: 63 },
    { show: 63, hide: 77 }
  ];

  const extraCards = [
    { name: "Radha Krishna", img: "images/radhakrishna.jpg", text:"Radha: Janamdin ki hardik shubhkamnaye, Safal! 🎉 Krishna: Don’t look at my Radha 😏… you have a girl already, right? And yes, Happy Birthday! RadhaKrishna: Sending good wishes for your amazing journey ahead! 💖" },
    { name: "Khushi", img: "images/me.png", text:"Happiest Birthday, Safal! 🎉 Remember, I’m your little angry woman full of love 😜❤️ No matter how far you are, or even if we don’t talk every day during your studies, I’m always here cheering for you and loving you the most!"}
  ];

  /* =========================
   SHOW MOVE AHEAD BUTTON
========================= */
function showMoveAheadBtn() {
  const btn = document.createElement("button");
  btn.textContent = "✨ Let’s Move Ahead ✨";
  btn.style.padding = "15px 30px";
  btn.style.fontSize = "18px";
  btn.style.borderRadius = "30px";
  btn.style.border = "none";
  btn.style.cursor = "pointer";
  btn.style.background = "linear-gradient(45deg, #ff5e62, #ff9966)";
  btn.style.color = "white";
  btn.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
  stage.innerHTML = "";
  stage.appendChild(btn);

  btn.onclick = () => {
    btn.remove();
    endDaydreamin(); // Show your letter
  };
}


  /* =========================
     START BUTTON CLICK
  ========================== */
  startBtn.onclick = () => {
    startBtn.style.display = "none";
    song.currentTime = 6;
    song.play();

    startStars(); // 🌟 Start colorful stars here

    cards.forEach((card, i) => {
      setTimeout(() => showCard(card), (timings[i].show - 6) * 1000);
      setTimeout(clearStage, (timings[i].hide - 6) * 1000);
    });

    setTimeout(() => {
      song.pause();
      stopStars(); // ✨ Stop stars before Continue button
      showContinueBtn();
    }, (timings[3].hide - 6) * 1000);
  };

  function showCard(card) {
    stage.innerHTML = `
    <div class="card">
      <img src="${card.img}">
      <h3>${card.name}</h3>
      <p class="card-text">${card.text}</p>
    </div>
  `;
  }


  function clearStage() {
    stage.innerHTML = "";
  }

  function showContinueBtn() {
    const btn = document.createElement("button");
    btn.id = "continueBtn";
    btn.textContent = "Continue the Show 🎉";
    stage.appendChild(btn);

    btn.onclick = () => {
      btn.remove();
      showExtraCards();
    };
  }

  function showExtraCards() {
    let i = 0;
    function next() {
      if (i < extraCards.length) {
        showCard(extraCards[i++]);
        setTimeout(next, 10000);
      } else {
        clearStage();
        startDaydreaminBtn.style.display = "block";
      }
    }
    next();
  }

  /* =========================
     DAYDREAMIN SEGMENT
  ========================== */

  const mediaItems = [
  { type: "img", src: "images/s1.jpeg", caption: "Ohhh my uncle 😌😂 sorryyy, I’m joking okay!! You look really handsome here 😎🔥💖" },
  { type: "img", src: "images/s2.jpeg", caption: "Two flowers in one photo 🌸🌼✨" },
  { type: "img", src: "images/s3.jpeg", caption: "Uncle with a rose in his pocket for his wife 🌹😂💖" },
  { type: "img", src: "images/s4.jpeg", caption: "I’m lucky because you look at me like this 🥺💫💖" },
  { type: "img", src: "images/s5.jpeg", caption: "There’s a reason why this is on my wallpaper 😌📱💖✨" },
  { type: "img", src: "images/s6.jpeg", caption: "Cute little Safal 🥹🧸💖 love for my little Safal 🌸✨" },
  { type: "img", src: "images/s7.jpeg", caption: "If I marry you someday 🥹💍💖✨" },
  { type: "img", src: "images/s8.jpeg", caption: "You make me very very very angry 😤😤😤🔥 but somehow I still love you way too much 😭❤️✨ " },
  { type: "img", src: "images/s9.jpeg", caption: "Us? 🥹💭 When?? ⏳👀 Do me already 😤❤️✨" },
  { type: "img", src: "images/s10.jpeg", caption: "That cat 😼✨ is clearly masturbating 🐾😂" },
  { type: "img", src: "images/s11.jpeg", caption: "I love you 💗✨" },
  { type: "img", src: "images/s12.jpeg", caption: "⚠️🚫🙅‍♀️💥 Don’t use my products in the future! 🛑" },
  { type: "img", src: "images/s13.jpeg", caption: "😏🔥 Going to use this next time when you annoy me! 😤😂" },
  { type: "img", src: "images/s14.jpeg", caption: "You know I have a kink, right? 😈🔥😉💫" },
  { type: "img", src: "images/s15.jpeg", caption: "💖😎 My man 😘" },
  { type: "img", src: "images/s16.jpeg", caption: "🥰💑 Me with you 💖✨🌸" },
  { type: "img", src: "images/s17.jpeg", caption: "💖😊 You with me 🥰✨🌷" },
  { type: "img", src: "images/s18.jpeg", caption: "If you want to live, then keep your eyes just on me 😌🔒❤️‍🔥" },
  { type: "img", src: "images/s19.jpeg", caption: "That’s the kind of love I want from you 🫶❤️‍🔥🥺✨" },
  { type: "img", src: "images/s20.jpeg", caption: "Yup, still my fav one — perfectly describes us 🫶💫💞" },
  { type: "img", src: "images/s21.jpeg", caption: "We looked like a couple in this 😍💑✨ I think this is where everything started 💖🌟" },
  { type: "img", src: "images/s22.jpeg", caption: "We both look so stupid 🤪😂" },
  { type: "img", src: "images/s23.jpeg", caption: "Again, stupid 😆🙈😂" },
  { type: "img", src: "images/s24.jpeg", caption: "Cringe pictures 🤪📸 but our memories 💖✨" },
  { type: "img", src: "images/s25.jpeg", caption: "You looked the handsomest 😍💖 in this picture… looks like we are married 💍😂" }
];


  mediaItems.push(
    { type: "video", src: "images/s26.mp4", caption: "I like it when you look at me with those desperate eyes 💖💙" },
    { type: "video", src: "images/s27.mp4", caption: "When, us? My Sweet Little Bihari Boy 😎❤️✨" }
  );

  const totalSongDuration = 193; // 3:13 in seconds
const videos = mediaItems.filter(item => item.type === "video");
const images = mediaItems.filter(item => item.type === "img");

// Approximate durations for your last two videos
const videoDurations = [12, 10]; // in seconds (adjust to real video length)

// Calculate remaining duration for images
const remainingTime = totalSongDuration - videoDurations.reduce((a,b)=>a+b,0);
const imageDuration = (remainingTime / images.length) * 1000; // convert to ms


  startDaydreaminBtn.onclick = () => {
  startDaydreaminBtn.style.display = "none";
  daydreamin.currentTime = 0;
  daydreamin.play();
  heartInterval = setInterval(createHeartRandom, 900); // ❤️ Hearts during Daydreamin

  playMediaSequence();
};


  function playMediaSequence() {
  let index = 0;
  let paused = false;
  let slideshowTimer = null;
  let songStartTime = Date.now();


  const pauseBtn = document.createElement("button");
  pauseBtn.id = "pauseBtn";
  pauseBtn.textContent = "⏸️ Pause / Read";
  pauseBtn.style.position = "fixed";
  pauseBtn.style.top = "20px";
  pauseBtn.style.right = "20px";
  pauseBtn.style.padding = "12px 25px";
  pauseBtn.style.fontSize = "16px";
  pauseBtn.style.borderRadius = "25px";
  pauseBtn.style.border = "none";
  pauseBtn.style.cursor = "pointer";
  pauseBtn.style.background = "linear-gradient(45deg, #ff5e62, #ff9966)";
  pauseBtn.style.color = "white";
  pauseBtn.style.zIndex = 9999; // <-- super high so it stays above stickers/stars
  pauseBtn.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
  pauseBtn.style.textShadow = "1px 1px 2px black";

  document.body.appendChild(pauseBtn);

  daydreamin.onended = () => {
  pauseBtn.remove();
  showMoveAheadBtn();
};



  pauseBtn.onclick = () => {
  paused = !paused;

  if (paused) {
    daydreamin.pause();
    clearTimeout(slideshowTimer);
    pauseBtn.textContent = "▶️ Resume";
  } else {
    daydreamin.play();
    pauseBtn.textContent = "⏸️ Pause / Read";
    slideshowTimer = setTimeout(next, imageDuration);
  }
};


  function next() {
  if (paused) return;

  stage.innerHTML = "";
  const item = mediaItems[index++];

  const wrapper = document.createElement("div");
  wrapper.className = "media-wrapper";

  const caption = document.createElement("div");
  caption.className = "caption";
  animateCaption(item.caption, caption);

  if (item.type === "img") {
  const img = document.createElement("img");
  img.src = item.src;
  img.className = "daydreamin-img";
  wrapper.append(img, caption);
  stage.appendChild(wrapper);

  // Wait for calculated imageDuration before showing next
  slideshowTimer = setTimeout(next, imageDuration);

}


  if (item.type === "video") {
  clearTimeout(slideshowTimer);

  const video = document.createElement("video");
  video.src = item.src;
  video.autoplay = true;
  video.muted = true;
  video.playsInline = true;
  video.className = "daydreamin-video";

  wrapper.append(video, caption);
  stage.appendChild(wrapper);

  video.onended = next;
}

}


  next();
}


  /* =========================
     CAPTIONS
  ========================== */
  function animateCaption(text, container) {
    container.innerHTML = "";
    text.split(" ").forEach((word, i) => {
      const span = document.createElement("span");
      span.textContent = word + " ";
      span.style.opacity = 0;
      span.style.animation = "wordFade 0.6s ease forwards";
      span.style.animationDelay = `${i * 0.25}s`;
      container.appendChild(span);
    });
  }

  /* =========================
     STARS, HEARTS & PETALS
  ========================== */

  // 🌟 Stars
function startStars() {
  const colors = ["#ffffff", "#ffd700", "#ff69b4", "#00ffff", "#ff4500", "#adff2f", "#800000", "#000000"];
  starsInterval = setInterval(() => {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * window.innerWidth + "px";
    
    const size = 8 + Math.random() * 8; // 8px to 16px
    star.style.width = size + "px";
    star.style.height = size + "px";

    const color = colors[Math.floor(Math.random() * colors.length)];
    star.style.background = color;
    star.style.opacity = 0.6 + Math.random() * 0.4; // 0.6 to 1.0 opacity

    star.style.clipPath = "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"; // star shape

    star.style.animationDuration = 4 + Math.random() * 4 + "s";
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 8000);
  }, 300);
}



  function stopStars() {
    clearInterval(starsInterval);
  }

  // ❤️ Hearts
  function createHeartRandom() {
    const h = document.createElement("div");
    h.className = "heart";
    h.textContent = "❤️";
    h.style.left = Math.random() * window.innerWidth + "px";
    h.style.top = window.innerHeight + "px";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 6000);
  }

  // 🌸 Petals
  function createPetal() {
    const p = document.createElement("div");
    p.className = "petal";
    p.textContent = "🌸";
    p.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 8000);
  }

  /* =========================
     END & LETTER
  ========================== */
  function endDaydreamin() {
    clearInterval(heartInterval);
    petalInterval = setInterval(createPetal, 900); // 🌸 Petals during letter
    showLetter();
  }

  function showLetter() {
    stage.innerHTML = `
      <div class="letter">
        <h2>Dear Safal 🤍</h2>
        <p class="letter-text">
          Stupid Safal 😜😡 don't go and talk to other girls 😤🙅‍♀️ NEVER EVER in your whole life!<br>
          You have me 😎💖 and I have you 💑✨ right? You are my family 🏡❤️<br>
          Hope you have a super successful life ahead 🚀🎓🌟<br>
          But it will happen only when you start waking up early ⏰😴<br>
          Remember I am always right 😌👑 and yes, I love you 😘💌<br>
          Sending you virtual hugs 🤗💞 and kisses 😚💋<br>
          Happiest Birthday 🎉🎂🎈 Love youuuuuu 💖💖💖<br>
          And Happy New Year Loveee 🥳🎆🎇<br>
          Your's beautiful 🌹✨<br>
          <strong>Khushi 💕💫</strong>
        </p>
        <button id="restartBtn">Let's Start The Love Again 💫</button>
      </div>
    `;

    document.getElementById("restartBtn").onclick = () => {
      clearInterval(petalInterval);
      location.reload();
    };
  }

  

});
