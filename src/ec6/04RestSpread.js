//arrays destructuring

let fruits = ['apple','Banana'];

let [a,b] = fruits; //acá se parte el array y se asigna el valor a cada variable, en este caso a toma el primero y así...

console.log(a,b);

let user ={ username: 'Oscar', age: 34};

let{username, age} = user;

console.log(username,age);
console.log(username,user.username);


// spread-operator 

let person = {name:'Sergio', age: 30};
let country = 'COLom';

let data = { ...person,country };
let data2 = { id:1,...person,country };

console.log(data);
console.log(data2);

// rest

console.log('Rest');

function sum(num,...values){//, permite agregar los datos que querramos 
    console.log(values);
    console.log(num + values[0]);
    return num +values[0];
}

sum(1,1,2,3);


function solution(
    json1 = {
      name: 'Mr. Michi',
      food: 'Pescado',
    },
    json2 = {
      age: 12,
      color: 'Blanco',
    }
  ) {
    return { ...json1, ...json2 };
  }

console.log(solution());

