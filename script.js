// PRAKTIKA SU JS KLASĖMIS

// 1 UŽDUOTIS

// Naudojant ES5 sintakse sukurkite objekto Filmas (Movie) objekto konstruktoriu, kuris turės šias savybes: name, year, director, budget, income ir pridėkite prototype metodus:
// * getIntroduction(), kuris grąžins filmo pilną pavadinimą (su name, year, director);
// * getProfit(), kuris grąžins sumą, kurią uždirbo (pelną) filmas.


function Movie(name, year, director, budget, income){
    this.name = name
    this.year = year
    this.director = director
    this.budget = budget
    this.income = income
}

Movie.prototype.getIntroduction = function(){
    console.log(this.name, this.year, this.director)
}

Movie.prototype.getProfit = function(){
    console.log(this.income - this.budget)
}

const movie1 = new Movie('"Shrek - 3"', 2003, "Sherakas Šrekauskas", 50000, 125000)

movie1.getIntroduction()
movie1.getProfit()


// 2.1 UŽDUOTIS

// Naudojant ES6 klases sukurkite automobilių objektų kūrimo konstruktorių (Car), kuris turės šias savybes: marke, model, year
// ir metodus:

// * getIntroduction(), kuris grąžins pilną pavadinimą (su marke ir model).
// * getAge(), kuris gražins “10 metų arba naujesnis”, jei automobilio amžius yra 10 metų arba naujesnis arba “11 metų arba senesnis”, jei automobilio amžius yra 11 metų arba senesnis (šio metodo logikai naudokite ternary operatorių ir Date() metodą).


function Car(marke, model, year){
    this.marke = marke
    this.model = model
    this.year = year



    this.getIntroduction = function(){
    console.log(this.marke, this.model)
    },

    this.getAge = function() {

        const currentYear = new Date().getFullYear()
    
        if((currentYear - this.year) <= 10){
            console.log("10 metų arba naujesnis")
        } else {            
            console.log("11 metų arba senesnis")
        }
    }
}

const car1 = new Car("BMW", "F30", 2016)
const car2 = new Car("Renault", "Clio", 2001)

car1.getIntroduction()
car2.getIntroduction()

car1.getAge()
car2.getAge()


// 2.2 UŽDUOTIS

// Naudojant ES6 subklases sukurkite motociklų objektų kūrimo konstruktorių (Motorcycle), kuris turės visas automobilių objektų kūrimo konstruktorių (Car) savybes ir metodus ir papildomai šią savybę: wheels (kurio vertė bus number) ir metodą. Ir metodą: 

// * getWheelsNumber(), kuris grąžins “motociklas turi tris ratus”, jei wheels vertė bus 3 ir “motociklas turi du ratus”, jei wheels vertė bus 2 (šio metodo logikai naudokite else if operatorių arba switch).

// Testavimui, sukurkite du objektus, kurie turės nurodytas savybes ir metodus.

function Motorcycle(marke, model, year, wheels){
    this.marke = marke
    this.model = model
    this.year = year
    this.wheels = wheels

    this.getWheelsnumber = function() {

        if(this.wheels != 3){
            console.log("motociklas turi tris ratus")
        } else {            
            console.log("motociklas turi du ratus")
        }
    }
}
const moto1 = new Motorcycle("BMW", "Motociklas", 2003, 3)
const moto2 = new Motorcycle("Renault", "Motociklas", 2018, 2)

moto1.getWheelsnumber()
moto2.getWheelsnumber()