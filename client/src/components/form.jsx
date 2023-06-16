import { useState } from "react";


const WeatherForm = () =>{

  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const validateInput = () => {
    const cityRegex = /^[a-zA-Z\s]+,\s*[a-zA-Z\s]+$/;
    const isValidCity = cityRegex.test(city.trim());
    // console.log(city, "city");
    // console.log(isValidCity, "Is valid city");
    
    return isValidCity;
  }



  const handleSubmit = (ev) => {
    ev.preventDefault();
    const isValid = validateInput();
    if(isValid){
      console.log(city);
      setError("");
      setCity("");
    } else{
      setError("Please enter a city with the format City, State");
    }
  }


    return (
        <div className="weather">
        <h1 className="App-header">Techtonica Weather Forecast App</h1>
        <form onSubmit={handleSubmit}>
          <input
            id="city-name"
            type="text"
            placeholder="Please enter City, State  "
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <input type="submit" value="Submit" />
        </form>
        <div>
        {!error ? (null) : (<p data-testid="error-msg" >{error}</p>)}
        </div>
      </div>
    )
}

export default WeatherForm;