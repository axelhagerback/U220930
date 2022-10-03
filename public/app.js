const structure = new XMLHttpRequest();
structure.open('GET', 'structure.json');
structure.send();


const duck = new XMLHttpRequest();
duck.open('GET', 'cars.json');
duck.send();

structure.onload = () => {

const keys = JSON.parse(structure.responseText);

for (var key in keys) {
    console.log(key);
    
    var header = document.createElement(key);

    header.innerHTML = (keys[key]);

    main.appendChild(header);
};

/*
Make into a forEach later

keys.forEach(key => {
    var header = document.createElement(key);

    header.innerHTML = (keys[key]);

    main.appendChild(header);
});*/

};

duck.onload = () => {
    const cars = JSON.parse(duck.responseText);

    var list = document.createElement('ul');
    carList.appendChild(list);

    cars.Cars.forEach(car => {
        console.log(car);
        var listRow = document.createElement('li');

        listRow.innerHTML = (`${car.Brand} || ${car.Model} || ${car.Year}`)

        list.appendChild(listRow);
    });


};

loadCars = () => {
    carList.hidden = false;
}