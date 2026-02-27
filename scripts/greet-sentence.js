const sentenceElement = document.querySelector('#greet-sentence');
const username = "Kyle"
const sentences = [
  "Where should we begin?",
  `What are you working on?`,
  `How can I help, ${username}?`,
  `What’s on your mind today?`,
  `What’s on the agenda today?`,
  `Good to see you, ${username}.`,
  `Hey, ${username}. Ready to dive in?`
];
const randomIndex = Math.floor(Math.random() * sentences.length);
sentenceElement.innerHTML = sentences[randomIndex];