// NASA API
const apiKey = "DEMO_KEY";
const count = 10;
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

let resultsArray = [];

// get 10 images from NASA API
async function getNasaPictures() {
  try {
    const response = await fetch(apiUrl);
    resultsArray = await response.json();
    console.log(resultsArray);
  } catch (error) {
    console.log("error fetching NASA pictures", error);
  }
}

// on load
getNasaPictures();
