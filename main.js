let sonlar = [2, 4, 9, 10, 45, 67, 8, 90];
console.log(sonlar,'Boshlanishdagi array');
let juft = [];
for (raqam of sonlar) {
  if (raqam % 2 === 0) {
    juft.push(raqam);
  }
}
console.log(juft, 'Juft sonlarga ajratilgan aray');

