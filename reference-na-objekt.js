console.clear();

// vstupni hodnota
const input = [[10, 20], "how", "are", "you"];

// funkce co odebere posledni objekt v array
function removeElement(myArray) {
  // zde pracuju s objektem, ktery byl funkci predan a pokud
  // to je reference na jinny objekt tak zmenim ten puvodni (input)
  myArray.pop();
}

console.log("Vstupni hodnota");
console.log(input);

// priradim nove promene "referenci" na jinny objekt
let newInput = input;

// zavolam funkci a predam ji newInput, coz je vlastne jen "reference"
// na input promenou
removeElement(newInput);

// prepisu hodnotu newInput, tim padem, tam uz neni reference na input
// ale nove je tam nove array
newInput = ["I", "am", "fine"];

console.log("Zmenena hodnota");
console.log(newInput);

console.log("Kontrola vstupni hodnoty");
console.log(input);
