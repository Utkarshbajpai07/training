function getDayType(day) {
    switch(day) {
        case 6:
        case 7:
            return "Weekend";
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return "Weekday";
        default:
            return "Invalid day";
    }
}

console.log(getDayType(6));  
console.log(getDayType(3));  
console.log(getDayType(8));  
