// 5.- Nuevos jugadores

class Persona {
    nombre;
    apellido;
    edad;
    constructor(nombre, apellido, edad) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
    getDetalles() {
        console.log("nombre:" + this.nombre + " apellido: " + this.apellido + " edad: " + this.edad)
    }
}

class Jugador extends Persona {
    posicion;
    constructor(nombre, apellido, edad, posicion) {
        super(nombre, apellido, edad)
        this.posicion = posicion
    }
    getDetalles() {
        console.log(super.getDetalles() + " posicion " + this.posicion)
    }
}

class Entrenador extends Persona {
    a�osExperiencia;
    idFederaci�n;
    constructor(nombre, apellido, edad, a�osExperiencia, idFederaci�n) {
        super(nombre, apellido, edad)
        this.a�osExperiencia = a�osExperiencia
        this.idFederaci�n = idFederaci�n
        if (this.idFederaci�n == undefined) {
            this.idFederaci�n = Math.floor((Math.random() * (99999 + 1 - 1000)) + 1000);
        }

    }
    getDetalles() {
        console.log(super.getDetalles() + " a�os de experiencia " + this.a�osExperiencia + " id de federaion " + this.idFederaci�n)
    }
}

class Equipo {
    posicion;
    a�osExperiencia;
    idFederaci�n;
    director
    jugadoresArray = []
    constructor(director, jugadoresArray) {
        this.director = director
        this.jugadoresArray = jugadoresArray
    }
    getDetalles() {
        console.log("EQUIPO")
        console.log("ENTRENADOR")
        this.director.getDetalles()
        console.log("JUGADORES")
        this.jugadoresArray.forEach(element => {
            element.getDetalles()
        });
    }
}
let jugador1 = new Jugador("Carlos", "PADILLA", 28, "PORTERO")
let jugador2 = new Jugador("CAMILO", "PEREZ", 19, "DEFENSA")
let jugador3 = new Jugador("SANTIAAGO", "PERALTA", 22, "MEDIO")
let jugador4 = new Jugador("Antonio", "ALVAREZ", 18, "DELANTERO")
let jugadores = [jugador1, jugador2, jugador3, jugador4]
let entrenador = new Entrenador("ALFONSO", "PEREZ", 40, 5)
let equipo = new Equipo(entrenador, jugadores)
equipo.getDetalles()