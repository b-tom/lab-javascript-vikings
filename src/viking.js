// Soldier
class Soldier {
    constructor(health,strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health,strength){
        super(health,strength);
        this.name = name;
    };
    receiveDamage(damage){
        this.health -= damage;        
        return this.health <= 0 ? `${this.name} has died in act of combat`:`${this.name} has received ${damage} points of damage`;
    };

    battleCry(){
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health,strength){
        super(health,strength);
    }
    receiveDamage(damage){
        this.health -= damage;        
        return this.health <= 0 ? `A Saxon has died in combat`:`A Saxon has received ${damage} points of damage`;
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking){
        this.vikingArmy.push(viking);
    };
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    };
    vikingAttack(){
        const randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        const vikingDamage = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)].strength;
        randomSaxon.receiveDamage(vikingDamage);
        for(let i=0 ; i<this.saxonArmy.length ; i++){
            if(this.saxonArmy[i].health <= 0){
                this.saxonArmy.splice(i-1);
            }
        };
        return ;
    };
    saxonAttack(){
        const randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        const saxonDamage = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].strength;
        for(let i=0 ; i<this.vikingArmy.length ; i++){
            if(this.vikingArmy[i].health <= 0){
                this.vikingArmy.splice(i-1);
            }
        };
        return randomViking.receiveDamage(saxonDamage);
    };
    showStatus(){
        if(this.vikingArmy.length === 0){
            return "Saxons have fought for their lives and survived another day...";
        }
        else if(this.saxonArmy.length === 0){
            return "Vikings have won the war of the century!";
        } 
        else{
            return "Vikings and Saxons are still in the thick of battle.";
        }
    };
}
