# 🌦️ Weather App

A simple weather application built using Node.js, Express, and the OpenWeatherMap API. This app allows users to check the current weather for any city and displays dynamic background colors based on the weather conditions.

## 🚀 Features

- Search for the current weather by city name 🌍
- Dynamic background color changes based on weather conditions 🎨
- Responsive design for mobile and desktop devices 📱💻
- Error handling for invalid city names ❌

## 💻 Technologies Used

- Node.js
- Express
- Axios
- OpenWeatherMap API
- HTML/CSS

## 🚀 Getting Started

### Prerequisites

- Node.js installed on your machine 🌐
- An API key from OpenWeatherMap (sign up [here](https://openweathermap.org/appid) to get your API key) 🔑

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/weather-app.git
2. Install dependencies:
   ```
   npm install
3. Create a .env file in the root directory and add your OpenWeatherMap API key:
   ```
   API_KEY=your_api_key_here
5. Start the server:
   ```
   node app.js
7. Open your browser and go to http://localhost:3000 to access the app! 🌐

## 🌈 How It Works
1. The app allows users to input a city name.
2. It fetches weather data from the OpenWeatherMap API based on the city name.
3. The main weather condition is used to set the background color of the app dynamically.
4. Displays the temperature and weather description for the selected city.

## 🎨 Dynamic Background Colors
The background color changes based on the following weather conditions:
* Clear: Yellow 🌞
* Rain: Blue 🌧️
* Clouds: Grey ☁️
* Snow: Light Blue ❄️
* Default: Light Grey 🌫️

## 📚 Contributing
Feel free to submit issues or pull requests. I welcome contributions! 🤝

## 🛠️ Built With
* Express.js - Web framework for Node.js
* Axios - Promise-based HTTP client for the browser and Node.js
* OpenWeatherMap API - API for fetching weather data
  
## 👤 Author
Your Name - pyPrarthan

## 📫 Contact
For any questions or feedback, feel free to reach out at christianprarthan07@gmail.com

