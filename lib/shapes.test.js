const {Triangle, Circle, Square} = require ("./shapes");

describe("circle", () => {

    it("should return a blue circle with orange text that reads MFW", () => {
        const testShape = new Circle("MFW", "orange", "blue");
        expect(testShape.render()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="110" r="90" fill="blue"/>
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="orange"> MFW </text>
        </svg> 
        `);
    })

});

describe("triangle", () => {

    it("should return a green triangle with yellow text that reads DAN", () => {
        const testShape = new Triangle("DAN", "yellow", "green");
        expect(testShape.render()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150, 18 244, 182 56, 182" fill="green"/>
            <text x="150" y="130" font-size="50" text-anchor="middle" fill="yellow"> DAN </text>
        </svg> 
        `);
    })

});

describe("square", () => {

    it("should return a green square with white text that reads SVG", () => {
        const testShape = new Square("SVG", "white", "green");
        expect(testShape.render()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="70" y="40" width="150" height="150" fill="green"/>
            <text x="145" y="130" font-size="60" text-anchor="middle" fill="white"> SVG </text>
        </svg> 
        `);
    })

});
