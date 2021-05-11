/*
  Name: Jason Jun
  Student Number: 126683200
  Email: jjun10@myseneca.ca
*/

// An instance of our SimpleMap, created below when the window loads.
let map;

// Update the map to show markers for the set of observations
function updateMap(observations, map) {
  // Clear the current markers on the map (if any)
  map.clear();

  // TODO: call the Simple Map's addObservation method for every one
  // of the observations in order to add markers to the map.
  observations.map(function (observation) {
    map.addObservation(observation);
  });
}

// Update the card to show markers for the set of observations
function updateCard(observations) {
  // Remove any current data from the card
  clearAllCards();

  // Populate the card with all observation data we want to show
  observations.forEach((observation) => {
    var o_card = buildCardForObservation(observation);
    createNewCard(o_card);
  });
}

// Show all species on the map and table
function showAll() {
  // Get all the observations from our data.js and format them so we can work with the data
  const observations = getAllObservations();

  // Update the map and card
  updateMap(observations, map);
  updateCard(observations);
  updateCardTitle(`All Species (${observations.length})`);
}

// Show native species on the map and card
function showOnlyNative() {
  // Get all the observations from our data.js and format them so we can work with the data
  const observations = getAllObservations();
  // Filter out any that aren't native species
  const native = filterOnlyNative(observations);

  // Update the map and table
  updateMap(native, map);
  updateCard(native);
  updateCardTitle(`Only Native Species (${native.length})`);
}

// Show introduced species on the map and table
function showOnlyIntroduced() {
  // Get all the observations from our data.js and format them so we can work with the data
  const observations = getAllObservations();
  // Filter out any that aren't introduced species
  const introduced = filterOnlyIntroduced(observations);

  // Update the map and table
  updateMap(introduced, map);
  updateCard(introduced);
  updateCardTitle(`Only Introduced Species (${introduced.length})`);
}

function start() {
  // Create our map object for Seneca's Newnham campus
  map = new SimpleMap("map-container", 43.7955, -79.3496);

  // TODO: create click handlers for all three buttons.
  // The "All Species" button should call the showAll function.
  // The "Only Native Species" button should call the showOnlyNative function.
  // The "Only Introduced Species" button should call the showOnlyIntroduced function.
  // In your solution, show both ways of creating click event handlers (i.e.,
  // using the on* property and also addEventListener function).

  document.querySelector("#show-all").onclick = function () {
    showAll();
  };
  document.querySelector("#show-native").addEventListener("click", function () {
    showOnlyNative();
  });
  document
    .querySelector("#show-introduced")
    .addEventListener("click", function () {
      showOnlyIntroduced();
    });

  // Show all species observations by default when we start.
  showAll();
}

//call the start function when the page has finished fully loading.
window.onload = start();
