function greet(name) {
    return "hola " + name ;
}

let message = greet ("nelusin bombin");
console.log(message)

document.writeln("<h3>" + message + "<h3>");

const timestamp = Date.now()

document.writeln("<p>" + " el timestamp es: "+ timestamp + "</p>")