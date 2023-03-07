// const apiKey = "880c43a219434e40b6d74505230603"
const getWeatherDetails = async () => {    
    try{
        let details = await fetch(`http://api.weatherapi.com/v1/current.json?key=880c43a219434e40b6d74505230603&q=Philippines`)
        let weatherData = await details.json()
    
        console.log(weatherData.location)
    }
    catch(err){
            // console.log(`${err}there's an error`)
            console.error(err)
            // console.log(err)
            // throw new Error('this is an error')
    }
}
console.log(getWeatherDetails());