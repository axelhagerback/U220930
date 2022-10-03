const anka = new XMLHttpRequest();

anka.open('GET', 'structure.json');
anka.send();


const duck = new XMLHttpRequest();
duck.open('GET', 'cars.json');
duck.send();

anka.onload = () => {

const keys = JSON.parse(anka.responseText);

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

        var carsInfo = JSON.stringify(car); 
        console.log(carsInfo);


        list.appendChild(listRow);
    });


    /*for (var label in cars) {
        console.log(label);
        var listRow = document.createElement('li');
        listRow.innerHTML = (cars[label]);
        list.appendChild(listRow);
    };*/
};

loadCars = () => {
    carList.hidden = false;
}