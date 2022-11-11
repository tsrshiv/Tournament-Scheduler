// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("form").addEventListener("submit", myFun)

var masaiFormArr = JSON.parse(localStorage.getItem("schedule")) || []

function myFun(){
    event.preventDefault()

    var masaiObj = {
        matchNumber : masaiForm.matchNum.value,
        teamA : masaiForm.teamA.value,
        teamB : masaiForm.teamB.value,
        date : masaiForm.date.value,
        venue : masaiForm.venue.value
    }

    masaiFormArr.push(masaiObj)

    localStorage.setItem("schedule" , JSON.stringify(masaiFormArr))
    window.location.href = "matches.html"
}