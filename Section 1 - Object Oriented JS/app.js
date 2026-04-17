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