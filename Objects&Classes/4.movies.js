function movies(arr) {
    
    let movieArray = [];

    for (let i = 0; i < arr.length; i++) {
        
        if(arr[i].includes('addMovie')) {
            let obj = {};
            let name = arr[i].substring(9);
            obj.name = name;
            movieArray.push(obj);
         } else if(arr[i].includes('directedBy')) {
             let [movie, director] = arr[i].split(' directedBy ');
             movieArray.find( x => {
                 if(x.name == movie) {
                     x.director = director;
                 }
             });
          } else {
            let [movie, date] = arr[i].split(' onDate ');
            movieArray.find( x => {
                if(x.name == movie) {
                    x.date = date;
                }
            });
          }
    }
     movieArray.forEach( x => {
              if(x.name && x.director && x.date) {
                  console.log(JSON.stringify(x));
              }
          })
}

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ])