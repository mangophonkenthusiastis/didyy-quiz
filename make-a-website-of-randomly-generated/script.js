const termBank = [
  {
    term: "rizz",
    definition: "charm or flirting skill",
    family: "social",
    vibe: "smooth",
    scenario: "Someone somehow turns an awkward hallway moment into a win."
  },
  {
    term: "W rizz",
    definition: "very successful charm",
    family: "social",
    vibe: "smooth",
    scenario: "A compliment lands so well the group chat immediately celebrates."
  },
  {
    term: "L take",
    definition: "a bad opinion",
    family: "judgment",
    vibe: "bad",
    scenario: "Someone says the sequel was better and the replies become a courtroom."
  },
  {
    term: "no cap",
    definition: "not lying or exaggerating",
    family: "speech",
    vibe: "truth",
    scenario: "A friend insists the cafeteria pizza was actually good today."
  },
  {
    term: "based",
    definition: "confidently authentic or respectable",
    family: "judgment",
    vibe: "good",
    scenario: "Someone gives an unpopular opinion and somehow everyone respects it."
  },
  {
    term: "cringe",
    definition: "embarrassing or hard to watch",
    family: "judgment",
    vibe: "bad",
    scenario: "A dramatic post gets read aloud and nobody can make eye contact."
  },
  {
    term: "sus",
    definition: "suspicious",
    family: "judgment",
    vibe: "bad",
    scenario: "A person says they finished the group project but will not open the file."
  },
  {
    term: "ratio",
    definition: "a reply gets more approval than the original post",
    family: "internet",
    vibe: "bad",
    scenario: "The comeback has more likes than the original argument."
  },
  {
    term: "NPC",
    definition: "someone acting generic or scripted",
    family: "internet",
    vibe: "weird",
    scenario: "A student repeats the same sentence three times in the lunch line."
  },
  {
    term: "delulu",
    definition: "playfully delusional confidence",
    family: "mindset",
    vibe: "weird",
    scenario: "Someone plans a celebrity wedding after one liked comment."
  },
  {
    term: "cooked",
    definition: "finished, doomed, or in trouble",
    family: "judgment",
    vibe: "bad",
    scenario: "The test starts and the pencil is still in the backpack."
  },
  {
    term: "let him cook",
    definition: "let someone continue because they might be onto something",
    family: "speech",
    vibe: "good",
    scenario: "A wild theory sounds terrible until the last sentence makes sense."
  },
  {
    term: "bussin",
    definition: "really good, usually food",
    family: "food",
    vibe: "good",
    scenario: "The snack table disappears in eight seconds."
  },
  {
    term: "fanum tax",
    definition: "stealing or claiming part of someone else's food",
    family: "food",
    vibe: "chaotic",
    scenario: "One fry is taken, then another, then the meal is suddenly communal."
  },
  {
    term: "mewing",
    definition: "posing with a closed mouth to sharpen the jawline",
    family: "appearance",
    vibe: "smooth",
    scenario: "Someone goes silent in every photo and points at their jaw."
  },
  {
    term: "looksmaxxing",
    definition: "trying to improve appearance as much as possible",
    family: "appearance",
    vibe: "smooth",
    scenario: "The morning routine has twelve steps and a lighting strategy."
  },
  {
    term: "mogging",
    definition: "outshining someone by appearance or presence",
    family: "appearance",
    vibe: "competitive",
    scenario: "A person walks in and the mirror suddenly has main character energy."
  },
  {
    term: "aura",
    definition: "overall presence, status, or vibe points",
    family: "social",
    vibe: "good",
    scenario: "No one knows why, but the entrance felt important."
  },
  {
    term: "sigma",
    definition: "a lone-wolf, self-serious confidence meme",
    family: "mindset",
    vibe: "competitive",
    scenario: "Someone stares into the distance after refusing to join the group project."
  },
  {
    term: "skibidi",
    definition: "absurdist meme filler tied to chaotic video culture",
    family: "absurd",
    vibe: "chaotic",
    scenario: "The conversation loses all grammar and somehow everyone understands."
  },
  {
    term: "Ohio",
    definition: "a meme place where bizarre things supposedly happen",
    family: "absurd",
    vibe: "chaotic",
    scenario: "The vending machine gives soup instead of chips."
  },
  {
    term: "gyatt",
    definition: "an exaggerated reaction to someone's appearance",
    family: "appearance",
    vibe: "chaotic",
    scenario: "The comment section forgets how to spell after a fit check."
  },
  {
    term: "touch grass",
    definition: "log off and reconnect with real life",
    family: "internet",
    vibe: "truth",
    scenario: "Someone has posted thirty replies about a cartoon power ranking."
  },
  {
    term: "main character energy",
    definition: "acting like the story revolves around you",
    family: "mindset",
    vibe: "smooth",
    scenario: "A person walks through the hallway like a music video is playing."
  },
  {
    term: "glazing",
    definition: "overpraising someone too much",
    family: "speech",
    vibe: "bad",
    scenario: "A fan account writes a paragraph about a normal haircut."
  },
  {
    term: "yeet",
    definition: "throw with force or excitement",
    family: "action",
    vibe: "chaotic",
    scenario: "The paper ball leaves someone's hand like it has a destiny."
  },
  {
    term: "low taper fade",
    definition: "a haircut phrase turned into an overused meme",
    family: "appearance",
    vibe: "absurd",
    scenario: "A normal haircut gets announced like a world event."
  },
  {
    term: "Grimace shake",
    definition: "a viral purple milkshake horror meme",
    family: "absurd",
    vibe: "chaotic",
    scenario: "A drink appears and the video immediately cuts to disaster."
  }
];

const modeLabels = {
  definition: "definition",
  scenario: "scenario",
  family: "multi-select",
  vibe: "multi-select",
  oddOne: "odd one out"
};

const quizForm = document.querySelector("#quizForm");
const quizView = document.querySelector("#quizView");
const resultsView = document.querySelector("#resultsView");
const questionCount = document.querySelector("#questionCount");
const multiCount = document.querySelector("#multiCount");
const seedLabel = document.querySelector("#seedLabel");
const answeredCount = document.querySelector("#answeredCount");
const roundSize = document.querySelector("#roundSize");
const chaosLevel = document.querySelector("#chaosLevel");
const newQuizButton = document.querySelector("#newQuizButton");
const checkButton = document.querySelector("#checkButton");
const resetButton = document.querySelector("#resetButton");
const backButton = document.querySelector("#backButton");
const newRoundButton = document.querySelector("#newRoundButton");
const scorePercent = document.querySelector("#scorePercent");
const scoreFraction = document.querySelector("#scoreFraction");
const breakdownGrid = document.querySelector("#breakdownGrid");
const resultsCopy = document.querySelector("#resultsCopy");

let currentQuiz = [];
let currentSeed = "";
let lastScore = null;

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function uniqueBy(items, key) {
  const seen = new Set();
  return items.filter((item) => {
    const value = item[key];
    if (seen.has(value)) return false;
    seen.add(value);
    return true;
  });
}

function sample(items, count) {
  return shuffle(items).slice(0, count);
}

function makeSeed() {
  return Math.random().toString(36).slice(2, 8).toUpperCase();
}

function buildSingleQuestion(id, mode) {
  const answer = randomItem(termBank);
  let prompt = "";
  let options = [];
  let correctTerm = answer.term;

  if (mode === "definition") {
    prompt = `What does "${answer.term}" usually mean?`;
    options = sample(termBank.filter((item) => item.term !== answer.term), 3).map((item) => item.definition);
    options.push(answer.definition);
    correctTerm = answer.definition;
  }

  if (mode === "scenario") {
    prompt = `${answer.scenario} Which term fits best?`;
    options = sample(termBank.filter((item) => item.term !== answer.term), 3).map((item) => item.term);
  }

  if (mode === "oddOne") {
    const family = answer.family;
    const sameFamily = sample(termBank.filter((item) => item.family === family && item.term !== answer.term), 3);
    const odd = randomItem(termBank.filter((item) => item.family !== family));
    prompt = `Three of these terms are about ${family}. Which one does not belong?`;
    options = [...sameFamily.map((item) => item.term), odd.term];
    correctTerm = odd.term;
  }

  if (mode !== "definition" && mode !== "oddOne") {
    options.push(answer.term);
  }

  const shuffledOptions = shuffle(options);

  return {
    id,
    type: "single",
    mode,
    prompt,
    options: shuffledOptions,
    answerIndexes: [shuffledOptions.indexOf(correctTerm)]
  };
}

function buildMultiQuestion(id, mode) {
  const key = mode === "family" ? "family" : "vibe";
  const values = [...new Set(termBank.map((item) => item[key]))];
  const value = randomItem(values);
  const correctPool = termBank.filter((item) => item[key] === value);
  const answerCount = Math.min(correctPool.length, Math.floor(Math.random() * 2) + 2);
  const answers = sample(correctPool, answerCount);
  const optionCount = Math.floor(Math.random() * 3) + 5;
  const distractors = sample(termBank.filter((item) => item[key] !== value), optionCount - answerCount);
  const options = shuffle(uniqueBy([...answers, ...distractors], "term"));
  const answerTerms = new Set(answers.map((item) => item.term));
  const prompt = key === "family"
    ? `Select every term that belongs to the "${value}" category.`
    : `Select every term with a mostly "${value}" vibe.`;

  return {
    id,
    type: "multi",
    mode,
    prompt,
    options: options.map((item) => item.term),
    answerIndexes: options
      .map((item, index) => answerTerms.has(item.term) ? index : -1)
      .filter((index) => index >= 0)
  };
}

function buildQuestion(index) {
  const normalModes = ["definition", "scenario", "family", "vibe"];
  const unhingedModes = ["definition", "scenario", "family", "vibe", "oddOne"];
  const mode = randomItem(chaosLevel.value === "unhinged" ? unhingedModes : normalModes);
  return mode === "family" || mode === "vibe"
    ? buildMultiQuestion(`q-${index}`, mode)
    : buildSingleQuestion(`q-${index}`, mode);
}

function generateQuiz() {
  const count = Number(roundSize.value);
  currentSeed = makeSeed();
  currentQuiz = Array.from({ length: count }, (_, index) => buildQuestion(index));
  lastScore = null;
  renderQuiz();
  showQuiz();
}

function renderQuiz() {
  questionCount.textContent = currentQuiz.length;
  multiCount.textContent = currentQuiz.filter((question) => question.type === "multi").length;
  seedLabel.textContent = currentSeed;
  updateAnsweredCount();

  quizForm.replaceChildren(...currentQuiz.map((question, index) => {
    const card = document.createElement("article");
    card.className = "question-card";

    const meta = document.createElement("div");
    meta.className = "question-meta";

    const number = document.createElement("span");
    number.className = "pill";
    number.textContent = `Question ${index + 1}`;

    const type = document.createElement("span");
    type.className = "pill alt";
    type.textContent = question.type === "multi" ? "select multiple" : "select one";

    const mode = document.createElement("span");
    mode.className = "pill";
    mode.textContent = modeLabels[question.mode];

    meta.append(number, type, mode);

    const title = document.createElement("h2");
    title.textContent = question.prompt;

    const options = document.createElement("div");
    options.className = "options";

    question.options.forEach((option, optionIndex) => {
      const label = document.createElement("label");
      label.className = "option";

      const input = document.createElement("input");
      input.type = question.type === "multi" ? "checkbox" : "radio";
      input.name = question.id;
      input.value = optionIndex;
      input.addEventListener("change", updateAnsweredCount);

      const text = document.createElement("span");
      text.textContent = option;

      label.append(input, text);
      options.append(label);
    });

    card.append(meta, title, options);
    return card;
  }));
}

function showQuiz() {
  quizView.hidden = false;
  resultsView.hidden = true;
  window.location.hash = "quiz";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showResults() {
  quizView.hidden = true;
  resultsView.hidden = false;
  window.location.hash = "results";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getSelected(question) {
  return [...quizForm.querySelectorAll(`input[name="${question.id}"]:checked`)]
    .map((input) => Number(input.value))
    .sort((a, b) => a - b);
}

function arraysMatch(left, right) {
  return left.length === right.length && left.every((value, index) => value === right[index]);
}

function updateAnsweredCount() {
  const answered = currentQuiz.filter((question) => getSelected(question).length > 0).length;
  answeredCount.textContent = answered;
}

function gradeQuiz() {
  const details = currentQuiz.map((question) => {
    const selected = getSelected(question);
    const answer = [...question.answerIndexes].sort((a, b) => a - b);
    return {
      question,
      selected,
      correct: arraysMatch(selected, answer),
      answered: selected.length > 0
    };
  });

  const correct = details.filter((item) => item.correct).length;
  const unanswered = details.filter((item) => !item.answered).length;
  const multiCorrect = details.filter((item) => item.question.type === "multi" && item.correct).length;
  const percent = Math.round((correct / currentQuiz.length) * 100);

  return { correct, unanswered, multiCorrect, percent, details };
}

function renderResults(score) {
  scorePercent.textContent = `${score.percent}%`;
  scoreFraction.textContent = `${score.correct} / ${currentQuiz.length}`;
  breakdownGrid.replaceChildren(
    statCard("Correct", score.correct),
    statCard("Unanswered", score.unanswered),
    statCard("Multi wins", score.multiCorrect)
  );

  const title = score.percent >= 85
    ? "Algorithm blessed"
    : score.percent >= 60
      ? "Decent aura retention"
      : "Timeline cooked";

  const message = score.unanswered > 0
    ? `You left ${score.unanswered} question${score.unanswered === 1 ? "" : "s"} blank, so the final score got clipped.`
    : "No answers were revealed on submit. Your picks are still waiting on the quiz page if you want to adjust and rescore.";

  resultsCopy.innerHTML = `
    <h2>${title}</h2>
    <p>${message}</p>
  `;
}

function statCard(label, value) {
  const card = document.createElement("div");
  card.className = "breakdown-card";

  const number = document.createElement("strong");
  number.textContent = value;

  const text = document.createElement("span");
  text.textContent = label;

  card.append(number, text);
  return card;
}

function checkAnswers() {
  lastScore = gradeQuiz();
  renderResults(lastScore);
  showResults();
}

function resetSelections() {
  quizForm.querySelectorAll("input").forEach((input) => {
    input.checked = false;
  });
  lastScore = null;
  updateAnsweredCount();
}

newQuizButton.addEventListener("click", generateQuiz);
newRoundButton.addEventListener("click", generateQuiz);
checkButton.addEventListener("click", checkAnswers);
resetButton.addEventListener("click", resetSelections);
backButton.addEventListener("click", showQuiz);
roundSize.addEventListener("change", generateQuiz);
chaosLevel.addEventListener("change", generateQuiz);

generateQuiz();
