// Polymorphism is that area has its own implementation in Circle, Square even though present in Shape

class Shape {
    area() {}
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return  Math.PI*Math.pow(this.radius, 2);
    }
}

class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }

    area() {
        return this.side * this.side
    }
}

let shapes = [new Circle(5), new Square(3)];
for(let shape of shapes) {
    console.log(shape.area());
}