"use strict";
const score = [];
const names = [];
//WRONG examples
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
//RIGHT example
function identityThree(val) {
    return val;
}
//difference: when you pass a number, automatically every 'Type' has to be number
//below has the same outcome. You can call Type what you want, as long as it matches the other two.
function identityFour(val) {
    return val;
}
//you can implement this as a type:
identityFour({
    brand: "dopper", type: 123
});
function getSearchProducts(products) {
    //do some database operations 
    const myIndex = 3;
    return products[myIndex];
}
//how to convert this (generics in function) to an arrow function
const getMoreProductSearch = (products) => {
    return products[3];
};
//you can also use 'extends' in generics:
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
anotherFunction(1, 2);
function anotherExample(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
anotherExample(1, {
    connection: "connected", username: "username", password: "wachtwoord"
});
class Syllable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
