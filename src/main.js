

// Create an OOP implementation by modelling a real-world scenario/problem, 
// while taking advantage of inheritance, 
// encapsulation, polymorphism and the other OOP concepts. Push this solution to GitHub. 

class Human {
    constructor(){
        this._status = 'alive';
        this._strength = 2;
        this._task = 'nothing';
    }
    
    get strength(){
        return this._strength;
    }
    set strength(value){
        this._strength += value;
    }
    get task(){
        return this._task
    }
    set task(message){
        this._task = message;
    }
    static noOfHuman(){
        // if i can create a private property, then this should help me monotor the no of himan
    }
    eat(food){
        console.log(`i just eat ${food}`)
        this._strength += 2
    }
    sleep(time){
        console.log(`i slept for ${time}`)
    }
}
class Male extends Human {
    // a man basically just have a name, age and tribe
    // all his action is still the same as that of the human
    constructor(name, age, tribe){
        super();
        this._name = name;
        this._age = age;
        this._tribe = tribe; 
        this._strength = 5;
    }
    get name(){
        return this._name
    }
    get age(){
        return this._age;
    }
    get tribe(){
        return this._tribe;
    }
}
module.exports.Warrior = class extends Male {
    constructor(name, age, tribe, post){
        super(name, age, tribe);
        this._post = post;
        this._strength = 10;
        this._noOfKilled = 0;
    }
    get post(){
        return this._post;
    }
    set post(post){
        this._post = post;
    }
    get noOfKilled(){
        return this._noOfKilled;
    }
    set noOfKilled(value){
        this._noOfKilled += value;
    }
    get status(){
        if(this._strength >= 10){
            return 'Healthy and strong';
        } else if(this._strength >= 1){
            return 'Weak and injured';
        } else if(this._strength <= 0) { 
            return 'dead';
        }
    }

    // Behaviours:
    kill(enemy) {
        enemy.strength = -enemy.strength;
        enemy.task = 'To be with my ancestors';
        this.noOfKilled++;
    }
    fight(enemy) {
        this._strength -= 1;
        enemy.strength -= 1;
    }
    giveOrder(message, surbodinate){
        surbodinate.task = message;
    }
    train(){
        this._strength -= 1;
    }
    report(){
        return `I am ${this._post} ${this._name} and i am from tribe ${this._tribe}. \n I have a task: ${this._task}.`
    }
    dismiss(surbodinate) {
        surbodinate.post = 'dismissed';
    }
}

// let warriorA = new Warrior('Ogunniyi', 20, 'gaya', 'general');
// let warriorB = new Warrior('Tunmise', 17, 'zuli', 'commander');
// warriorA.kill(warriorB);
// console.log(warriorB.status);


