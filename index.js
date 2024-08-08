const letterEl = document.getElementById("letter")
const optionsEl = document.getElementById("options")
const speed = 80
let sentenceID = 0

const sentences = [
  {
    sentence: "💔",
    options: [],
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

