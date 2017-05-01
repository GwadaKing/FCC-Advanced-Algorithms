// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  // si tracks n'existe pas dans l'album, créer un tableau vide
  if (prop==="tracks" && (!(collection[id]).tracks)) {
    collection[id].tracks = [];
  }
  // si tracks a une valeur, la rajouter
  if (prop === "tracks" && value !== "") {
    collection[id].tracks.push(value);
  }
  // sinon si prop différent de tracks et value existe alors le rajouter
  else if (prop !== "tracks" && value !== "") {
    collection[id][prop] = value;
  }
  // sinon si value vide alors effacer la propriété correspondante
  else if (value === "") {
    delete collection[id][prop];
  }
  return collection;
}
// Alter values below to test your code
updateRecords(2468, "tracks", "Free");