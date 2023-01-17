"use strict";
class TakePhoto {
    constructor(cameraMode, filter) { }
}
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter); //a derived class that contains a constructor must include a super() call
    }
    getSepia() {
        console.log("Sepia added");
    }
}
// const kh = new Instagram("night mode", "no filter") 
