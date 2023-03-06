
const URL = "https://carssemester3.azurewebsites.net/api/cars"

document.getElementById("btn-get-cars").onclick = getAllCars
document.getElementById("btn-single-car").onclick = getCar
document.getElementById("sub-btn").onclick = newCar
document.getElementById("btn-find").onclick = getFullCar
document.getElementById("btn-edit").onclick = editCar



function getAllCars(evt) {
    fetch(URL)
        .then(response => response.json())
        .then(data => makeTable(data))
}

function getCar(evt) {
    const id = document.getElementById("text-for-id").value
    fetch(URL+"/"+id)
        .then(response => response.json())
        .then(data => {
            document.getElementById("table-body-car").innerHTML = `<tr><td>${data.id}</td><td>${data.brand}</td><td>${data.pricePrDay}</td></tr>`
        })
}

function getFullCar(evt) {
    const id = document.getElementById("text-for-id2").value
    fetch(URL+"/"+id)
        .then(response => response.json())
        .then(data => {
            document.getElementById("table-body-car2").innerHTML = `<tr><td>${data.id}</td><td>${data.brand}</td><td>${data.model}</td><td>${data.pricePrDay}</td><td>${data.bestDiscount}</td></tr>`
        })
}

function newCar() {
    const brand = document.getElementById("brand").value
    const model = document.getElementById("model").value
    const pricePrDay = document.getElementById("price-pr-day").value
    const bestDiscount = document.getElementById("best-discount").value
    const data = { "brand": brand, "model": model, "pricePrDay": pricePrDay, "bestDiscount": bestDiscount};
    console.log(data)

    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function editCar() {
    const id = document.getElementById("text-for-id2").value
    const newBrand = document.getElementById("new-brand").value
    const newModel = document.getElementById("new-model").value
    const newPrice = document.getElementById("new-price").value
    const newDiscount = document.getElementById("new-discount").value
    const data = { "brand": newBrand, "model": newModel, "pricePrDay": newPrice, "bestDiscount": newDiscount};

    fetch(URL+"/"+id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}


function makeTable(cars) {
    const tableRows = cars.map(car =>
        `<tr>
        <td>${car.id}</td>
        <td>${car.brand}</td>
        <td>${car.pricePrDay}</td>
    </tr>`)
    const tableRowsAsString = tableRows
    document.getElementById("table-body-cars").innerHTML = tableRowsAsString
}
