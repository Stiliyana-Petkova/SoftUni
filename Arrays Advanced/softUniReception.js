function softUniReception(array) {

    let firstEmployee = Number(array.shift());
    let secondEmployee = Number(array.shift());
    let thirdEmployee = Number(array.shift());
    let students = Number(array.shift());
    let studentsPerHour = firstEmployee + secondEmployee + thirdEmployee;
    let time = 0;
    let count = 0;
    
    for (let i = 1; i <= 10000; i++) {
        if(students == 0) {
            break;
        }
        students -= studentsPerHour;
        time++;
        count++;
        if (count == 3) {
            time++;
            count = 0;
        }
         if (students <= 0) {
            break;
        }
        
    }
    console.log(`Time needed: ${time}h.`)
}

softUniReception(['3', '2', '5', '40']);
softUniReception(['1', '1', '1', '0']);
softUniReception(['1', '1', '1', '10000']);
softUniReception(['100', '100', '100', '0']);
softUniReception(['100', '100', '100', '10000']);
