// Getters and Setters are used as attributes from a Class but with logic applied

class Circle {

    static allowedCollors = new Set(["red", "green", "blue"])

    constructor(radius, color) {
        this._radius = radius;
        if (Circle.allowedCollors.has(color)) {
            this._color = color;
        } else {
            throw new Error("Color not allowed");
        }

    }

    get diameter() {
        return this._radius * 2;
    }

    get radius() {
        this._radius = radius;
    }

    set radius(value) {
        if (value < 0) {
            throw new Error("Radius cannot be negative")
        } else {
            this._radius = value;
        }
    }

    get color() {
        return this._color;
    }

    set color(newColor) {
        const allowedCollors = ["red", "green", "blue"];
        if (allowedCollors.has(newColor)) {
            this._color = newColor;
        } else {
            throw new Error("Color not allowed");
        }
    }
}


// Class fields 
// Public and private fields


class Cat {
    static numOfCats = 0;

    numLegs = 4; // Public class field

    hasTail = true; // Public class field

    constructor(name) {
        this._name = name;
        Cat.numOfCats += 1;
    }
}

class Circle {
    #radius; // Private field can not be access outside the class circle
    constructor(radius) {
        this.#radius = radius;
    }
}

class MyClass {
    #privateMethod() {
        console.log("PRIVATE METHOD CALLED")
    }

    publicMethod() {
        this.#privateMethod(); // private Method is being called inside class scope
    }
}

const myClass = new MyClass();
myClass.#privateMethod();

myClass.publicMethod(); // Console.log will be shown


// Static intialization block

class MyClass {

    static connection;
    static {
        if (process.env.NODE_ENV === 'production') {
            this.connection = this.loadProductionConnection();
        } else {
            this.connection = this.loadDevelopmentConnection();
        }
    }

    static loadProductionConnection(){};
    static loadDevelopmentConnection(){};
}