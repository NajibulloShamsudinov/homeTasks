//part 1 and part2
let persons = [
  { name: "Vasya", summa: 1000, currency: "TJS" },
  { name: "Ivan", summa: 150, currency: "TJS" },
  { name: "Anton", summa: 230, currency: "TJS" },
  { name: "Jony", summa: 1234, currency: "USD" },
  { name: "Max", summa: 333, currency: "USD" },
  { name: "John", summa: 780, currency: "USD" },
  { name: "Umed", summa: 280, currency: "TJS" },
];
let richman = [];
let sum = 0;
for (let i = 0; i < persons.length; i++) {
  if (persons[i].currency === "USD") {
    let perevodSomon = persons[i].summa * 10.2;
    sum = sum + perevodSomon;
    if (perevodSomon > 500) {
      richman.push(persons[i].name);
    }
  } else {
    sum = sum + persons[i].summa;
    if (persons[i].summa > 500) {
      richman.push(persons[i].name);
    }
  }
}
console.log(sum);
console.log(richman);
