class User{
    //metodos
    saludo(){
        return 'Hello';
    }
}


const gndx = new User();

console.log(gndx.saludo());

// constructor

class User2{
    constructor(){
        console.log('nuevo usuario');
    }
    saludo(){
        return 'Hello';
    }
}

const sergio = new User2();

// this

class User3{
    constructor(name){
        this.name = name;
    }
    //metodos
    #habla(){
        return 'hello';
    }
    saludo(){
        return `${this.habla()} ${this.name}`;
    }
}

const sergio2 = new User3('Sergio');

console.log(sergio2.saludo());


//getters and setters

class User4{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    habla(){
        return 'hello';
    }
    saludo(){
        return `${this.habla()} ${this.name}`;
    }

    get #uAge(){
        return this.age;
    }

    set uAge(n){
        this.age = n;
    }
}
const sergio3 = new User4('Sergio', 20);

console.log(sergio3.uAge);
console.log(sergio3.uAge = 50);