const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.reverse()
console.log(reversedTeachers);


// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = []
for (let i = 0; i < teachers.length; i++) {
  const singol_teachers = teachers[i];
  console.log(singol_teachers);
  if (singol_teachers.length >= 5) {
    longNames.push(singol_teachers)
  }
  console.log(longNames);
}


// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(1, 1)
console.log(teachers);


// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
let isFabioPresent = false;
for (let i = 0; i < teachers.length; i++) {
  console.log(teachers[i]);
  if (teachers[i] === 'Fabio') {
    isFabioPresent = true;
  }
}

console.log(isFabioPresent)



// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
let teachersString = ""
for (let i = 0; i < teachers.length; i++) {
  const element = teachers[i];

  if (i < teachers.length - 1) {
    teachersString += `${element}, `

  } else {
    teachersString += element
  }
}
console.log(teachersString)

teachersString = teachers.join(", ")

console.log(teachersString)

