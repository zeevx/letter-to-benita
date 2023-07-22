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
    sentence: "I've been sitting here trying to put into words how crazy you make me feel, and damn, it's not easy. You just have this way of turning me on with a single look, and it's driving me wild. I hope you're ready for some real talk, 'cause this letter is gonna get steamy.",
    options: ["Before I become very naughty, i did bad..."],
    postfix: ","
  },
  {
    sentence: "This year hasn't been our best one, and I did bad at handling it, I apologize and will do better, honestly, help me do better 🥹.",
    options: ["First off"],
    postfix: ","
  },
  {
    sentence: "let me tell you how insanely attracted I am to you. Your body is like a work of art, and I can't get enough of it. From your mesmerizing eyes to your luscious lips, every inch of you drives me crazy. And when you're close to me, I can't help but feel this electrifying chemistry that sets my heart racing.",
    options: ["But it's not just your looks that get me going"],
    postfix: "."
  },
  {
    sentence: "Your personality is like a siren's call, drawing me in with its irresistible charm. Your confidence and wit are such a turn-on, and when you laugh, I swear it's like music to my ears. You're the perfect mix of sweet and spicy, and I can't get enough of it.",
    options: ["Remember that time we were dancing together"],
    postfix: ","
  },
  {
    sentence: "and the way our bodies moved against each other? The heat between us was off the charts, and it's a memory I replay in my mind over and over again. I crave your touch, your caress, and the way you make me feel wanted and desired.",
    options: ["When we're alone"],
    postfix: ","
  },
  {
    sentence: "the world disappears, and it's just you and me, lost in each other's passion. Our chemistry is explosive, and I love exploring every inch of you, finding those secret spots that make you shiver with pleasure. The way you respond to my touch is a thrill I never want to stop experiencing.",
    options: ["🍆"],
    postfix: ".."
  },
  {
    sentence: "And let's not forget those late-night conversations that turn into something more intimate. The way we bare our souls and share our deepest desires ignites a fire within me that burns like no other. You make me feel safe, understood, and loved in a way I've never known before.",
    options: ["So, my sexy vixen"],
    postfix: ","
  },
  {
    sentence: " I want you to know that you drive me wild in the best possible way. You're the woman of my dreams, and I can't wait to continue this passionate journey with you. You've got me hooked, and there's no going back. Here's to a lifetime of love, pleasure, and adventure together.",
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

