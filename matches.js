// write js code here corresponding to matches.html

var masaiFormArr = JSON.parse(localStorage.getItem("schedule"))

console.log(masaiFormArr)

var favouritesArr = JSON.parse(localStorage.getItem("favourites")) || []

var filter = document.querySelector("#filterVenue")
filter.addEventListener("click", venueFun)

function venueFun(){
    var venue = filter.value
    console.log(venue)
}

displayData(masaiFormArr)

function displayData(data){

    data.forEach(function(elem){
        var row = document.createElement("tr")

        var td1 = document.createElement("td")
        td1.innerText = elem.matchNumber

        var td2 = document.createElement("td")
        td2.innerText = elem.teamA

        var td3 = document.createElement("td")
        td3.innerText = elem.teamB

        var td4 = document.createElement("td")
        td4.innerText = elem.date

        var td5 = document.createElement("td")
        td5.innerText = elem.venue

        var td6 = document.createElement("td")
        td6.innerText = "Add as Favourites"
        td6.style.color = "green"
        td6.style.cursor = "pointer"
        td6.addEventListener("click", function(){
            favourites(elem)
        })

        row.append(td1,td2,td3,td4,td5,td6)

        document.querySelector("tbody").append(row)
    });

    function favourites(elem){
        // console.log(elem)
        favouritesObj = {
            elem
        }
        favouritesArr.push(favouritesObj)

        localStorage.setItem("favourites", JSON.stringify(favouritesArr))
    }
}