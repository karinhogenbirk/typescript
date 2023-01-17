abstract class TakePhoto { //abstract classes can not be created into objects. This is only useful if you use extend class. abstract classes help to define the classes that are inheriting them
    constructor( 
        cameraMode: string,
        filter: string
    ) {}

    abstract getSepia(): void //abstract is used here to not give any definition to the method
}

class Instagram extends TakePhoto {
    constructor(
        cameraMode: string,
        filter: string,
        burst: number
    ) { 
        super(cameraMode, filter) //a derived class that contains a constructor must include a super() call
    }

    getSepia() {
        console.log("Sepia added")
    }
}

// const kh = new Instagram("night mode", "no filter") 

