const letterEl = document.getElementById("letter")
const optionsEl = document.getElementById("options")
const speed = 80
let sentenceID = 0

const sentences = [
  {
    sentence: "My baby, or what do you prefer?",
    options: ["Obim ❤️", "Onye Nkem ❤️"],
    postfix: "."
  },
  {
    sentence: "I will just get straight to it: reflecting on who i was before you, I was nothing! I had no career direction, no understanding of what it meant to truly love someone, and no idea of what it felt like to be loved in return. BENITA, you have transformed my life in ways I never thought possible!",
    options: ["🥹Tell me more babe...?", "🥺Nah, stop eet...!"],
    postfix: ","
  },
  {
    sentence: "Yes babe... You brought clarity and purpose to my career, guiding me to find my true passion and helping me believe in my potential. More than that, you showed me the depths of love and affection, something I had never experienced before. Your love has given me a sense of belonging and completeness that I didn't even realize I was missing.",
    options: ["Stop lying babe!", "No joorrr!"],
    postfix: ","
  },
  {
    sentence: "I am very serious my love ❤️, every moment with you has been a revelation. Your kindness, support, and unwavering belief in me have been the pillars on which I’ve rebuilt my life. You’ve made me realize what it means to be truly happy, and for that, I am eternally grateful.",
    options: ["Tell me more..."],
    postfix: "."
  },
  {
    sentence: "You brought a light into my life that I never knew was missing. You’ve shown me what it means to have a partner who stands by your side, no matter what. I really love you baby...kai!",
    options: ["Tell me more babe..."],
    postfix: ","
  },
  {
    sentence: "Oh my! Words are not enough babe, don't worry i am learning to show you more, so yeah, you will see and feel more of it. Pause, i have something i want to address too.",
    options: ["Okay what's that", "I don't care jare, i just want you."],
    postfix: ","
  },
  {
    sentence: "I have to tell you. I want to take this moment to apologize for the times we’ve fought and argued. I know there have been moments when I’ve fallen short, and it’s often been you who has had to fight to bring peace between us. I’m sorry for any pain I’ve caused and for not always being the partner you deserve during those difficult times.",
    options: ["I know baby", "Fuck off!"],
    postfix: ".."
  },
  {
    sentence: "I know you don't want me to fuck off 😜. You're patient with me! Your patience, understanding, and love have been a guiding light for me. You’ve shown me what it means to be truly supportive and loving, even in the face of conflict. I promise to do better, to listen more, and to be the partner you deserve every day.",
    options: ["I love you 10X", "I love you 100X"],
    postfix: ","
  },
  {
    sentence: "Anyways, i am satisfied with any! Happy Birthday, my love. Here’s to many more beautiful moments and cherished memories together..",
    options: ["Yours, always and forever, Adams ❤️"],
    postfix: "."
  },
];


const writeLetter = () => {
  if (sentenceID < sentences.length) {
    input = sentences[sentenceID];
    const sentence = input.sentence;
    const options = input.options;
    const postfix = input.postfix;

    typewriter(sentence, letterEl)

    setTimeout(() => {
      createButtons(options, postfix)
      window.scrollTo(0, document.body.scrollHeight);
    }, speed * sentence.length)
  }
}

const typewriter = (text, contentEl, cb = () => { }) => {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      contentEl.innerHTML += text.charAt(i);
      window.scrollTo(0, document.body.scrollHeight);
      if (i === text.length - 1) { cb() }
    }, speed * i)
  }
}

const createButtons = (options, postfix) => {
  options.map((option) => {
    const btn = document.createElement("button");
    btn.type = 'button';
    btn.innerHTML = option;
    btn.value = option;
    btn.addEventListener('click', function () {
      submitOption(option, postfix);
    }, false);
    optionsEl.appendChild(btn);
  })
}

const submitOption = (option, postfix) => {
  const text = option + postfix;
  optionsEl.innerHTML = "";
  const span = document.createElement("span");
  letterEl.append(span);
  typewriter(text, span, nextSentence)

}

const nextSentence = () => {
  sentenceID++
  writeLetter()
}

writeLetter()

