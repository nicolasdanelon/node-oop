// paradigma estructurado   (C, Basic)
// paradigma funcional      (oCamel, Haskell)
// paradigma objetos, POO o OOP (java, C#, php, etc)

class Humano {
    saludar() {
        return "Hola, soy un humano";
    }
}

const human = new Humano();
console.log(human.saludar());

class Empleado extends Humano {
    trabajar() {
        return "hola, vengo a trabajar"
    }
}

const employee = new Empleado();
console.log(employee.trabajar());
console.log(employee.saludar());