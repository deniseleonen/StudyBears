/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 */

// dataset array for study spots
// attributes: name, image, location, noise level, if it offers food/drink, outlet availability, best for (tags), and if it's a personal favorite

let studySpots = [
  {
    title: "1951 Coffee",
    imageURL: "images/1951.jpg",
    location: "Southside",
    noiseLevel: "Moderate",
    foodDrinks: true,
    outlets: "limited",
    bestFor: ["coffee chats", "socializing"],
    favorite: false,
  },
  {
    title: "8 Grams",
    imageURL: "images/8grams.webp",
    location: "Southside",
    noiseLevel: "Moderate",
    foodDrinks: true,
    outlets: "none",
    bestFor: ["socializing", "coffee chats", "open late"],
    favorite: false,
  },
  {
    title: "Art History and Classics Library",
    imageURL: "images/Art History:Classics.jpg",
    location: "Central Campus",
    noiseLevel: "Quiet",
    foodDrinks: false,
    outlets: "Yes",
    bestFor: ["deep work", "open late"],
    favorite: false,
  },
  {
    title: "BAMPFA",
    imageURL: "images/BAMPFA.webp",
    location: "Downtown",
    noiseLevel: "Quiet",
    foodDrinks: false,
    outlets: "limited",
    bestFor: ["deep work"],
    favorite: false,
  },
  {
    title: "Bancroft Library",
    imageURL: "images/Bancroft.jpeg",
    location: "Central Campus",
    noiseLevel: "Quiet",
    foodDrinks: false,
    outlets: "Yes",
    bestFor: ["deep work", "group study"],
    favorite: false,
  },
  {
    title: "Binge Downtown",
    imageURL: "images/Binge (DT).jpg",
    location: "Downtown",
    noiseLevel: "Moderate",
    foodDrinks: true,
    outlets: "limited",
    bestFor: ["socializing", "coffee chats"],
    favorite: false,
  },
  {
    title: "Binge Southside",
    imageURL: "images/Binge (South).jpg",
    location: "Southside",
    noiseLevel: "Lively",
    foodDrinks: true,
    outlets: "Yes",
    bestFor: ["socializing", "coffee chats", "open late"],
    favorite: true,
  },
  {
    title: "Business Library",
    imageURL: "images/Business.jpg",
    location: "East Campus",
    noiseLevel: "Moderate",
    foodDrinks: false,
    outlets: "Yes",
    bestFor: ["group study", "deep work", "open late"],
    favorite: false,
  },
  {
    title: "Cha",
    imageURL: "images/Cha.jpeg",
    location: "Downtown",
    noiseLevel: "Quiet",
    foodDrinks: true,
    outlets: "limited",
    bestFor: ["coffee chats", "socializing", "open late"],
    favorite: true,
  },
  {
    title: "Chemistry, Astronomy, and Physics Library",
    imageURL: "images/Chem:Astro:Physics.jpeg",
    location: "East Campus",
    noiseLevel: "Quiet",
    foodDrinks: false,
    outlets: "Yes",
    bestFor: ["deep work", "open late"],
    favorite: false,
  },
  {
    title: "Doe Library",
    imageURL: "images/Doe.jpeg",
    location: "Central Campus",
    noiseLevel: "Quiet",
    foodDrinks: false,
    outlets: "Yes",
    bestFor: ["deep work", "open late"],
    favorite: true,
  },
  {
    title: "Earth Sciences Library",
    imageURL: "images/Earth Science.webp",
    location: "Northside",
    noiseLevel: "Quiet",
    foodDrinks: false,
    outlets: "Yes",
    bestFor: ["deep work"],
    favorite: false,
  },
  {
    title: "East Asian Library",
    imageURL: "images/East Asian.jpeg",
    location: "Central Campus",
    noiseLevel: "Quiet",
    foodDrinks: false,
    outlets: "limited",
    bestFor: ["deep work", "open late"],
    favorite: true,
  },
  {
    title: "Elaichi",
    imageURL: "images/Elaichi.jpg",
    location: "Downtown",
    noiseLevel: "Lively",
    foodDrinks: true,
    outlets: "none",
    bestFor: ["coffee chats", "socializing", "open late"],
    favorite: false,
  },
  {
    title: "Environmental Design Library",
    imageURL: "images/Env Design.jpg",
    location: "East Campus",
    noiseLevel: "Quiet",
    foodDrinks: false,
    outlets: "Yes",
    bestFor: ["group study", "deep work", "open late"],
    favorite: false,
  },
  {
    title: "Ethnic Studies Library",
    imageURL: "images/Ethnic Studies.webp",
    location: "Central Campus",
    noiseLevel: "Quiet",
    foodDrinks: false,
    outlets: "Yes",
    bestFor: ["deep work"],
    favorite: false,
  },
  {
    title: "GARA",
    imageURL: "images/GARA.jpg",
    location: "Southside",
    noiseLevel: "Lively",
    foodDrinks: false,
    outlets: "Yes",
    bestFor: ["group study", "socializing"],
    favorite: true,
  },
  {
    title: "Gold Bean",
    imageURL: "images/Gold Bean.jpg",
    location: "Downtown",
    noiseLevel: "Moderate",
    foodDrinks: true,
    outlets: "limited",
    bestFor: ["coffee chats", "socializing"],
    favorite: false,
  },
  {
    title: "Government Studies Library",
    imageURL: "images/Gov Studies.webp",
    location: "Central Campus",
    noiseLevel: "Quiet",
    foodDrinks: false,
    outlets: "Yes",
    bestFor: ["deep work"],
    favorite: false,
  },
  {
    title: "Grimes",
    imageURL: "images/Grimes.jpg",
    location: "Northside",
    noiseLevel: "Lively",
    foodDrinks: true,
    outlets: "Yes",
    bestFor: ["group study", "socializing","deep work", "open late"],
    favorite: true,
  },
  {
    title: "Law Library",
    imageURL: "images/Law.jpg",
    location: "Southside",
    noiseLevel: "Quiet",
    foodDrinks: false,
    outlets: "Yes",
    bestFor: ["deep work", "open late"],
    favorite: false,
  },
  {
    title: "Lawrence Hall",
    imageURL: "images/Lawrence.webp",
    location: "Northside",
    noiseLevel: "Moderate",
    foodDrinks: false,
    outlets: "Yes",
    bestFor: ["group study", "deep work"],
    favorite: false,
  },
  {
    title: "Main Stacks",
    imageURL: "images/Mainstacks.jpg",
    location: "Central Campus",
    noiseLevel: "Quiet",
    foodDrinks: false,
    outlets: "Yes",
    bestFor: ["deep work", "open late", "group study"],
    favorite: false,
  },
  {
    title: "Morrison Library",
    imageURL: "images/Morrison.jpg",
    location: "Central Campus",
    noiseLevel: "Quiet",
    foodDrinks: false,
    outlets: "limited",
    bestFor: ["deep work"],
    favorite: false,
  },
  {
    title: "Music Library",
    imageURL: "images/Music.jpg",
    location: "East Campus",
    noiseLevel: "Quiet",
    foodDrinks: false,
    outlets: "Yes",
    bestFor: ["deep work", "open late"],
    favorite: false,
  },
  {
    title: "Public Health Library",
    imageURL: "images/Public Health.jpeg",
    location: "Downtown",
    noiseLevel: "Quiet",
    foodDrinks: false,
    outlets: "Yes",
    bestFor: ["deep work", "open late"],
    favorite: false,
  },
  {
    title: "Social Research Library",
    imageURL: "images/Social Researcg.webp",
    location: "Central Campus",
    noiseLevel: "Quiet",
    foodDrinks: false,
    outlets: "limited",
    bestFor: ["deep work"],
    favorite: false,
  },
  {
    title: "SodoI",
    imageURL: "images/SodoI.jpg",
    location: "Southside",
    noiseLevel: "Lively",
    foodDrinks: true,
    outlets: "limited",
    bestFor: ["coffee chats", "group study"],
    favorite: true,
  },
  {
    title: "Strada",
    imageURL: "images/Strada.jpg",
    location: "Southside",
    noiseLevel: "Lively",
    foodDrinks: true,
    outlets: "limited",
    bestFor: ["socializing", "coffee chats", "open late"],
    favorite: false,
  },
  {
    title: "Systemwide Library",
    imageURL: "images/Systemwide.webp",
    location: "Northside",
    noiseLevel: "Quiet",
    foodDrinks: false,
    outlets: "Yes",
    bestFor: ["deep work"],
    favorite: false,
  },
  {
    title: "Theological Library",
    imageURL: "images/Theological.jpeg",
    location: "Northside",
    noiseLevel: "Quiet",
    foodDrinks: false,
    outlets: "limited",
    bestFor: ["deep work"],
    favorite: false,
  },
];

// controls the default state for the filters
let filters = {
  location: "all",
  noiseLevel: "all",
  foodDrinks: "all",
  sortTag: "default",
};

// This function filters the study spots based on the current filter settings and returns the visible spots. It also sorts the spots based on the selected tag if applicable.
function getVisibleSpots() {
  let visibleSpots = studySpots.filter((spot) => {
    const matchesLocation =
      filters.location === "all" || spot.location === filters.location;
    const matchesNoise =
      filters.noiseLevel === "all" || spot.noiseLevel === filters.noiseLevel;
    const matchesFood =
      filters.foodDrinks === "all" ||
      (filters.foodDrinks === "yes" && spot.foodDrinks) ||
      (filters.foodDrinks === "no" && !spot.foodDrinks);

    return matchesLocation && matchesNoise && matchesFood;
  });

  // if tag is selected, sort the visible spots accordingly
  if (filters.sortTag !== "default") {
    visibleSpots = visibleSpots.slice().sort((firstSpot, secondSpot) => {
      const firstMatch = firstSpot.bestFor.includes(filters.sortTag) ? 1 : 0;
      const secondMatch = secondSpot.bestFor.includes(filters.sortTag) ? 1 : 0;

      // sorts things in descending order so that spots that match the tag appear first
      if (firstMatch !== secondMatch) {
        return secondMatch - firstMatch;
      }

      return firstSpot.title.localeCompare(secondSpot.title);
    });
  }

  return visibleSpots;
}

// clears the cared area and creates a card for each visible spot, then adds the card to the page
// if there are no visible spots, it shows a message indicating that no spots match the filters.
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");
  const visibleSpots = getVisibleSpots();

  for (let i = 0; i < visibleSpots.length; i++) {
    const spot = visibleSpots[i];
    const nextCard = templateCard.cloneNode(true);
    editCardContent(nextCard, spot);
    cardContainer.appendChild(nextCard);
  }

  if (visibleSpots.length === 0) {
    cardContainer.innerHTML =
      '<p class="empty-state">No study spots match these filters yet!</p>';
  }
}
// updates each card
function editCardContent(card, spot) {
  card.style.display = "block";

  // finds the favorite badge, either shows or hides it
  card.querySelector(".favorite-badge").style.display =
    spot.favorite ? "inline-block" : "none";

  // finds the <h2> inside the card and changes the text to the title of the spot
  card.querySelector("h2").textContent = spot.title;

  // finds the image inside the card and updates the src and alt attributes to show the correct image and title for the spot
  const image = card.querySelector("img");
  image.src = spot.imageURL;
  image.alt = spot.title;

  // fills in the location
  card.querySelector(".card-location").textContent = `Location: ${spot.location}`;

  // noise level
  card.querySelector(".card-noise").textContent = `Noise: ${spot.noiseLevel}`;

  // food/drinks
  card.querySelector(".card-food").textContent =
    `Food & drinks: ${spot.foodDrinks ? "Food & drinks" : "No food or drinks"}`;
  
  // # of outlets
  card.querySelector(".card-outlets").textContent = `Outlets: ${spot.outlets}`;

  // finds tag section
  const cardTags = card.querySelector(".card-tags");
  cardTags.innerHTML = "";

  // loops through each item for "best for" tags
  for (const item of spot.bestFor) {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = item;
    cardTags.appendChild(tag);
  }
}

// this function finds the dropdown menus, waits for the user to change the value, saves the selected value, and calls showCards()
function setupFilters() {

  // gets each filter from the dropdown menu
  const locationFilter = document.getElementById("location-filter");
  const noiseFilter = document.getElementById("noise-filter");
  const foodFilter = document.getElementById("food-filter");
  const tagSort = document.getElementById("tag-sort");

  // when the location filter changes, saves the new value and refreshes the cards on the page
  locationFilter.addEventListener("change", function (event) {
    filters.location = event.target.value;
    showCards();
  });

  // when the noise filter changes, saves the new value and refreshes the cards on the page
  noiseFilter.addEventListener("change", function (event) {
    filters.noiseLevel = event.target.value;
    showCards();
  });

  // when the food filter changes, saves the new value and refreshes the cards on the page
  foodFilter.addEventListener("change", function (event) {
    filters.foodDrinks = event.target.value;
    showCards();
  });

  // when the tag sort option changes, saves the new value and refreshes the cards on the page
  tagSort.addEventListener("change", function (event) {
    filters.sortTag = event.target.value;
    showCards();
  });
}

// this waits for the page to load, then sets up the filters and shows the cards
document.addEventListener("DOMContentLoaded", function () {
  setupFilters();
  showCards();
});
