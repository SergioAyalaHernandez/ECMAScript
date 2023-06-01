const users = {
    gndx :{
        country : 'CO'
    },
    Linda: {
        country: 'MX'
    }
}

console.log(users.gndx.country); // <= existe
//console.log(users.bebeloper.country); // <= no existe


console.log(users?.bebeloper?.country); // <= no existe