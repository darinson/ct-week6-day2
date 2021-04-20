//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco bell",
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: [{
        oberwise: "Chocolate",
        dunkin: "Vanilla",
        culvers: "All of them",
        mcDonalds: "Sham-rock-shake",
        cupids_candies: "Chocolate Malt"
    }]
}

console.log(typeof (person3['pizza']))

let listFood = function (obj) {
    console.log(`Here's a list of my favorite foods:`)
    let k = Object.keys(obj)
    for (let i = 0; i < k.length; i++) {
        if ((obj[k[i]]).constructor == Array) {
            console.log(`${k[i]}: ${JSON.stringify(obj[k[i]])}`)
        } else {
            console.log(`${k[i]}: ${obj[k[i]]}`)
        }
    }
}

listFood(person3)


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printInfo = () => {
        return (`${this.name} is a person and he/she is ${this.age} years old.`)
    }

    happybirthday = (n = 1) => {
        this.age += n
        console.log(`Happy birthday ${n} times! ${this.name} is now ${this.age} years old.`)
        return this.age
    }
}

let jordan = new Person('Jordan', 27)
console.log(jordan.printInfo())
console.log(jordan.happybirthday())
console.log(jordan.happybirthday(2))

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine 
    if it's length is greater than 10.
    If the length is greater than ten console log "Big word".
    If the length of the string is less than 10 console log "Small Number"
*/

function get_length(str) {
    return new Promise((resolve) => {
        resolve(str.length)
    })
}

async function check_length(str) {
    const thelength = await get_length(str);
    if (thelength > 10) {
        console.log('Big word')
    } else {
        console.log('Small word')
    }
    return thelength
}

check_length('short')
check_length('thisisalongwordhahahhahaha')

