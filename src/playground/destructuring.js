const person = {
    name: 'Andrew',
    age: 26,
    location: {
        city: 'London',
        temp: 92
    }
}

console.log(`this is person ${person.name} and ${person.age} in ${person.location.city}`)

const {name,age,location} = person;
const {city, temp} = person.location;
console.log(`this is person ${name} and ${age} in ${city}`)

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        //name: 'Stephen King'
    }
}

const {name: publisherName = "self-publish"} = book.publisher;

console.log(publisherName) //self-publish

//Array destructuring

const address = ['Juniper Street','Los Angele','1800AA']
const[,town,state,country='America']  = address;

console.log(`You are in ${town}, ${country}`)

const item = ['coffee(ice)', '$2.00','$2.50', '$2.75'];
const [itemName , , mediumprice] = item;

console.log(`This is ${itemName} cost ${mediumprice}`)