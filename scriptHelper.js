// Write your helper functions here!
require('isomorphic-fetch');





function validateInput(str) {
    if(str === "") {
        return 'Empty';
    } 
    if(isNaN(num)) {
        return 'Not a number';
    }
    if (isNaN(num) === false) {
        return 'Is a Number';
    }
   
}
function formSubmission(pilot, copilot, fuelLevel, cargoLevel) {
    if(validateInput(pilot.value) === 'Empty' || validateInput(copilot.value) === 'Empty' || validateInput(fuelLevel.value) === 'Empty' || validateInput(cargoLevel.value) === 'Empty') {
        alert('All fields must be filled out');
        return false;
    }
    if(validateInput(pilot.value) === 'Not a number' || validateInput(copilot.value) === 'Not a number' || validateInput(fuelLevel.value) === 'Not a number' || validateInput(cargoLevel.value) === 'Not a number') {
        alert('Make sure all fields are valid');
        return false;
    }
    if(fuelLevel.value < 10000 || cargoLevel.value > 10000) {
     return false;
    }
    return true;
 }

function updateNotReady() {
    document.getElementById("launchStatus").styke.color = "red";
    document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
}

function updateReady() {
    document.getElementById("launchStatus").style.color = "green";
    document.getElementById("launchStatus").innerHTML = "Shuttle ready for launch";
}

function updateRequirements(pilot, copilot, fuelLevel, cargoLevel) {
    document.getElementById("pilotStatus").innerHTML = `Pilot: ${pilot.value} is ready to launch`;
    document.getElementById("copilotStatus").innerHTML = `Copilot: ${copilot.value} is ready to launch`;

    if(Number(fuelLevel.value) < 10000) {
        document.getElementById("fuelStatus").innerHTML = `Fuel Level is low`;
        updateNotReady();
    }
    if(Number(cargoLevel.value) > 10000) {
        document.getElementById("cargoStatus").innerHTML = `Cargo Mass is too high`;
        updateNotReady();
    }
    document.getElementById("faultyItems").style.visibility = "visible";
}



function addDestinationInfo(planet) {
    // Here is the HTML formatting for our mission target div.
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `<h2>Mission Destination</h2>
    <ol>
       <li>Name: ${planet.name}</li>
       <li>Diameter: ${planet.diameter}</li>
       <li>Star: ${planet.star}</li>
       <li>Distance from Earth: ${planet.distance}</li>
       <li>Number of Moons: ${planet.moons}</li>
    </ol>
    <img src="${planet.image}">`
 }

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
