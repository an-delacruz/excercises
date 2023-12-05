function manufacture(gifts, materials) {
  // Code here
  const giftList = [];
  const materialsArray = materials.split("");
  for (let i = 0; i < gifts.length; i++) {
    let valid = true;
    for (let j = 0; j < gifts[i].length; j++) {
      if (!materialsArray.includes(gifts[i][j])) {
        valid = false;
        break;
      }
    }
    if (valid) giftList.push(gifts[i]);
  }
  return giftList;
}

const gifts = ["tren", "oso", "pelota"];
const materials = "tronesa";

console.log(manufacture(gifts, materials)); // ["tren", "oso"]

const gifts1 = ["juego", "puzzle"];
const materials1 = "jlepuz";

console.log(manufacture(gifts1, materials1)); // ["puzzle"]

const gifts2 = ["libro", "ps5"];
const materials2 = "psli";

console.log(manufacture(gifts2, materials2)); // []
