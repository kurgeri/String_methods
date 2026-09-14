//0.Feladat
let txt = "AbCdeFgHiJkL";
console.log(txt.length);

//1.feladat
console.log(txt.substring(0, 5));

//2. Feldat
console.log(txt.substring(2, 8));
//3. Feladat
console.log(txt.substring(4));
//4. Feladat
console.log(txt.substring(4, 4 + 6));
//5. Feladat
let txtUp = txt.toUpperCase();
console.log(txtUp);

//6. Feladat
//to-do

for (let i = 0; i > txt.length; i++) {
  if (i % 2 == 0) {
    txt[i].toUpperCase();
  }
}
//7. Feldat
let txt_e = txt.replaceAll("e", "E");
console.log(txt_e);

//8.Feladat
let array = txt.split("e");
console.log(array);
