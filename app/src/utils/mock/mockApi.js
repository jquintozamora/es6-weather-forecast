import delay from "./delay";

// This file mocks a web api by working with hard-coded data below.
// PROs of using MOCK data:
//  - We can start defining the component before having full access to API
//  - We can work offline
//  - We can save API calls, and this is usefull if the service has limited calls per day

// It uses setTimeout to simulate the delay of an AJAX call
// All calls return promises

// Plase, don't format JSON manually, use this tool: http://jsonformatter.org/
// Using VS Code use Alt + Shift + F to automatically format the code (js)

let apiExample = {
    "city": {
        "id": 2643743,
        "name": "London",
        "coord": {
            "lon": -0.12574,
            "lat": 51.50853
        },
        "country": "GB",
        "population": 0,
        "sys": {
            "population": 0
        }
    },
    "cod": "200",
    "message": 0.0121,
    "cnt": 40,
    "list": [
        {
            "dt": 1480269600,
            "main": {
                "temp": 279.75,
                "temp_min": 279.75,
                "temp_max": 280.103,
                "pressure": 1031.64,
                "sea_level": 1039.4,
                "grnd_level": 1031.64,
                "humidity": 82,
                "temp_kf": -0.35
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 80
            },
            "wind": {
                "speed": 4.31,
                "deg": 42.0034
            },
            "rain": {
                "3h": 0.005
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2016-11-27 18:00:00"
        },
        {
            "dt": 1480280400,
            "main": {
                "temp": 278.21,
                "temp_min": 278.21,
                "temp_max": 278.477,
                "pressure": 1032.44,
                "sea_level": 1040.28,
                "grnd_level": 1032.44,
                "humidity": 85,
                "temp_kf": -0.27
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 20
            },
            "wind": {
                "speed": 4.22,
                "deg": 40.0001
            },
            "rain": {
                "3h": 0.005
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2016-11-27 21:00:00"
        },
        {
            "dt": 1480291200,
            "main": {
                "temp": 276.92,
                "temp_min": 276.92,
                "temp_max": 277.1,
                "pressure": 1032.74,
                "sea_level": 1040.6,
                "grnd_level": 1032.74,
                "humidity": 87,
                "temp_kf": -0.18
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 8
            },
            "wind": {
                "speed": 3.94,
                "deg": 34.5005
            },
            "rain": {
                "3h": 0.005
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2016-11-28 00:00:00"
        },
        {
            "dt": 1480302000,
            "main": {
                "temp": 277.02,
                "temp_min": 277.02,
                "temp_max": 277.105,
                "pressure": 1032.73,
                "sea_level": 1040.63,
                "grnd_level": 1032.73,
                "humidity": 89,
                "temp_kf": -0.09
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 64
            },
            "wind": {
                "speed": 3.95,
                "deg": 36.5029
            },
            "rain": {
                "3h": 0.015
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2016-11-28 03:00:00"
        },
        {
            "dt": 1480312800,
            "main": {
                "temp": 278.936,
                "temp_min": 278.936,
                "temp_max": 278.936,
                "pressure": 1033.92,
                "sea_level": 1041.85,
                "grnd_level": 1033.92,
                "humidity": 84,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 80
            },
            "wind": {
                "speed": 3.36,
                "deg": 71.003
            },
            "rain": {
                "3h": 0.025
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2016-11-28 06:00:00"
        },
        {
            "dt": 1480323600,
            "main": {
                "temp": 278.14,
                "temp_min": 278.14,
                "temp_max": 278.14,
                "pressure": 1036.06,
                "sea_level": 1044.01,
                "grnd_level": 1036.06,
                "humidity": 76,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.91,
                "deg": 97.5023
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2016-11-28 09:00:00"
        },
        {
            "dt": 1480334400,
            "main": {
                "temp": 280.265,
                "temp_min": 280.265,
                "temp_max": 280.265,
                "pressure": 1036.94,
                "sea_level": 1044.74,
                "grnd_level": 1036.94,
                "humidity": 74,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.57,
                "deg": 97.0039
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2016-11-28 12:00:00"
        },
        {
            "dt": 1480345200,
            "main": {
                "temp": 278.946,
                "temp_min": 278.946,
                "temp_max": 278.946,
                "pressure": 1037.2,
                "sea_level": 1045.07,
                "grnd_level": 1037.2,
                "humidity": 72,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.82,
                "deg": 87.5004
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2016-11-28 15:00:00"
        },
        {
            "dt": 1480356000,
            "main": {
                "temp": 276.539,
                "temp_min": 276.539,
                "temp_max": 276.539,
                "pressure": 1038.18,
                "sea_level": 1046.09,
                "grnd_level": 1038.18,
                "humidity": 72,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.21,
                "deg": 84.5015
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2016-11-28 18:00:00"
        },
        {
            "dt": 1480366800,
            "main": {
                "temp": 275.605,
                "temp_min": 275.605,
                "temp_max": 275.605,
                "pressure": 1039.07,
                "sea_level": 1047.08,
                "grnd_level": 1039.07,
                "humidity": 77,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.57,
                "deg": 89.501
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2016-11-28 21:00:00"
        },
        {
            "dt": 1480377600,
            "main": {
                "temp": 274.135,
                "temp_min": 274.135,
                "temp_max": 274.135,
                "pressure": 1039.35,
                "sea_level": 1047.41,
                "grnd_level": 1039.35,
                "humidity": 86,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.61,
                "deg": 97.0018
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2016-11-29 00:00:00"
        },
        {
            "dt": 1480388400,
            "main": {
                "temp": 271.576,
                "temp_min": 271.576,
                "temp_max": 271.576,
                "pressure": 1039.43,
                "sea_level": 1047.57,
                "grnd_level": 1039.43,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.56,
                "deg": 96.0077
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2016-11-29 03:00:00"
        },
        {
            "dt": 1480399200,
            "main": {
                "temp": 269.953,
                "temp_min": 269.953,
                "temp_max": 269.953,
                "pressure": 1039.52,
                "sea_level": 1047.79,
                "grnd_level": 1039.52,
                "humidity": 93,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.11,
                "deg": 79.0017
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2016-11-29 06:00:00"
        },
        {
            "dt": 1480410000,
            "main": {
                "temp": 270.946,
                "temp_min": 270.946,
                "temp_max": 270.946,
                "pressure": 1040.61,
                "sea_level": 1048.7,
                "grnd_level": 1040.61,
                "humidity": 90,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 0.97,
                "deg": 55.0016
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2016-11-29 09:00:00"
        },
        {
            "dt": 1480420800,
            "main": {
                "temp": 277.608,
                "temp_min": 277.608,
                "temp_max": 277.608,
                "pressure": 1040.61,
                "sea_level": 1048.53,
                "grnd_level": 1040.61,
                "humidity": 81,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.76,
                "deg": 13.0005
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2016-11-29 12:00:00"
        },
        {
            "dt": 1480431600,
            "main": {
                "temp": 277.006,
                "temp_min": 277.006,
                "temp_max": 277.006,
                "pressure": 1039.82,
                "sea_level": 1047.75,
                "grnd_level": 1039.82,
                "humidity": 78,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.23,
                "deg": 13.0025
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2016-11-29 15:00:00"
        },
        {
            "dt": 1480442400,
            "main": {
                "temp": 271.153,
                "temp_min": 271.153,
                "temp_max": 271.153,
                "pressure": 1040.18,
                "sea_level": 1048.34,
                "grnd_level": 1040.18,
                "humidity": 91,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.21,
                "deg": 346.008
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2016-11-29 18:00:00"
        },
        {
            "dt": 1480453200,
            "main": {
                "temp": 269.038,
                "temp_min": 269.038,
                "temp_max": 269.038,
                "pressure": 1040.78,
                "sea_level": 1049.03,
                "grnd_level": 1040.78,
                "humidity": 92,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.16,
                "deg": 314.506
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2016-11-29 21:00:00"
        },
        {
            "dt": 1480464000,
            "main": {
                "temp": 267.935,
                "temp_min": 267.935,
                "temp_max": 267.935,
                "pressure": 1040.97,
                "sea_level": 1049.19,
                "grnd_level": 1040.97,
                "humidity": 84,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.16,
                "deg": 265.007
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2016-11-30 00:00:00"
        },
        {
            "dt": 1480474800,
            "main": {
                "temp": 267.529,
                "temp_min": 267.529,
                "temp_max": 267.529,
                "pressure": 1040.45,
                "sea_level": 1048.71,
                "grnd_level": 1040.45,
                "humidity": 83,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.41,
                "deg": 249.001
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2016-11-30 03:00:00"
        },
        {
            "dt": 1480485600,
            "main": {
                "temp": 268.291,
                "temp_min": 268.291,
                "temp_max": 268.291,
                "pressure": 1040.16,
                "sea_level": 1048.31,
                "grnd_level": 1040.16,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 1.86,
                "deg": 247.5
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2016-11-30 06:00:00"
        },
        {
            "dt": 1480496400,
            "main": {
                "temp": 271.468,
                "temp_min": 271.468,
                "temp_max": 271.468,
                "pressure": 1040.67,
                "sea_level": 1048.74,
                "grnd_level": 1040.67,
                "humidity": 89,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 76
            },
            "wind": {
                "speed": 1.52,
                "deg": 244.001
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2016-11-30 09:00:00"
        },
        {
            "dt": 1480507200,
            "main": {
                "temp": 277.749,
                "temp_min": 277.749,
                "temp_max": 277.749,
                "pressure": 1039.64,
                "sea_level": 1047.47,
                "grnd_level": 1039.64,
                "humidity": 84,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 36
            },
            "wind": {
                "speed": 2.96,
                "deg": 259.001
            },
            "rain": {
                "3h": 0.035
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2016-11-30 12:00:00"
        },
        {
            "dt": 1480518000,
            "main": {
                "temp": 278.723,
                "temp_min": 278.723,
                "temp_max": 278.723,
                "pressure": 1037.8,
                "sea_level": 1045.78,
                "grnd_level": 1037.8,
                "humidity": 80,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 36
            },
            "wind": {
                "speed": 3.52,
                "deg": 257.502
            },
            "rain": {
                "3h": 0.02
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2016-11-30 15:00:00"
        },
        {
            "dt": 1480528800,
            "main": {
                "temp": 276.815,
                "temp_min": 276.815,
                "temp_max": 276.815,
                "pressure": 1037.05,
                "sea_level": 1045,
                "grnd_level": 1037.05,
                "humidity": 94,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 4.26,
                "deg": 269
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2016-11-30 18:00:00"
        },
        {
            "dt": 1480539600,
            "main": {
                "temp": 275.644,
                "temp_min": 275.644,
                "temp_max": 275.644,
                "pressure": 1036.37,
                "sea_level": 1044.32,
                "grnd_level": 1036.37,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 20
            },
            "wind": {
                "speed": 4.19,
                "deg": 276
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2016-11-30 21:00:00"
        },
        {
            "dt": 1480550400,
            "main": {
                "temp": 275.144,
                "temp_min": 275.144,
                "temp_max": 275.144,
                "pressure": 1035.64,
                "sea_level": 1043.63,
                "grnd_level": 1035.64,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 8
            },
            "wind": {
                "speed": 4.26,
                "deg": 283.502
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2016-12-01 00:00:00"
        },
        {
            "dt": 1480561200,
            "main": {
                "temp": 275.794,
                "temp_min": 275.794,
                "temp_max": 275.794,
                "pressure": 1034.43,
                "sea_level": 1042.31,
                "grnd_level": 1034.43,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 44
            },
            "wind": {
                "speed": 4.39,
                "deg": 285.009
            },
            "rain": {
                "3h": 0.03
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2016-12-01 03:00:00"
        },
        {
            "dt": 1480572000,
            "main": {
                "temp": 277.14,
                "temp_min": 277.14,
                "temp_max": 277.14,
                "pressure": 1033.38,
                "sea_level": 1041.27,
                "grnd_level": 1033.38,
                "humidity": 100,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 88
            },
            "wind": {
                "speed": 4.5,
                "deg": 287.002
            },
            "rain": {
                "3h": 0.09
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2016-12-01 06:00:00"
        },
        {
            "dt": 1480582800,
            "main": {
                "temp": 278.536,
                "temp_min": 278.536,
                "temp_max": 278.536,
                "pressure": 1033.31,
                "sea_level": 1041.15,
                "grnd_level": 1033.31,
                "humidity": 97,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 88
            },
            "wind": {
                "speed": 4.61,
                "deg": 295.5
            },
            "rain": {
                "3h": 0.11
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2016-12-01 09:00:00"
        },
        {
            "dt": 1480593600,
            "main": {
                "temp": 280.453,
                "temp_min": 280.453,
                "temp_max": 280.453,
                "pressure": 1032.42,
                "sea_level": 1040.21,
                "grnd_level": 1032.42,
                "humidity": 90,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 80
            },
            "wind": {
                "speed": 4.75,
                "deg": 302.005
            },
            "rain": {
                "3h": 0.07
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2016-12-01 12:00:00"
        },
        {
            "dt": 1480604400,
            "main": {
                "temp": 280.987,
                "temp_min": 280.987,
                "temp_max": 280.987,
                "pressure": 1031.63,
                "sea_level": 1039.42,
                "grnd_level": 1031.63,
                "humidity": 87,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 4.3,
                "deg": 309.5
            },
            "rain": {
                "3h": 0.08
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2016-12-01 15:00:00"
        },
        {
            "dt": 1480615200,
            "main": {
                "temp": 280.537,
                "temp_min": 280.537,
                "temp_max": 280.537,
                "pressure": 1031.93,
                "sea_level": 1039.68,
                "grnd_level": 1031.93,
                "humidity": 90,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 3.57,
                "deg": 321.501
            },
            "rain": {
                "3h": 0.14
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2016-12-01 18:00:00"
        },
        {
            "dt": 1480626000,
            "main": {
                "temp": 279.603,
                "temp_min": 279.603,
                "temp_max": 279.603,
                "pressure": 1032.22,
                "sea_level": 1040.01,
                "grnd_level": 1032.22,
                "humidity": 95,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 88
            },
            "wind": {
                "speed": 2.81,
                "deg": 328
            },
            "rain": {
                "3h": 0.11
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2016-12-01 21:00:00"
        },
        {
            "dt": 1480636800,
            "main": {
                "temp": 278.622,
                "temp_min": 278.622,
                "temp_max": 278.622,
                "pressure": 1032.33,
                "sea_level": 1040.22,
                "grnd_level": 1032.33,
                "humidity": 97,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 88
            },
            "wind": {
                "speed": 2.51,
                "deg": 325
            },
            "rain": {
                "3h": 0.07
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2016-12-02 00:00:00"
        },
        {
            "dt": 1480647600,
            "main": {
                "temp": 278.219,
                "temp_min": 278.219,
                "temp_max": 278.219,
                "pressure": 1032.36,
                "sea_level": 1040.2,
                "grnd_level": 1032.36,
                "humidity": 94,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 88
            },
            "wind": {
                "speed": 2.36,
                "deg": 328
            },
            "rain": {
                "3h": 0.06
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2016-12-02 03:00:00"
        },
        {
            "dt": 1480658400,
            "main": {
                "temp": 277.553,
                "temp_min": 277.553,
                "temp_max": 277.553,
                "pressure": 1032.16,
                "sea_level": 1040.07,
                "grnd_level": 1032.16,
                "humidity": 94,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "clouds": {
                "all": 76
            },
            "wind": {
                "speed": 2.11,
                "deg": 326
            },
            "rain": {
                "3h": 0.04
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2016-12-02 06:00:00"
        },
        {
            "dt": 1480669200,
            "main": {
                "temp": 277.632,
                "temp_min": 277.632,
                "temp_max": 277.632,
                "pressure": 1032.73,
                "sea_level": 1040.67,
                "grnd_level": 1032.73,
                "humidity": 94,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 1.88,
                "deg": 327.001
            },
            "rain": {
                "3h": 0.06
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2016-12-02 09:00:00"
        },
        {
            "dt": 1480680000,
            "main": {
                "temp": 279.593,
                "temp_min": 279.593,
                "temp_max": 279.593,
                "pressure": 1032.88,
                "sea_level": 1040.66,
                "grnd_level": 1032.88,
                "humidity": 92,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 48
            },
            "wind": {
                "speed": 1.76,
                "deg": 314.002
            },
            "rain": {
                "3h": 0.03
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2016-12-02 12:00:00"
        },
        {
            "dt": 1480690800,
            "main": {
                "temp": 279.726,
                "temp_min": 279.726,
                "temp_max": 279.726,
                "pressure": 1032.37,
                "sea_level": 1040.13,
                "grnd_level": 1032.37,
                "humidity": 91,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 64
            },
            "wind": {
                "speed": 1.51,
                "deg": 320.501
            },
            "rain": {
                "3h": 0.01
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2016-12-02 15:00:00"
        }
    ]
};

module.exports = {
    getForecastResults: (q) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign({}, { data: apiExample }));
            }, delay);
        });
    }
};
