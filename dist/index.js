"use strict";
// class User {
//     email: string
//     name: string
//     private code: "1234"  //private: not accessible. it is accessible INSIDE the class. in JS: # instead of private
//     constructor(email: string, name: string) {
//         this.email = email, //refers to line nr 2
//         this.name = name
//         this.code = "1234"
//     }
// }
//how this is often written:
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        // private _courseCount = 1
        this._courseCount = 1; //using protected instead of private will let you access the variable in an extended class as well
    }
    //getters
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get CourseCount() {
        return this._courseCount;
    }
    //setters
    //can never be set to a type! so:
    set CourseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Coursecount should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const karin = new User("karin@karin.com", "karin");
