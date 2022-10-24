let statistics = {
    redCars: 21,
    blueCars: 45, 
    greenCars: 12,
    raceCars: 5, 
    blackCars: 40,
    rareCars: 2
};

for (const prop in statistics) {
    var temp = prop
    if( temp.charAt(0) == 'r'  ){
        console.log(`${prop}: ${statistics[prop]}`);
    } else {
        if(statistics[prop] % 2 != 0){
            console.log(`${prop}: ${statistics[prop]}`);
        }

    }
  }