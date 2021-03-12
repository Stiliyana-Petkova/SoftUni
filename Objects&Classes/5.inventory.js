function inventory(array) {

    let arr = [];
    for (let line of array) {
        let [name, level, items] = line.split(' / ');

        level = Number(level);
        items = items.split(', ').sort((a, b) => a.localeCompare(b)).join(', ');

        let heroObj = {
            Hero: name,
            level,
            items
        }
        arr.push(heroObj);
    }
    arr.sort((a,b) => a.level - b.level)
          .forEach(x => {
              console.log(`Hero: ${x.Hero}`);
              console.log(`level => ${x.level}`);
              console.log(`items => ${x.items}`);
          })

}

inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
])