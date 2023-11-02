class Shape {

    constructor() {
        this.text = '';
        this.color = '';
        this.shapeColor = '';
    }

}

class Triangle extends Shape {

    constructor(text, color, shapeColor) {
        super();
        this.text = text;
        this.color = color;
        this.shapeColor = shapeColor;
    }
    render() {

        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>
            <text x="150" y="130" font-size="50" text-anchor="middle" fill="${this.color}"> ${this.text} </text>
        </svg> 
        `
    }

}

class Square extends Shape {

    constructor(text, color, shapeColor) {
        super();
        this.text = text;
        this.color = color;
        this.shapeColor = shapeColor;
    }
    render() {

        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="70" y="40" width="150" height="150" fill="${this.shapeColor}"/>
            <text x="145" y="130" font-size="60" text-anchor="middle" fill="${this.color}"> ${this.text} </text>
        </svg> 
        `
    }

}

class Circle extends Shape {

    constructor(text, color, shapeColor) {
        super();
        this.text = text;
        this.color = color;
        this.shapeColor = shapeColor;
    }
    render() {

        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="110" r="90" fill="${this.shapeColor}"/>
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}"> ${this.text} </text>
        </svg> 
        `
    }

}

module.exports = { Triangle, Circle, Square };
