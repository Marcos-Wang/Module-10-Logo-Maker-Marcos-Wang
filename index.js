const inquirer = require('inquirer');
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shapes");

const questions = [
    {
        type: "input",
        message: "Enter up to  letters for your logo:",
        name: "title"

    }, {

        type: "input",
        message: "Enter text color by name or hexadecimal (include # for a hex code).",
        name: "color"

    }, {

        type: "list",
        message: "Select a shape for your logo:",
        choices: [

            "Circle",
            "Triangle",
            "Square"

        ],
        name: "shape"

    }, {

        type: "input",
        message: "select shape color by name or hexadecimal (include # for a hex code).",
        name: "shapeColor"

    }

]

const renderLogo = (myInput) => {
    switch (myInput.shape) {
        case "Circle":
            let circleLogo = new Circle(myInput.title, myInput.color, myInput.shapeColor);
            return circleLogo.render();

        case "Triangle":
            let triangleLogo = new Triangle(myInput.title, myInput.color, myInput.shapeColor);
            return triangleLogo.render();

        case "Square":
            let squareLogo = new Square(myInput.title, myInput.color, myInput.shapeColor);
            return squareLogo.render();
        default:
            console.error("error occurred while rendering logo.");

    }
}

const writeToFile = (myInput) => {

    const renderedLogo = renderLogo(myInput);
    fs.writeFile("logo.svg", renderedLogo, (err) => {
        err ? console.error(err) : console.log("Generated logo.svg");
    })

}

//List of color keywords according to w3.org/wiki/CSS/Properties/colo/keywords
const validKeywords = [

    'aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgrey', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'grey', 'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgrey', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'rebeccapurple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen'

];

const checkKeyword = (myColor) => {

    myColor.toLowerCase();
    return validKeywords.includes(myColor);

}

const checkHexCode = (myColor) => {

    //expression to validate a hex code through this strange testing variable expression
    const hexCodeRegex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})|[A-Fa-f0-9]{3}|[A-Fa-f0-9]{6}$/;

    return hexCodeRegex.test(color);

}

const init = () => {
    inquirer.prompt(questions)
    .then((myInput) => {

        //myInput.title.length doesn't seem to work
        const { title } = myInput;

        myInput.color.toLowerCase();
    
        if (title.length > 3 || title.length < 1){

            console.error("invalid text input.");
            return;

        }
        
        else if (!checkKeyword(myInput.color) && !checkHexCode(myInput.color)){
            console.error("invalid text color input.");
            return;

        }

        else if (!checkKeyword(myInput.shapeColor) && !checkHexCode(myInput.shapeColor)){

            console.error("invalid sheape color input.");
            return;

        } 
        
        else {

          writeToFile(myInput); //success

        }



    });
}

init();