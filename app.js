//1---------------for loop boyicha masalalar-------------
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
/**Ushbu kodda, i degan o'zgaruvchi 1 dan 10 gacha qiymatlarga o'zgarmasdan o'zgaradi.
 Tsikl har bir marta console.log yordamida i ni konsolga chiqaradi.
  Natijada 1 dan 10 gacha bo'lgan sonlar konsolga chiqariladi.
  */
//---------------------------------------2-----------------------------------
/**let n = 13;
let array = [6, 25, 91, 23, 72, 9, 18, 6];

array.unshift(n);

console.log(array);
*/

/**Ushbu kodda, n ni massivning boshiga joylashtirish uchun unshift metodini ishlatamiz. 
Bu metod massivning boshiga yangi elementni qo'shadi va barcha mavjud elementlarni bir o'rin yuqoriga ko'chiradi

Sizning misoldingizda, n = 13 bo'lgan holda, array ning boshiga 13 ni joylashtirgan holda yangi massiv [13, 6, 25, 91, 23, 72, 9, 18, 6] natija chiqadi.
*/
//---------------------------------------3-----------------------------------
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
/**Ushbu kodda, i degan o'zgaruvchi 1 dan 10 gacha qiymatlarga o'zgarmasdan o'zgaradi.
 Tsikl har bir marta console.log yordamida i ni konsolga chiqaradi.
  Natijada 1 dan 10 gacha bo'lgan sonlar konsolga chiqariladi.
  */
//---------------------------------------funksiya misollari-1------------------------------------
function calculateCube(num) {
  return num ** 3;
}

console.log(calculateCube(3)); // Natija: 27
console.log(calculateCube(5)); // Natija: 125

/**Bu kodda, calculateCube degan funksiya yaratiladi,
 u num degan argumentni qabul qiladi.
  Funksiya num ning kubini hisoblaydi va natijani qaytaradi.
   Natijani console.log orqali konsolga chiqaramiz.
    Misolda calculateCube(3) bilan 3 sonining kubi 27 
     calculateCube(5) bilan 5 sonining kubi 125 natijalarini olish mumkin.
     */

//---------------------------------------funksiya misollari-2------------------------------------
function mathOperation(num) {
  return 2 * Math.sin(num) + Math.sqrt(num);
}

console.log(mathOperation(0)); // Natija: 0
console.log(mathOperation(Math.PI)); // Natija: 2

/**Bu kodda, mathOperation degan funksiya yaratiladi,
 u num degan argumentni qabul qiladi.
  Funksiya berilgan matematik formulani hisoblaydi va natijani qaytaradi.
   Natijani console.log orqali konsolga chiqaramiz. 
   Misolda mathOperation(0) bilan 0 soniga,
    mathOperation(Math.PI) bilan π (pi) soniga mos natijalar olish mumkin.
     */
//---------------------------------------funksiya misollari-3------------------------------------
function calculateAverage(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}

console.log(calculateAverage(4, 7, 11)); // Natija: 7.333333333333333
console.log(calculateAverage(15, 22, 9)); // Natija: 15.333333333333334

/**Bu kodda, calculateAverage degan funksiya yaratiladi,
 u num1, num2 va num3 degan argumentlarni qabul qiladi.
  Funksiya berilgan sonlarning o'rta arifmetikasini hisoblaydi va natijani qaytaradi
  
   Natijani console.log orqali konsolga chiqaramiz.
    Misolda calculateAverage(4, 7, 11) bilan 4, 7 va 11 sonlarning
     o'rta arifmetikasi 7.333333333333333,
      calculateAverage(15, 22, 9) bilan 15, 22 va 9 sonlarning
       o'rta arifmetikasi 15.333333333333334 natijalarini olish mumkin.
        */
//---------------------------------------array misollari-1------------------------------------
let array = [9, 4, 17, 2, 6];

let max = Math.max(...array);

console.log(max);
// Natija: 17
/**Bu kodda, array degan massiv yaratiladi. 
Math.max metodi yordamida massivning eng katta elementini topamiz.
 ...array sintaksi massivni ayirib elementlarga ajratadi,
  shuning uchun Math.max metodi massivning har bir elementini 
  alohida argument sifatida qabul qiladi. Natijani console.log orqali konsolga chiqaramiz.
  */

let arr = [1, 2, 3, 4, 5];
let newArr = arr.reverse();
console.log(newArr);
// bu ishda bajargan misolimizda array yaratdik va yaratgan arrayimizni teskarisini ko'rsatdik.

const data = {
  name: "John",
  age: 30,
};
console.log(Object.keys(data).length);

// BU bajargan misiolimizda biz object yaratib olishimiz kerak.
// va object keylarining lengthni hisobladfik
