console.clear();

const startovniHodnota = ["arrays", "can", "be", "mutated"];
//globalne definovana promena
//nasledna funkce by menila globalne definovanou promenou,
//tak se promena vystrinkuje aby se stratily vsechny reference a
//nasledne se ten strink prevede - sparsuje zpet na novy obekt

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

// function removeElement (newArr) {newArr.pop();}

// const input = [["hello", "fdsfsa"], 454, "kitty"];

// console.log(input);

// let newInput = input;

// console.log(newInput);

// newInput = ["Cau", "vole"];

// console.log(newInput);
// console.log(input);
