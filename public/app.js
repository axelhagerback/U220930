const structure = new XMLHttpRequest();
structure.open('GET', 'structure.json');
structure.send();

const carList = new XMLHttpRequest();
carList.open('GET', 'cars.json');
carList.send();

structure.onload = () => {
const keys = JSON.parse(structure.responseText);

for (var key in keys) {
    var header = document.createElement(key);
    header.innerHTML = (keys[key]);
    main.appendChild(header);
};
};

carList.onload = () => {
    const cars = JSON.parse(carList.responseText);
    var list = document.createElement('ul');
    listCars.appendChild(list);

    cars.Cars.forEach(car => {
        var listRow = document.createElement('li');
        listRow.innerHTML = (`${car.Brand} || ${car.Model} || ${car.Year}`)
        list.appendChild(listRow);
    });
};

loadCars = () => {
    listCars.hidden = false;
};