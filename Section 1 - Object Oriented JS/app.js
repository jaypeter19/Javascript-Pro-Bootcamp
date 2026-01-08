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
    getArea() {
        return (this.a + this.b) / 2;
    }

    getHypotenuse() {
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    }
}