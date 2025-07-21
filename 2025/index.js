const letterEl = document.getElementById("letter")
const optionsEl = document.getElementById("options")
const speed = 80
let sentenceID = 0

const sentences = [
  {
    sentence: "Hey baby, it is 2025, what do you prefer?",
    options: ["Obim ❤️", "Sekani ❤️"],
    postfix: "."
  },
  {
    sentence: "This year has been the most challenging for us, it has been the most challenging for me. I have had to un-learn and re-learn you, i have had to learn to love you in a different way, better, greater and with more intentions....and, it is all worth it! Am I sure?",
    options: ["🥹yes...!", "🥺a solid, yes...!"],
    postfix: ","
  },
  {
    sentence: "Yes babe... We are meant for each other, I am meant for you and you are meant for me. I have not been my best when we argue, in fact I have been my worst this year, but I am willing to make it work because it is you I want to spend my life with, it is you I want to build a family with, it is you I want to call my wife.",
    options: ["Stop lying babe!", "Are you sure??"],
    postfix: ","
  },
  {
    sentence: "I am very serious my love ❤️, I am sure! No lies! Every moment with you has been a revelation. Your kindness, support, and unwavering belief in me and us has kept us and has brought us this far, I am weak and you are my strength, for this...I am eternally grateful.",
    options: ["Tell me more..."],
    postfix: "."
  },
  {
    sentence: "You brought a light into my life that I never knew was missing. You’ve shown me what it means to have a partner who stands by your side, no matter what. I really love you baby...kai!",
    options: ["Tell me more babe..."],
    postfix: ","
  },
  {
    sentence: "Oh wow, words can’t even express how I feel, babe. But don’t worry, I’m learning to show it more through my actions. You’ll see it, and you’ll feel it. Hold on though, there’s something I’d like to address too.",
    options: ["Okay what's that", "I don't care jare, i just want you."],
    postfix: ","
  },
  {
    sentence: "I know, yes, I know, I always apologize, and the truth is...I always will baby, I always will try to be better for you and us. So, I want to take this moment to apologize for the times we’ve argued. I know there have been moments when I’ve fallen short, and it’s often been you who has had to fight to bring back the peace between us. I’m sorry for any pain I’ve caused and for not always being the partner you deserve during those difficult times.",
    options: ["I know baby", "Fuck off!"],
    postfix: ".."
  },
  {
    sentence: "I know you don't want me to fuck off 😜. You're always patient with me! Your patience, understanding, and love have been a guiding light for me. You’ve shown me what it means to be truly supportive and loving, even in the face of conflict. I promise to do better 100X , to listen more 100X, and to be the partner you deserve every day.",
    options: ["I love you 10X", "I love you 100X"],
    postfix: ","
  },
  {
    sentence: "Anyways, i am satisfied with any! Happy Birthday, my love, every moment with you feels like a dream I never want to wake up from, and today I celebrate not just your beautiful birth but the incredible light you bring into my life, now and always.",
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

