console.clear();
// vypis rady cisel od 0 po 3,s pricitanim (++) po +1
for (let promena = 0; promena < 4; promena++) {
  console.log(promena);
}

// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; counter >= 0; counter--) {
  console.log(counter);
}

const animals = ["Grizzly Bear", "Sloth", "Sea Lion"];

for (let index = 0; index < animals.length; index++) {
  console.log("animals " + animals[index]);
}

const vacationSpots = [
  "Paris",
  "Tulum",
  "Kajlovec",
  "Bali",
  "Hradec nad Moravici"
];
// for (let index = 0; index < animals.length; index++) {

for (let index = 0; index < vacationSpots.length; index++) {
  let mesto = vacationSpots[index];

  if (mesto === "Bali") {
    console.log(`Pojedu na ${mesto}`);
  } else {
    console.log(`I would love to visit ${mesto}`);
  }
}

// console.log("-------------------------------------------");

// for (const index in vacationSpots) {
//   console.log("I would love to visit " + vacationSpots[index]);
// }
