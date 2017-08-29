const assert =  require('chai').assert;
const myApp = require('../build/main.bundle.js');

describe('Warrior Object Test', function(){
    describe('Testing Properties', function(){
        it('should return Tunmise for name', function(){
            assert.equal(new myApp.Warrior('Tunmise', 17, 'zuli', 'commander').name, 'Tunmise');
        })
        it('should return 18 for age', function(){
            assert.equal(new myApp.Warrior('Tunmise', 17, 'zuli', 'commander').age, 18);
        })
        it('should return zuli for tribe', function(){
            assert.equal(new myApp.Warrior('Tunmise', 17, 'zuli', 'commander').tribe, 'zuli');
        })
        it('should return commander for post', function(){
            assert.equal(new myApp.Warrior('Tunmise', 17, 'zuli', 'commander').post, 'commander');
        })
        it('should return alive for status', function(){
            assert.equal(new myApp.Warrior('Tunmise', 17, 'zuli', 'commander').status, 'alive');
        })
        it('should return 10 for strength', function(){
            assert.equal(new myApp.Warrior('Tunmise', 17, 'zuli', 'commander').strength, 10);
        })
        it('should return nothing for task', function(){
            assert.equal(new myApp.Warrior('Tunmise', 17, 'zuli', 'commander').task, 'nothing');
        })
        it('should return 0 for noOfKilled', function(){
            assert.equal(new myApp.Warrior('Tunmise', 17, 'zuli', 'commander').noOfKilled, 0);
        })
        // i can still inpout other properties to check for here
    });
    describe('Testing behaviours', function(){
        it('should return 9 for strength', function(){
            assert.equal(
                function(){
                    let warriorA = new Warrio('Ogunniyi', 20, 'gaya', 'general');
                    warriorA.train();
                    return warriorA.strength;
                }, 9);
        })
        it('should return dead for status', function(){
            assert.equal(function(){
                let warriorA = new myApp.Warrio('Ogunniyi', 20, 'gaya', 'general');
                let warriorB = new myApp.Warrior('Tunmise', 17, 'zuli', 'commander');
                warriorA.kill(warriorB);
                return warriorB.status;
            }, 'dead');
        });
        it('should return 12 for strength', function(){
            assert.equal(function(){
                let warriorA = new myApp.Warrior('Ogunniyi', 20, 'gaya', 'general');
                warriorA.eat(); 
                return warriorA.strength; 
            }, 12);
        })
        it('should return a task for task', function(){
            assert.equal(function(){
                let warriorA = new myApp.Warrior('Ogunniyi', 20, 'gaya', 'general');
                let warriorB = new myApp.Warrior('Tunmise', 17, 'zuli', 'commander');
                warriorA.giveOrder(warriorB, 'kill the emnemy');
                return warriorB.task;
            }, 'kill the enemy');
        })
        it('should return dismissed for post', function(){
            assert.equal(function(){
                let warriorA = new myApp.Warrior('Ogunniyi', 20, 'gaya', 'general');
                let warriorB = new myApp.Warrior('Tunmise', 17, 'zuli', 'commander');
                warriorA.dismiss(warriorB);
                return warriorB.status;
            }, 'dismissed');
        })
        it('should return a message for report', function(){
            assert.equal(function(){
                let warriorA = new myApp.Warrior('Ogunniyi', 20, 'gaya', 'general');
                let warriorB = new myApp.Warrior('Tunmise', 17, 'zuli', 'commander');
                warriorA.giveOrder(warriorB, 'kill the emnemy');
                return warriorB.report;
            }, 'I am commander Tunmise and i am from tribe zuli. \n I have a task: kill the enemy.');
        })
        // i can still put other test here, for example, checking the dynamically created properties
    })

})