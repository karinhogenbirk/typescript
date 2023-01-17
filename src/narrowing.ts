function printAll(strs: string | string[] | null) {
//below may seem right, but what is not covered is if the string is empty ("")
    if (strs) {
      if (typeof strs === "object") {
        for (const s of strs) {
          console.log(s);
        }
      } else if (typeof strs === "string") {
        console.log(strs);
      }
    }
  }

  interface User {
    name: string,
    email:string
  }

  interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
  }

  //narrowing using the 'in' property:
  function isAdminAccount(account: User | Admin) {
    if ("isAdmin" in account) {
        return account.isAdmin
    }
  }

  //instanceof: is almost the same as typeof. 
  function logValue(x: Date | string) {
    if (x instanceof Date) {
      console.log(x.toUTCString());
    } else {
      console.log(x.toUpperCase());
    }
  }

  type Fish = {swim:() => void}
  type Bird = {fly:() => void}

//   function isFish(pet: Fish | Bird) {
//     return (pet as Fish).swim !== undefined
//   }

  function isFish(pet: Fish | Bird): pet is Fish { //notice "pet is Fish", this prevents returning a boolean which makes it clear in the function getFood if it's a fish or bird
    return (pet as Fish).swim !== undefined
  }

  function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet
        return "fish food"
    } else {
        pet 
        return "bird food"
    }
  }

  //discriminated unions:
  //using the exact kind instead of only typing 'string'
  interface Circle {
    kind: "circle",
    radius: number
  }

  interface Square {
    kind: "square",
    radius: number,
    side: number
  }

  interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number,
    side: number
  }

  type Shape = Circle | Square

  function getTrueShape(shape: Shape) {
    if(shape.kind="circle"){
        return Math.PI*shape.radius**2
    }
    //return shape.side * shape.side
  }

  function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI*shape.radius**2
            
            case "square":
                return shape.side * shape.side

            default:
                const _defaultForShape: never = shape   //the never type: represents a state that shouldn't exist
                return _defaultForShape

    }
  }
