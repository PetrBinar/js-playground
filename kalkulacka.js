let cenaNafty = 33;
let spotrebaNa100 = 6.5;
let vzdalenost = 145;
let pocetLidi = 4;

const nadpis = "              kalkulacka cestovnich nakladu               ";
console.log(nadpis);

let textCenaNafty = `Cena nafty ${cenaNafty} Kc/l`;
console.log(textCenaNafty);
let textSpotrebaNa100 = `Spotreba nafty  ${spotrebaNa100}l/100km`;
console.log(textSpotrebaNa100);

let textUjetaVzdalenost = `Ujeta vzdalenost = ${vzdalenost} Km`;
console.log(textUjetaVzdalenost);

let cenaZaKm = (cenaNafty * spotrebaNa100) / 100;
console.log(`Cena za 1Km = ${cenaZaKm} Kc`);

let textZaVzdalenost = cenaZaKm * vzdalenost;
console.log(`Celkova cena za vzdalenost ${textZaVzdalenost} Kc`);

let cenaNaOsobu = Math.ceil(textZaVzdalenost / pocetLidi);
console.log(`Zaokrouhlena cena na osobu je ${cenaNaOsobu} Kc`);
