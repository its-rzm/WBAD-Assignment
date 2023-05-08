// for loop
for (let i = 0; i <= 10; i++) {
    if (i % 2 == 0) {
        document.getElementById("even1").innerHTML += "even num = " + i + '</br>';
    }
}

//for in
const car = {carbrand:"honda", carname:"jazz", cartype:"S type"}
for (const key in car) {
    if (Object.hasOwnProperty.call(car, key)) {
        const element = car[key] + " ";
        document.getElementById("even2").innerHTML += element ;
    }
}

//for of
const moto = ["yamaha", "honda", "Suzuki"];
for (const iterator of moto) {
    document.getElementById("even3").innerHTML += iterator + " ";
}

// while loop
let w = 0;
while (w <= 10) {
    if (w % 2 == 0) {
        document.getElementById("even4").innerHTML += "even num = " + w + '</br>';
    }
    w++
}

// do while
let y = 0;
do {
    if (y % 2 == 0) {
        document.getElementById("even5").innerHTML += "even num = " + y + '</br>';
    }
    y++
} while (y <= 10);