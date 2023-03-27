class Heroe{
    enemies = [];
    powers = [];

    constructor(realName, heroName){
        this.realName = realName || '';
        this.heroName = heroName || '';
    }

    set strenght(value){
        this.strg = value;
    }

    get strenght(){
        return this.strg;
    }

    addSuperPower(superPower){
        this.powers.push(superPower);
    }

    addEnemy(enemy){
        this.enemies.push(enemy);
    }

    sayMyName(){
        window.alert(this.realName);
    }
}