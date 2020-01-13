// Vstupni hodnoty
const cenaNafty = 33;
const spotrebaNa100 = 6.5;
const vzdalenost = 145;
const pocetLidi = 4;

// Vypocet
const cenaZaKm = (cenaNafty * spotrebaNa100) / 100;
const textCenaZaVzdalenost = cenaZaKm * vzdalenost;
const cenaNaOsobu = Math.ceil(textCenaZaVzdalenost / pocetLidi);

// Vypis do konzole
console.log(`               Kalkulacka cestovnich nakladu 

    Cena nafty                      =   ${cenaNafty} Kc/l
    Spotreba nafty                  =   ${spotrebaNa100} l/100Km
    Ujeta vzdalenost                =   ${vzdalenost} Km

    Cena za 1Km                     =   ${cenaZaKm} Kc
    Celkova cena za vzdalenost      =   ${textCenaZaVzdalenost} Kc
    Zaokrouhlena cena na osobu je   =   ${cenaNaOsobu} Kc`);
