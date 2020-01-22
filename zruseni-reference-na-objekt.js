console.clear();

//globalne definovana promena
//nasledna funkce by menila globalne definovanou promenou,
//tak se promena vystrinkuje aby se stratily vsechny reference a
//nasledne se ten string prevede - sparsuje zpet na novy obekt

const startovniHodnota = ["arrays", "can", "be", "mutated"];

function changeArr(predanaHodnota) {
  //   console.log(startovniHodnota);
  const hodnotaJakoText = JSON.stringify(predanaHodnota);
  //   console.log(hodnotaJakoText);

  const hodnotaZpetNaJSObjekt = JSON.parse(hodnotaJakoText);
  //   console.log(hodnotaZpetNaJSObjekt);

  hodnotaZpetNaJSObjekt[3] = "MUTATED";

  return hodnotaZpetNaJSObjekt;
}

const newArray = changeArr(startovniHodnota);

console.log(startovniHodnota);
console.log(newArray);
