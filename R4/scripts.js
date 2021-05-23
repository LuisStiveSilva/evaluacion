let key = "1f50a87d32361c66bed879cec29c094a"
let city = "New York"
let cityArray = ['buenos aires', 'la paz', 'brasilia', 'santiago de chile', 'bogota', 'quito', 'georgetown', 'asuncion','lima','paramaribo','montevideo','caracas']
let data
const tableBody = document.getElementById('table-body')

function getData(key, city) {
    fetch(`http://api.weatherstack.com/current?access_key=${key}&query=${city}`)
    .then(res => res.json())
    .then(res=>{
            tableBody.innerHTML+=`
                <tr>
                    <td class="fijo">${res.location.country}</td>
                    <td>${res.location.name}</td>
                    <td>${res.current.temperature} °C</td>
                    <td>${res.current.humidity} %</td>
                    <td>${res.current.wind_speed} km/h</td>
                    <td><img src="${res.current.weather_icons[0]}"></td>
                </tr>
            `
    })
    .catch(err => {
        console.error(err);
    });
}

const renderizar = (array) =>{
    for(let i=0; i<array.length;i++){
        getData(key,array[i])
    }
}

renderizar(cityArray)