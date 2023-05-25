class Humano {
    constructor(n) {
        this.nombre = n;
    }
    saludar() {
        return `Hola, soy ${this.nombre}`;
    }
}

const human = new Humano('Tomás');
console.log(human.saludar());

class Empleado extends Humano {
    constructor(nombre, titulo) {
        super(nombre);
        this.titulo = titulo;
    }
    trabajar() {
        return `Hola, vengo a trabajar. Soy ${this.titulo}`;
    }
}

const employee = new Empleado('Yani', 'Desarrolladora web');
console.log(employee.trabajar());
console.log(employee.saludar());