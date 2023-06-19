const sendButton = document.getElementById("send-btn");
const inputField = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");
const userMessage = document.querySelector(".message-row-user");
const botMessage = document.querySelector(".message-row-bot");
sendButton.addEventListener("click", () => {
  const message = inputField.value;
  inputField.value = "";
  let newMessage = userMessage.cloneNode(true);
  newMessage.querySelector("p").textContent = message;
  chatBox.insertAdjacentHTML("beforeend", newMessage.outerHTML);
  chatBox.scrollBy(0, 1000000);

  setTimeout(() => {
    let newMessage = botMessage.cloneNode(true);
    newMessage.querySelector("p").innerHTML = getResponse().replace(/\n/g, "<br>");
    chatBox.insertAdjacentHTML("beforeend", newMessage.outerHTML);
    chatBox.scrollBy(0, 1000000);
  }, 1500);
});

function getResponse() {
  const response = 
 `
  Day 1:
  Morning:
  
  Arrive at Ngurah Rai International Airport in Denpasar, Bali.
  Check-in at your hotel or accommodation in the area of your choice.
  Afternoon:
  
  Explore the beautiful beaches of Bali. You can head to Kuta Beach or Seminyak Beach to relax, swim, and soak up the sun.
  Visit the iconic Tanah Lot Temple, a temple perched on a rock formation overlooking the ocean. Enjoy the stunning sunset views.
  Evening:
  
  Indulge in a traditional Balinese dinner at a local restaurant. Try some delicious dishes like Nasi Goreng (fried rice) or Babi Guling (roast suckling pig).

  Day 2:
  Morning:
  
  Start your day with a trip to Ubud, the cultural heart of Bali. Visit the Ubud Monkey Forest, a nature reserve inhabited by Balinese long-tailed monkeys.
  Explore the traditional art markets in Ubud, where you can find unique handicrafts, artworks, and souvenirs.
  Afternoon:
  
  Visit the Tegalalang Rice Terrace, famous for its stunning terraced rice fields. Take a leisurely walk through the fields and enjoy the beautiful scenery.
  Visit the Goa Gajah (Elephant Cave), an ancient archaeological site with a Hindu temple and carved stone relics.
  Evening:
  
  Watch a traditional Balinese dance performance in Ubud, such as the Kecak Fire Dance or Legong Dance.
  Enjoy a delicious dinner at one of the many restaurants in Ubud. Try some Balinese specialties like Ayam Betutu (spiced roasted chicken) or Bebek Bengil (crispy duck).
  
  Day 3:
  Morning:
  
  Take an early morning trip to the Tirta Empul Temple, a holy water temple where locals go for purification rituals. You can participate in the ritual if you wish.
  Afternoon:
  
  Visit the Uluwatu Temple, located on a cliff overlooking the Indian Ocean. Explore the temple and enjoy breathtaking views of the coastline.
  Watch the famous Kecak and Fire Dance performance at the Uluwatu Temple. The dance depicts a traditional Balinese story.
  Evening:
  
  Head to Jimbaran Bay for a seafood dinner on the beach. Enjoy fresh seafood grilled to perfection while watching the sunset.";
  `
  return response;
}
