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

    // private _courseCount = 1
    protected _courseCount = 1 //using protected instead of private will let you access the variable in an extended class as well

    constructor(
        public email: string, 
        public name: string) {

    }

//getters
    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get CourseCount(): number {
        return this._courseCount
    }

    //setters
    //can never be set to a type! so:

    set CourseCount(courseNum){
        if(courseNum <= 1) {
            throw new Error("Coursecount should be more than 1")
        }
        this._courseCount = courseNum
    }
}

class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount() {
        this._courseCount = 4
    }
}

const karin = new User("karin@karin.com", "karin")
