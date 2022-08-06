// inspirational Quote, total 10
const inspirationalQuotes = [
  'Doubt kills more dreams than failure ever will. – Suzy Kassem',
  'Whether you think you can or think you can\'t, you\'re right. – Henry Ford',
  'It is during our darkest moments that we must focus to see the light. — Aristotle',
  'The best way to get started is to quit talking and begin doing. ― Walt Disney',
  'Don\'t Let Yesterday Take Up Too Much Of Today. – Will Rogers',
  'Creativity is intelligence having fun. – Albert Einstein',
  'Act as if what you do makes a difference. It does. -William James',
  'Don\'t Let Yesterday Take Up Too Much Of Today. – Will Rogers',
  'If you can change your mind, you can change your life.― William James',
  'As if you could kill time without injuring eternity.” ― Henry David Thoreau'
];
// A function to generate random Number
function newMessage() {
let randomNum = Math.floor(Math.random() * (inspirationalQuotes.length));
document.getElementById('messageDisplay').innerHTML = inspirationalQuotes[randomNum];
}
console.log(newMessage());