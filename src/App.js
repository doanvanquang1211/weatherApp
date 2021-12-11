import axios from 'axios'
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import WeatherApp from './components/WeatherApp';


function App() {

  const [weather, setweather] = useState({
    temp: '',
    city: '',
    country: '',
    main: ''
  })

  const search = async (inputValue) => {

    try {
      let result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=cbd5a7330bea881fde22c3d4429cff69`)
      console.log(result.data);
      setweather({
        temp: result.data.main.temp,
        city: result.data.name,
        country: result.data.sys.country,
        main: result.data.weather[0].main
      })

    } catch (error) {
      alert('Bạn nhập sai tên', error)
    }
  }
  return (
    <div className={(weather.main) ? ((weather.temp > 16) ? 'warm' : "app") : "body"}>
      <div className="App" >
        <Header search={search} />
        <WeatherApp temp={weather.temp} city={weather.city} country={weather.country} main={weather.main} weather={weather} />
      </div>
    </div >
  );
}

export default App;
