import Weather from "./Weather.jsx"
import './App.css'
//import Name from "./assets/entity.jsx"



function App() {


  

  return (
    <div>
      
      <div className="app">
        <link rel="icon" href="./assets/sun-weather-svgrepo-com.svg" />
        <title>Weather App</title>
        <h1>Weather App <img className="weather-app-logo" src="./assets/sun-weather-svgrepo-com.svg" alt="Weather Icon" /> </h1>
        <Weather />
        
      </div>

      
    
    </div>

    

    
  )
}

export default App
