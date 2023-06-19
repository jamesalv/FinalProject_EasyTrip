// Explore Carousel
const exploreCarousel = document.querySelector(".explore-carousel");
firstImg = exploreCarousel.querySelector("img");
arrowBtn = document.querySelectorAll(".carousel-wrapper i");

let firstImgWidth = firstImg.clientWidth + 15;

arrowBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("fa-angle-left")) {
      exploreCarousel.scrollLeft -= firstImgWidth;
    } else {
      exploreCarousel.scrollLeft += firstImgWidth;
    }
  });
});

// Recommendation Carousel
const recommendationCarousel = document.querySelectorAll(
  ".recommendation-carousel"
);
firstCard = recommendationCarousel[0].querySelector(".recommendation-card");
arrowBtn2 = document.querySelectorAll(".recommendation-carousel-wrapper .nav-button");

let firstCardWidth = firstCard.clientWidth + 10;

arrowBtn2.forEach((btn) => {
  btn.addEventListener("click", () => {
    let currentCarousel = null;
    if(btn.classList.contains("fa-angle-left")){
        currentCarousel = btn.nextElementSibling;
    } else if (btn.classList.contains("fa-angle-right")){
        currentCarousel = btn.previousElementSibling;
    }
    recommendationCarousel.forEach((carousel) => {
      if (currentCarousel === carousel){
        if (btn.classList.contains("fa-angle-left")) {
          carousel.scrollLeft -= firstCardWidth;
        } else if (btn.classList.contains("fa-angle-right")) {
          carousel.scrollLeft += firstCardWidth;
        }
      }
    });
  });
});

// Itinerary Numbering
const itineraryCardContainer = document.querySelectorAll(
  ".itinerary-card-container"
);
function makeNumbers() {
  for (let i = 0; i < itineraryCardContainer.length; i++) {
    const itineraryCardNumber = itineraryCardContainer[i].querySelectorAll(
      ".itinerary-card .marker .num"
    );
    for (let j = 0; j < itineraryCardNumber.length; j++) {
      itineraryCardNumber[j].textContent = j + 1;
    }
  }
}
makeNumbers();

// Itinerary Card Separator
function makeSeparator() {
  for (let i = 0; i < itineraryCardContainer.length; i++) {
    const itineraryCard =
      itineraryCardContainer[i].querySelectorAll(".itinerary-card");
    for (let j = 0; j < itineraryCard.length; j++) {
      if (j > 0) {
        const separator = document.createElement("div");
        separator.classList.add("card-separator");
        itineraryCardContainer[i].insertBefore(separator, itineraryCard[j]);
      }
    }
  }
}

// Itinerary Remove Card
const cardDeleteBtn = document.querySelectorAll(".delete-btn");
cardDeleteBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Removing separators
    // If parent is first child remove next sibling
    if (
      btn.parentElement.parentElement.firstElementChild === btn.parentElement
    ) {
      btn.parentElement.nextElementSibling.remove();
    } else {
      btn.parentElement.previousElementSibling.remove();
    }
    btn.parentElement.remove();
    makeNumbers();
  });
});

// Dynamically add card to itinerary
const itineraryCard = document.querySelector(".itinerary-card");
const itineraryCardBtn = document.querySelectorAll(".add-btn");
const itinerarySeparator = document.querySelector(".card-separator");

itineraryCardBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Clone the card
    const newCard = itineraryCard.cloneNode(true);
    const newSeparator = itinerarySeparator.cloneNode(true);
    // // Add event listener to remove button
    newCard.querySelector(".delete-btn").addEventListener("click", () => {
      newCard.remove();
      newSeparator.remove();
      makeNumbers();
    });
    // Change card image to btn sibling image
    const newCardImg = newCard.querySelector("img");
    const btnImg = btn.previousElementSibling.previousElementSibling;
    newCardImg.src = btnImg.src;

    // // Change Card title to btn sibling title
    const newCardTitle = newCard.querySelector(".itinerary-card-info h3");
    const btnTitle = btn.previousElementSibling;
    newCardTitle.textContent = btnTitle.textContent;

    const itineraryCardContainer =
      btn.parentElement.parentElement.parentElement.parentElement
        .previousElementSibling.previousElementSibling;
    itineraryCardContainer.appendChild(newSeparator);
    itineraryCardContainer.appendChild(newCard);
    makeNumbers();
  });
});

// Sidebar
function scrollToDiv(event){
  event.preventDefault();
  const targetID = event.currentTarget.getAttribute("href");

  if(targetID){
    const targetElement = document.querySelector(targetID);
    const targetPosition = targetElement.offsetTop;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });
  }

  // Remove All nav-active class
  hideAutoPlanner();
  const navItems = document.querySelectorAll(".nav-btn");
  navItems.forEach((item) => {
    item.classList.remove("nav-active");
  })

  // Add nav-active class to current nav-item
  const targetParent = event.currentTarget.parentElement;
  targetParent.classList.add("nav-active");
}

function showAutoPlanner(event){
  const targetID = event.currentTarget.getAttribute("href");
  const navItems = document.querySelectorAll(".nav-btn");
  navItems.forEach((item) => {
    item.classList.remove("nav-active");
  })
  
  const targetElement = document.querySelector(targetID);
  console.log(targetElement);
  targetElement.classList.add("auto-planner-active");
}

function hideAutoPlanner(){
  const targetElement = document.querySelector("#auto-planner");
  targetElement.classList.remove("auto-planner-active");
}

// Expense Overlay
let expenseCard = null;

function openExpenseOverlay(card){
  const expenseOverlay = document.getElementById("expenseOverlay");
  expenseOverlay.style.display = "flex";
  expenseCard = card;
}

function closeExpenseOverlay(){
  const expenseOverlay = document.getElementById("expenseOverlay");
  expenseOverlay.style.display = "none";
}


function setExpense(){
  const expenseOverlay = document.getElementById("expenseOverlay");
  const expenseInput = expenseOverlay.querySelector("input");
  const expenseSelect = expenseOverlay.querySelector("select");
  const expenseVal = expenseInput.value;
  const expenseType = expenseSelect.value;

  const expenseCardExpense = expenseCard.querySelector(".add-expense .expense-val");
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });
  expenseCardExpense.textContent = formatter.format(expenseVal);


  closeExpenseOverlay();
}

// Store All Expense Value
let expenses = [] 
function storeAllExpense(){
  // Get all itineray card, expense value, expense type and store it in an array
  const itineraryCards = document.querySelectorAll(".itinerary-card");
  itineraryCards.forEach((card) => {
    const cardTitle = card.querySelector(".itinerary-card-info h3").textContent;
    
  });
}

// Set Time Overlay
let timeStart = null;
let timeEnd = null;
function openSetTimeOverlay(card){
  const setTimeOverlay = document.getElementById("setTimeOverlay");
  setTimeOverlay.style.display = "flex";
  expenseCard = card;
}

function closeSetTimeOverlay(){
  const setTimeOverlay = document.getElementById("setTimeOverlay");
  setTimeOverlay.style.display = "none";
}

function setTime(){
  const setTimeOverlay = document.getElementById("setTimeOverlay");
  const startTimeInput = setTimeOverlay.querySelector("#startTime");
  const endTimeInput = setTimeOverlay.querySelector("#endTime");

  timeStart = startTimeInput.value;
  timeEnd = endTimeInput.value;

  // Concatenate time
  const time = timeStart + " - " + timeEnd;

  const timeCardTime = expenseCard.querySelector(".add-time span");
  timeCardTime.textContent = time;

  closeSetTimeOverlay();
}

