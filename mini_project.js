// a promise is an object in a javascript that handles the completion or failure of an asyncronous operation. the advantages of using promises are:- better code readability and execution,
// improved error handeling, avoid cumbersome use of nested callback function, built in methods for handeling asyncronous patterns, etc.


function fetchData(){ //  fetchData function is defined
    return new Promise((resolve)=>{ // promise object is created in which you pass a executor function as an argument
                                    // which in turn take one argument again as resolve
        setTimeout(() => { // used to simulate a delay
            const data = [ // array of objects is defined
                { id: 1, name: "dipesh", age: 25 },
                { id: 2, name: "santosh", age: 30 },
                { id: 3, name: "sudan", age: 35 }
            ];
   
            resolve(data);// resolve function is called with an object containing data array
            
        }, 2000);
        
    })
}
fetchData().then((data) => {//fetchData function is called which returns a promise. .then handles the resolve value of the promise
    console.log(data)

}).catch((err) => {
    console.log(err)
})

// closure is the combination of lexical environment and function. it should consists of at least one function and lexical environment. 
// the example is in below.
function createCounter(){
    let count = 0; // this variable is enclosed
    
    
    function increment(){ // this is a closure. the count variable can access the outer function variable. 
        count ++ 
    }

    function getCount(){
        return count
    }

    return{
        increment: increment, 
        getCount: getCount
    }
    
}

const counter = createCounter();  
console.log(counter.getCount())
counter.increment()
console.log(counter.getCount())


// callback function is a function which is passed to another function with the expectation that it will be invoked at a later time.
// we use callback function for error handeling, asyncronous programming, event handeling, flexibility, reusability, etc.

function processData(arr , callback){
    let processed_array = []
    
    for ( let i = 0 ; i <= arr.length -1 ; i ++){
        processed_array.push(callback(arr[i])) // call the callback function with current number as argument and return the value to process data
    }

    return processed_array;
}


function square_array(num){
    num = num * num;
    return num;
}
const array = [1,2,3,4,5]
console.log(processData(array, square_array));


// async and await are features introduced in ECMAScript 2017 (ES8) that make working with asynchronous JavaScript code easier and more readable. They provide a cleaner syntax for writing and handling asynchronous operations, such as fetching data from a server, reading files, or waiting for user input.
// async and await simplify asynchronous JavaScript by resembling synchronous code, enabling sequential execution, error handling, and readability, thus preventing callback hell and easing debugging.
// ES6 (ECMAScript 2015) is a specific version of the ECMAScript specification, introducing significant updates to JavaScript, including arrow functions, classes, let/const variables, and more. JavaScript refers to the programming language itself, encompassing all ECMAScript versions and additional features implemented in web browsers, Node.js, and other environments.
// ES6 introduced arrow functions, classes, block-scoped variables (let/const), template literals, spread/rest operators, destructuring, promises, modules, iterators, maps, sets, symbols, and more to JavaScript.
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const users = [
                { id: 1, name: "dipesh", age: 25 },
                { id: 2, name: "sudan", age: 30 },
                { id: 3, name: "santosh", age: 35 },
            ];

            resolve( users ); // Resolve with users and current time
        }, 2000);
    });
}

async function fetchDataAsync() {
        const result = await fetchData();
        console.log("Fetched data:", result);

        

}

// Using the async/await version of fetchData
console.log(fetchDataAsync());

//filter
function filterNumbers(array) {
    return array.filter(num => num >= 10);
}
console.log(filterNumbers([1,2,3,4,5,10,50,60]))

//map
function doubleNumbers(array) {
    return array.map(num => num * 2);
}
console.log(doubleNumbers([1,2,3,4,5]))

// find
function findNumberGreaterThan15(array) {
    return array.find(num => num > 15);
}
console.log(findNumberGreaterThan15([13,14,15,16,17,18]))

// reduce
function sumNumbers(array) {
    return array.reduce((total, num) => total + num, 0);
}
console.log(sumNumbers([2,4,5,6,7,8,9]))

// array to an object
function arrayToObj(usersArray) {
    const result = {};
    for (const user of usersArray) {
        result[user.id] = user;
    }
    return result;
}
const array1 = [
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", age: 35 },
    { id: 3, name: "Charlie", age: 40 }
];
console.log(arrayToObj(array))


// return details
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    describe() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}


const person1 = new Person("dipesh", 20);
console.log(person1.describe()); 

// inheritance

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age); // Call the parent class constructor
        this.grade = grade;
    }

    study() {
        return `${this.name} is studying.`;
    }
}


const student1 = new Student("dipesh", 20, "A");
console.log(student1.describe()); 
console.log(student1.study()); 

// failed to fetch data
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (Math.random() < 0.5) {
                reject("Failed to fetch data");
            } else {
                const users = [
                    { id: 1, name: "dipesh", age: 25 },
                    { id: 2, name: "santosh", age: 30 },
                    { id: 3, name: "sudan", age: 35 },
                ];
                resolve(users);
            }
        }, 2000);
    });
}

fetchData()
    .then((result) => {
        console.log("Fetched data:", result);
    })
    .catch((error) => {
        console.error("Error:", error);
    });


// try and catch
async function fetchData() {
    try {
        return new Promise((resolve) => {
            setTimeout(() => {
                const users = [
                    { id: 1, name: "dipesh", age: 25 },
                    { id: 2, name: "sudan", age: 30 },
                    { id: 3, name: "santosh", age: 35 },
                ];

                resolve({ users });
            }, 2000);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; 
    }
}

async function fetchDataAsync() {
    try {
        const result = await fetchData();
        console.log("Fetched data:", result.users);
        return result;
    } catch (error) {
        console.error("Error:", error);
     
    }
}


fetchDataAsync();

// hobbies

function getAllUniqueHobbies(users) {
   
    const allHobbies = users.reduce((acc, user) => {
        
        return acc.concat(user.hobbies);
    }, []);

    const uniqueHobbies = [...new Set(allHobbies)];
    return uniqueHobbies;
}


const users = [
    { name: "dipesh", hobbies: ["reading", "painting"] },
    { name: "santosh", hobbies: ["gardening", "painting", "cooking"] },
    { name: "sudan", hobbies: ["reading", "travelling"] }
];


const uniqueHobbies = getAllUniqueHobbies(users);
console.log(uniqueHobbies); 

