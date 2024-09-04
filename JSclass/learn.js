// function Person(name,age){
//     this.name=name;
//     this.age=age;
//     // this.greet =function(){
//     //     console.log(` Hello ,my username is ${this.username} and my age is ${this.age}`)
//     // }

// }

// Person.prototype.greet = function(){
//     console.log(` Hello ,my username is ${this.username} and my age is ${this.age}`)
// }


// let person1= new Person("utkarsh","abc");
// let person2= new Person("kunal","xyz");
// console.log(person1);
// console.log(person2);


// let arr = [1,2,3];
// console.log(arr)

// Classes


// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;

//     }
//     greet(){
//         console.log(` Hello ,my username is ${this.username} and my age is ${this.age}`)

//     }
// }

// let person1= new Person("utkarsh","abc");
// let person2= new Person("kunal","xyz");
// console.log(person1);
// console.log(person2);


class BankAccount{
    #balance = 0;
    constructor(owner){
        this.owner=owner;
    }
    deposite(amount){
        this.#balance += amount;
        console.log(`${this.owner} deposited ${amount}, Current Balance:${this.#balance}`)
    }
}

const customer1= new BankAccount("utkarsh");

console.log(customer1)