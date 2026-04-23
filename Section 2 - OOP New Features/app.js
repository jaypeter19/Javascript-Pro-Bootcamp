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