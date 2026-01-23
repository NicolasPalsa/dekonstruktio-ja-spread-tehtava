const numerot = [10, 20, 30, 40]

const eka = numerot[0]
const loput = numerot.slice(1)

console.log(eka);
console.log(loput);

/////

const opiskelija = {
  nimi: "Ville",
  ika: 34,
  koulutus: "Datanomi",
  kaupunki: "Helsinki"
}

const nimi = Object.values(opiskelija)[0]
const ika = Object.values(opiskelija)[1]
const muutTiedot = {koulutus: opiskelija.koulutus, kaupunki: opiskelija.kaupunki}

console.log(nimi);
console.log(ika);
console.log(muutTiedot);

/////

const backend = ["Node.js", "SQL"]
const frontend = ["HTML", "CSS", "JavaScript"]

const fullstack = [...backend, ...frontend, 'Git']

console.log(fullstack);

/////

const perusTiedot = {
  nimi: "Anna",
  ika: 19
}
 
const lisatiedot = {
  kaupunki: "Espoo",
  harrastus: "Ohjelmointi"
}

const kayttaja = {...perusTiedot, ...lisatiedot, aktiivinen: true}

console.log(kayttaja);