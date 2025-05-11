console.log('hii');


// ***************

// js class

class ClassName {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }


}

class ClassName2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name}`;
    }
}

const person1 = new ClassName('John', 30);

const person2 = new ClassName2('Doe', 25);
 
console.log(person1.name);
console.log(person2.greet());


// Js CLASS METHODS


// GETTERS AND SETTERS USING GET AND SET KEYWORDS

// if i add get to  greet() {
    //     return `Hello, my name is ${this.name}`;
    // } I CAN CALL PERSON2.GREET() WITHOUT PARENTHESES

    // SETTERS

    class ClassName3 {
        constructor (name, age) {
            this.name = name;
            this.age = age;
        }

        set setName(name) {
            this.name = name;
        }

        greet() {
            return `Hello, my name is ${this.name}`;
        }
    }

    // because we are using set keyword, we can call person3.setName = 'John' without parentheses

    person3 = new ClassName3('jayyy', 25);
    console.log(person3.name);

    person3.setName = 'John';
    console.log(person3.name);


// CLASS INHERITANCE USING EXTEND KEYWORD

class students {
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
        
    }

    greet() {
        return `Hello, my name is ${this.name}`;
    }
}

class student extends students {

}

const student1 = new student('stu1', 'A');

console.log(student1.greet());

// SUPER KEYWORD
// super keyword is used to call the constructor of the parent class

class animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return `${this.name} makes a noise`;
    }
}

class dog extends animal {
    constructor(name) {
        super(name);
    }

    speak() {
        return `${this.name} barks`;
    }
}

const dog1 = new dog('dog1');
console.log(dog1.speak());

// METHOD OVERRIDDING
// method overriding is when a child class has a method with the same name as the parent class
// in this case, the child class method will override the parent class method E.G speak() method

// STATIC METHODS
// static methods are methods that belong to the class itself, not to the instances of the class

class workers {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static greet() {
        return 'Hello, I am a worker';
    }
}

const painter = new workers('peter', 20)

// if i call painter.greet() it will give an error but if i call workers.greet() it will work

//to make it work, we make the child class a parameter i.e static greet(worker) {
//     return `Hello, I am a ${worker.name}`;


// PRIVATE METHOD USES #ON A METHOD IN THE PARENT CLASS WHICH CANNOT BE ACCESSED IN THE CHILD CLASS
//TO ACCESS THE PRIVATE MMETHOD YOU CAN USE MANIPULATION OF PARAMETERS