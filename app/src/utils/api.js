import axios from "axios";

// http://openweathermap.org/forecast5
// http://api.openweathermap.org/data/2.5/weather?q=London&appid=fde3b749aa1f0a5c59224a21f2b2717e

const jsonContentTypeHeader = () => {
  return {
    headers: {
     "Content-Type": "application/json"
    }
  };
};

const appid = "fde3b749aa1f0a5c59224a21f2b2717e";
const webApiUrl = "http://api.openweathermap.org/data/2.5/forecast?appid=" + appid + "&q=";

module.exports = {
  getForecastResults: (q) => {
    return axios.get(webApiUrl + q, jsonContentTypeHeader()); 
  }
};
