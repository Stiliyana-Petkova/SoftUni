function commands(input) {
    let array = input.shift();
    let command = input.shift();
   
    let funcs = {
      reverse: function (tokens) {
        let startIndex = Number(tokens[1]);
        let countElements = Number(tokens[3]);
   
        let neededNums = array.splice(startIndex, countElements).reverse();
        array.splice(startIndex, 0, neededNums);
   
        return array.flat(1);
      },
      sort: function (tokens) {
        let startIndex = Number(tokens[1]);
        let count = Number(tokens[3]);
        let neededNums = array.splice(startIndex, count).sort();
        array.splice(startIndex, 0, neededNums);
   
        return array.flat(1);
      },
      remove: function (tokens) {
        let deleteNums = Number(tokens[0]);
        array.splice(0, deleteNums);
        return array;
      },
    };
   
    while (command !== "end") {
      let tokens = command.split(" ");
      let currentCommand = tokens.shift();
      array = funcs[currentCommand](tokens);
   
      command = input.shift();
    }
   
    console.log(array.join(", "));
  }