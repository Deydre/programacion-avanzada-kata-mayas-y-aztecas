// Construye las siguientes clases:

// Warrior:
// constructor(life, power): Establece el valor de las propiedades life y power
// attack: Devuelve el valor de power del guerrero
// defend(damage): resta el valor del parámetro recibido damage al valor de la propiedad life. Después, imprime el valor de la vida restante.

class Warrior {
    constructor(name, life, power) {
        this.name = name,
            this.life = life,
            this.power = power
    }

    attack() {
        return this.power;
    }

    defend(damage) {
        this.life -= damage;
        console.log(`${this.name} ha recibido ${damage} puntos de daño.
        💔 Vida restante:  ${this.life}
        🗡️ Poder restante: ${this.power}`);
    }
}

// Maya: extiende de la clase Warrior
// constructor: Aquí establecemos los valores para el maya, que no hay que olvidar que es un guerrero.
// drinkColaCao: Suma 10 al poder.
class Maya extends Warrior {
    constructor(name, life, power) {
        super(name, life, power)
    }
    drinkColaCao() {
        this.power += 10;
        console.log(`${this.name} se ha bebido un súper Cola Cao calentito y ha respuesto 10 de power. 
        ❤️ Vida restante:  ${this.life}
        🗡️ Poder restante: ${this.power}`);
    }
}

// Aztec: extiende de la clase Warrior
// constructor: Aquí establecemos los valores para el azteca, que no hay que olvidar que es un guerrero.
// drinkNesquik: Suma 10 a la vida.
class Azteca extends Warrior {
    constructor(name, life, power) {
        super(name, life, power)
    }
    drinkNesquik() {
        this.life += 10
        console.log(`${this.name} se ha bebido un súper Nesquik calentito y ha respuesto 10 de vida. 
        ❤️ Vida restante:  ${this.life}
        🗡️ Poder restante: ${this.power}`);
    }
}

let maya = new Maya("Mayacuyá", 200, 40);
let azteca = new Azteca("Aztecacao", 170, 80);

// Realiza la siguiente cadena de intercambio de golpes.

azteca.drinkNesquik(); // Azteca bebe nesquik
maya.drinkColaCao(); // Maya bebe Cola Cao


let mayaAttack = maya.attack(); // Maya ataca a azteca. 
console.log(`🗡️ ${maya.name} ataca a ${azteca.name} 🗡️`)
azteca.defend(mayaAttack); // Azteca defiende.

let aztecaAttack = azteca.attack(); // Azteca ataca a maya. 
console.log(`🗡️ ${azteca.name} ataca a ${maya.name} 🗡️`)
maya.defend(aztecaAttack); // Maya defiende.


