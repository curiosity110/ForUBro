/*
### Split the bill

Write a function to balance who has overpaid and should be compensated or who has paid less.

The function should take one parameter: an object which represent the members of the group and the amount spent by each.

The function should return an object with the same names, showing how much money the members should pay or receive.

*/

// es5
function splitTheBill(group) {
    let avg = Object.values(group).reduce(function (acc, val, index, values) {
        return acc + (val / values.length);
    }, 0);

    return Object.keys(group).reduce(function (acc, person) {
        acc[person] = Math.round((avg - group[person]));
        return acc;
    }, {});
}

const group = {
    Amy: 20,
    Guy: 15,
    Chris: 10
};

console.log(splitTheBill(group)); // => { Amy: -5, Guy: 0, Chris: 5 }
