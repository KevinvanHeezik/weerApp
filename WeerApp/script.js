//Functie searchWeather voert de url inlcusief ingevoerde stad in
function searchWeather(searchTerm) {
    fetch('https://meteoserver.nl/api/liveweer.php?locatie=' + searchTerm + '&key=76bf6e987d').then(result => {
        return result.json();
    }).then(result => {
        init(result);
    })
}
//Functie init verwerkt alle data van de server
//De functie begint met het vergelijken van de waarde image in de array liveweer[0] van de server
//Hier is een switchcase gemaakt voor alle mogelijke weersomstandigheden, er wordt een passende achtergrond grond gekozen
function init(resultFromServer) {
        switch (resultFromServer.liveweer[0].image) {
        case 'bewolkt':
            document.body.style.backgroundImage = 'url("/Users/kevin/Documents/Technische Informatica HR/WeerApp/cloudy.jpeg")';
            break;
    }
    //Alle data wordt van de server naar de variabele van de HTML file geschreven
    let cityHeader = document.getElementById('cityHeader');
    let temperature = document.getElementById('temperature');
    let averageTemperature = document.getElementById('averageTemperature');
    let weatherDescriptionHeader = document.getElementById('weatherDescriptionHeader');
    let weatherExpectation = document.getElementById('weatherExpectation');
    
    cityHeader.innerHTML = resultFromServer.liveweer[0].plaats
    temperature.innerHTML = resultFromServer.liveweer[0].temp
    averageTemperature.innerHTML = resultFromServer.liveweer[0].gtemp
    weatherDescriptionHeader.innerHTML = resultFromServer.liveweer[0].samenv
    weatherExpectation.innerHTML = resultFromServer.liveweer[0].verw

    //Hier wordt de data geschreven naar de console(debuggen)
    console.log(resultFromServer.liveweer[0].plaats);
    console.log(resultFromServer.liveweer[0].temp);
    console.log(resultFromServer.liveweer[0].gtemp);
    console.log(resultFromServer.liveweer[0].samenv);
    console.log(resultFromServer.liveweer[0].verw);
    console.log(resultFromServer);

}
//Doormiddel van een EventListener die gekoppeld is aan de zoekknop (searchbtn) wordt zodra deze is aangklikt de waarde van de zoekblak uitgelezen
document.getElementById('searchBtn').addEventListener('click', () => {
    var searchTerm = document.getElementById('searchInput').value;
    if(searchTerm)
        searchWeather(searchTerm);
})