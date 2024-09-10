const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const searchInput = document.querySelector("#weather-input");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");

search.addEventListener("click", async () => {
  const url = `https://open-weather13.p.rapidapi.com/city/${searchInput.value}/EN`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "a03eb1cd7amshd680fbb2ca9d6f8p1b2740jsncb92557bd08d",
      "x-rapidapi-host": "open-weather13.p.rapidapi.com",
    },
  };

  try {
    searchInput.value = "";
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);

    const image = document.querySelector(".weather-box img");
    const cityname = document.querySelector(".weather-box .cityname");
    const temperature = document.querySelector(".weather-box .temperature");
    const description = document.querySelector(".weather-box .description");
    const humidity = document.querySelector(".weather-details .humidity span");
    const wind = document.querySelector(".weather-details .wind span");
    image.src = "./sun-clouds.png";
    result.name;

    temperature.innerHTML = `${parseInt(result.main.temp)}<span>&deg;C</span>`;
    description.innerHTML = `${result.weather[0].description}`;
    humidity.innerHTML = `${result.main.humidity}`;
    wind.innerHTML = `${result.wind.speed}`;
    cityname.innerHTML = `${result.name}`;
  } catch (error) {
    console.error(error);
  }
});
// Shift alt down to copy multiple lines of text

// switch ((result.weather[0], main)) {
//   case "Clear":
//     image.src = "images/sun-logo-gradient-minimalist-style-design.png";
//     break;

//   case "Rain":
//     image.src = "./storm-cloud-rain.png";
//     break;

//   case "Snow":
//     image.src = "./cloudysnow.png";
//     break;

//   case "Cloudy":
//     image.src = "./realistic-cloud-transparent.png";
//     break;

//   case "Mist":
//     image.src = "./misty-cloud-svgrepo-com.png";
//     break;

//   case "Haze":
//     image.src = "./misty-cloud-svgrepo-com.png";
//     break;

//   default:
//     image.src = "./sun-clouds.png";
// }
