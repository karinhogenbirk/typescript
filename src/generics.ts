const score: Array<number> = []
const names: Array<string> = []

//WRONG examples
function identityOne(val: boolean | number): boolean | number {
    return val
} 

function identityTwo(val: any):any {
    return val
}

//RIGHT example
function identityThree<Type>(val: Type): Type {
    return val
}

//difference: when you pass a number, automatically every 'Type' has to be number
//below has the same outcome. You can call Type what you want, as long as it matches the other two.

function identityFour<T>(val: T): T {
    return val
}

interface Bottle {
    brand: string,
    type: number
}

//you can implement this as a type:
identityFour<Bottle>({
    brand: "dopper", type: 123
})

function getSearchProducts<T> (products: T[]): T { //in this case, T should return an array of T 
    //do some database operations 
    const myIndex = 3
    return products[myIndex]
}

//how to convert this (generics in function) to an arrow function
const getMoreProductSearch = <T,>(products: T[]): T => { //the comma is often used to seperate it from other syntax (in combination with React f.e.)
    return products[3]
}

//you can also use 'extends' in generics:
function anotherFunction<T, U extends number>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

anotherFunction(1, 2)

interface Database {
    connection: string,
    username: string,
    password: string,
}

function anotherExample<T, U extends Database>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

anotherExample(1, {
    connection:"connected", username:"username", password:"wachtwoord"
})

interface Quiz {
    name: string,
    type: string
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class Syllable<T> {
    public cart:T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}