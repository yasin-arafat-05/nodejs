
class Person{
    constructor(a,b){
        console.log("person class initialize. . . . . .");
        this.a = a;
        this.b  = b;
    }

    personinfo(){
        console.log(`My name is ${this.a} and i am ${this.b} years old.`);
    }
}


let p1 = new Person("Yasin",23);
p1.personinfo();

