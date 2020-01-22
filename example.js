function pozdrav(jmeno, vek) {
  jmeno = jmeno + " Binar";
  console.log(`Ahoj ${jmeno}. Uz ti je ${vek}`);
}

const mojePole = ["a", "b", "c"];

pozdrav(mojePole, "petr");

const cislo = [10, 20, 30];

cislo[1] = 100;

console.log(cislo);
