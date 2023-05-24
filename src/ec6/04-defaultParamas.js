function newUser(name, age, country){
    var name = name || 'Oscar';
    var age = age || 34;
    var country = country || 'COL';
    console.log(name, age, country);
}

newUser();
newUser('Sergio',30,'MX');



// se puede agregar un valor por defecto en los parametros o interpretar los que vengan al llamar el metodo
function newAdmin(name = 'Sergio Ayala', age = 30, country = 'CL'){
    console.log(name,age,country)
}

newAdmin();
newAdmin('Linda',26,'COL');