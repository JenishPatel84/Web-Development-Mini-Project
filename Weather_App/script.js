//http://api.weatherapi.com/v1/current.json?key=4726c7a0eef54d058f7101029261106&q=Patan&aqi=no

const temperatureField = document.querySelector(".temp")
const locationField = document.querySelector(".time_location p")
const dateandTime = document.querySelector(".time_location span")
const conditionFiled = document.querySelector(".condition p")
const searchField = document.querySelector(".search_area")
const form = document.querySelector("form")


form.addEventListener("submit", searchForLocation);

let targetlocation = 'Patan'

const fetchResults = async (targetlocation) =>{
    let url = `http://api.weatherapi.com/v1/current.json?key=4726c7a0eef54d058f7101029261106&q=${targetlocation}&aqi=no`

    const res = await fetch(url)
    const data =  await res.json()

    console.log(data)

    let locationName = data.location.name
    let time = data.location.localtime
    let temp = data.current.temp_c
    let condition = data.current.condition.text

    console.log(locationName)

    updateData(temp,locationName, time, condition);
}

function updateData(temp, locationName,time, condition){

    let splitDate = time.split(' ')[0]
    let splitTime = time.split(' ')[1]

    let currentDay = getDayName(new Date(splitDate).getDay());

    temperatureField.innerText = temp;
    locationField.innerText = locationName;
    dateandTime.innerText = `${splitDate} ${currentDay} ${splitTime}` 
    conditionFiled.innerText = condition;

}

function searchForLocation(e){
    e.preventDefault();
    targetlocation = searchField.value
    fetchResults(targetlocation);
}

function getDayName(num){
    switch(num){
        case 0:
            return 'sunday'
        case 1:
            return 'monday'
        case 2:
            return 'Tuesday'
        case 3:
            return 'Wednesday'
        case 4:
            return 'Thurshday'
        case 5:
            return 'friday'
        case 6:
            return 'saturday'
    }
}
