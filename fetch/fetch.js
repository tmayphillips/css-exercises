let url ='https://handlers.education.launchcode.org/static/planets.json'

let data = []
i = 0

async function getDataFromApi(){
    const response = await fetch(url);
    data = await response.json();
    console.log(data)
}

addEventListener('click', event => {
    const destination = document.getElementById("destination");
    destination.innerHTML = `
        <h2>Planet: ${data[i].name}</h2>
        <h3>Diameter: ${data[i].diameter}</h3>
        <h3>Star: ${data[i].star}</h3>
        <h3>Distance: ${data[i].distance}</h3>
        <h3>Moons: ${data[i].moons}</h3>
        <img src = ${data[i].image} />
    `;
    if (i === data.length - 1) {
        i = 0
    } else {
        i++
    }
    
  });

getDataFromApi()