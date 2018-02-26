function fetchForecast(zip) {
    const url = zipUrl(zip);
    console.log(url);
    return fetch('http://web.sit.kmutt.ac.th/sanit/int493/contacts.php')
        .then(response => response.json())
        .then(responseJSON => {
            return {
                main: responseJSON.weather[0].main,
                description: responseJSON.weather[0].description,
                temp: responseJSON.main.temp
            };
        })
        .catch(error => {
            console.error(error);
        });
}

export default {
    fetchForecast: fetchForecast
};