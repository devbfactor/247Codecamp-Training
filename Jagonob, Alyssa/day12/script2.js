const getBreweryDetails = async () => {    
    try{
        let details = await fetch('https://api.openbrewerydb.org/breweries?by_state=california&by_id=10-barrel-brewing-co-san-diego&by_city=San Diego&by_name=10 Barrel Brewing Co')
        let breweryData = await details.json()
        console.log(breweryData)
    }
    catch(err){
            // console.log(`${err}there's an error`)
            console.log(err)
    }
}
console.log(getBreweryDetails());