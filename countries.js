document.getElementById("svg2").onclick = getDetails

const URL =  "https://countries.plaul.dk/api/countries/"
function getDetails(evt){
    const target = evt.target
    const id = target.id

    fetch(URL+id)
        .then(response => response.json())
        .then(data=> {
            document.getElementById("name").innerText = data.name.common
            document.getElementById("un-member").innerText = data.unMember
            document.getElementById("currencies").innerText = data.currencies
            document.getElementById("capital").innerText = data.capital
            document.getElementById("borders").innerText = data.borders
            document.getElementById("flag").src = data.flag

        })
}