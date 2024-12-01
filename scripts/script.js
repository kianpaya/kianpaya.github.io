const messages = [
    "Keep pushing your limits!",
    "Believe you can and you're halfway there.",
    "Your limitation—it's only your imagination.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it."
];
function displayRandomMessage() {
    const messageElement = document.getElementById('message');
    const randomIndex = Math.floor(Math.random() * messages.length);
    messageElement.textContent = messages[randomIndex];
}
// Call the function to display a random message on page load
displayRandomMessage();