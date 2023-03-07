// Inventors & People
const inventors = [
    {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
    {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
    {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
    {first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
    {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
    {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
    {first: 'Max', last: 'Planck', year: 1858, passed: 1947},
    {first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979},
    {first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852},
    {first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905},
    {first: 'Lise', last: 'Meitner', year: 1878, passed: 1968},
    {first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909}
];


let res;
// 1. Filter the list of inventors for those who were born in the 1500’s.
res = inventors.filter(inventor => inventor.year < 1600 && inventor.year >= 1500)
console.log('1', res)

// 2. Give us an array of the inventor first and last names.
res = inventors.map(inventor => `${inventor.first} ${inventor.last}`)
console.log('2', res)

// 3. Sort the inventors by birthday, oldest to youngest.
res = inventors.sort((inventor1, inventor2) => inventor1.year - inventor2.year)
console.log('3', res)

// 4. How many years did all the inventors live? Use the reduce method.
res = inventors.reduce((acc, inventor) => acc + (inventor.passed - inventor.year), 0)
console.log('4', res)

// 5. Sort the inventors by years lived
res = inventors.sort((inventor1, inventor2) => (inventor1.passed - inventor1.year) - (inventor2.passed - inventor2.year))
console.log('5', res)

// 6. Sort the inventors alphabetically by last name.
res = inventors.sort((inventor1, inventor2) => inventor1.last > inventor2.last ? 1 : -1)
console.log('6', res)

/*

//   Object.keys

*/

objectKeys = obj => {
    let keysArray = [];
    for (let keys in obj) {
        keysArray.push(keys);
    }
    return keysArray;
};

// Object.keys(obj); // ['2', 'keyCode', 'Target']

/*

//   Object.Values

*/

objectValues = obj => {
    let valuesArray = [];
    for (keys in obj) {
        valuesArray.push(obj[keys]);
    }
    return valuesArray;
};

// Object.values(obj); // ['Program Paradigm', 'JS', 'Browser']
