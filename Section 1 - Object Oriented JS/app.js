// Plain Old Javascript Objects (POJO)

let myTri = {
    a: 3,
    b: 4,
    getArea: function () {
        return (this.a + this.b) / 2;
    },
    getHypotenuse: function () {
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    }
};

let myTri2 = {
    a: 5,
    b: 12,
    getArea: function () {
        return (this.a + this.b) / 2;
    },
    getHypotenuse: function () {
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    }
};

// OOP - Fundamentals


class Triangle {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    getArea() {
        return (this.a + this.b) / 2;
    }

    getHypotenuse() {
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    }

    // Methods can call other methods but MUST use the this keyword in order to reference the new object created
    describe() {
        return `The triangle with a side A of ${this.a} and side B of ${this.b} and with an area of ${this.getArea()} SAYS HI`
    }
}


// Inheritance Basics

// ShyTriangle is a Subclass of Triangle.
// Triangle is a Superclass.

class ShyTriangle extends Triangle {
    describe() {
        return '(runs and hides)';
    }
    beShy() {
        return 'I am Shy';
    }
}


class ColorTriangle extends Triangle {
    constructor(a, b, color) {
        super(a, b);
        this.color = color;
    }
}

class ColorMoodTriangle extends ColorTriangle {
    constructor(a, b, color, mood) {
        super(a, b, color);
        this.mood = mood;
    }
}

// Static Properties and Methods
// Commonly known as Class Attribute by other programming languages
// Static Methods commonly known as Class Method by other programming languages

class Cat {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }

    static species = "felis catus";

    static meow() {
        console.log("THIS IS: ", this) // reffers to the class itself
    }

    static registerStray() {
        const names = ["Muffin", "Biscuit", "Sleepy", "Dodo", "Princess Butterface"];

        const name = choice(names);
        return new Cat(name, "unknown");
    }
}


function choice(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return undefined;
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}