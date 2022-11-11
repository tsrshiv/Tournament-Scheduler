// write js code here corresponding to favourites.html
var favouritesArr = JSON.parse(localStorage.getItem("favourites"))|| []

console.log(favouritesArr)

displayData(favouritesArr)

function displayData(data){

    data.forEach(function(elem, index){
        var row = document.createElement("tr")

        var td1 = document.createElement("td")
        td1.innerText = elem.elem.matchNumber

        var td2 = document.createElement("td")
        td2.innerText = elem.elem.teamA

        var td3 = document.createElement("td")
        td3.innerText = elem.elem.teamB

        var td4 = document.createElement("td")
        td4.innerText = elem.elem.date

        var td5 = document.createElement("td")
        td5.innerText = elem.elem.venue

        var td6 = document.createElement("td")
        td6.innerText = "Delete"
        td6.style.color = "red"
        td6.style.cursor = "pointer"
        td6.addEventListener("click", function(){
            deleteRow(elem, index)
        })

        row.append(td1,td2,td3,td4,td5,td6)

        document.querySelector("tbody").append(row)
    });
}

function deleteRow(elem,index){
    favouritesArr.splice(index, 1)
    console.log(favouritesArr)
    // event.target.parentNode.remove()
    localStorage.setItem("favourites", JSON.stringify(favouritesArr))
    window.location.reload()
}