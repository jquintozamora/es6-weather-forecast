// Import CSS
import css from "./../stylesheets/main.scss";

// Weather Component using ES6
import { WeatherComponent } from "./components/WeatherComponent";

// If we want to use Mock Date please swap this files. 
// Note that we can use webpack to swap them automatically depending on the environment
//import { getForecastResults } from "./utils/mock/mockApi";
import { getForecastResults } from "./utils/api";


const initialDiv = document.getElementById("weatherDiv");

// API call to get the results
getForecastResults("London")
    .then(data => { 
        const filteredList = data.data.list.filter((item) => { 
            const dateTime = new Date(item.dt * 1000);
            // Assumtion get the forecast for time = 15 hours
            if (dateTime.getHours().toString() === "15") {
                return true;
            }
            return false;
        });
        const wControl = new WeatherComponent(filteredList);
        initialDiv.innerHTML = wControl.toHtml();
    })
    .catch(error => { 
        console.error(error);
    });
