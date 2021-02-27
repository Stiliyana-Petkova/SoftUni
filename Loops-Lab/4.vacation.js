function vacation(num, type, day) {

    num = Number(num);
    let result = 0;

    switch(type) {
        case "Students": 
        if(day == "Friday") {
            result = num * 8.45;
        } else if(day == "Saturday") {
            result = num * 9.80;
        } else if(day == "Sunday") {
            result = num * 10.46
        } break;

        case "Business":
            if(day == "Friday") {
                result = num * 10.90;
            } else if(day == "Saturday") {
                result = num * 15.60;
            } else if(day == "Sunday") {
                result = num * 16
            } break; 

         case "Regular": 
         if(day == "Friday") {
            result = num * 15;
        } else if(day == "Saturday") {
            result = num * 20;
        } else if(day == "Sunday") {
            result = num * 22.50
        } break; 
    }

    if(type == "Students" && num >= 30) {
        result = result * 0.85;
    }

    if(type == "Business" && num >= 100) {
        result = result * 0.90;
    }

    if(type == "Regular" && num >= 10 && num <= 20){
        result = result * 0.95
    }

    console.log(`Total price: ${result.toFixed(2)}`)


}
vacation(40,
    "Regular",
    "Saturday")