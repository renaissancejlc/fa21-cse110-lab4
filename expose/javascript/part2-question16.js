const statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5, 
    blackCars: 40,
    rareCars: 2
};
for (const property in statistics){
    var prop = `${property}`;
    var value = `${statistics[property]}`;
    if (prop.charAt(0) == 'r' || value %2 == 1){
        console.log(`${statistics[property]}`);
    }
}

  
