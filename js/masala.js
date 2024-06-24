// 1-masala
// const students = [
//   { ism: "Ali", yoshi: 20, baholar: [90, 85, 88] },
//   { ism: "Vali", yoshi: 21, baholar: [85, 87, 90] },
//   { ism: "Ahrorbek", yoshi: 19, baholar: [88, 92, 95] },
// ];
// let ortachaBal = 88;
// let result;
// let count= 0;
// let summ = 0;
// students.forEach((value) => {
//   value.baholar.forEach(el => {
//     summ = summ + el;
//     count++;
//     result = summ / count

//     if(result > 88) {
//         console.log(result);
//     }else {
//         console.log(ortachaBal);
//     }
//   })
// });

// 2-masala
// const products = [
//   { nomi: "Kompyuter", narxi: 1000, mavjud: true },
//   { nomi: "Telefon", narxi: 700, mavjud: false },
//   { nomi: "Planshet", narxi: 500, mavjud: true },
//   { nomi: "Monitor", narxi: 300, mavjud: true },
// ];

// let newProducts = products.filter((value) => {
//   return value.mavjud == true;
// });

// let result = newProducts[0].narxi
//  newProducts.forEach((value) => {
//     if(result < value.narxi) {
//         console.log(value.narxi);
//     }else {
//         console.log(result);
//     }
//  });

// 3-masala

// 4-masala
// const workers = [
//   { ismi: "Ali", lavozimi: "dasturchi", maoshi: 2000 },
//   { ismi: "Vali", lavozimi: "Dizayner", maoshi: 1800 },
//   { ismi: "Samir", lavozimi: "Dasturchi", maoshi: 2200 },
//   { ismi: "Qodir", lavozimi: "Loyiha boshqaruvchisi", maoshi: 2500 },
// ];

// let ishchilarSoni = 0;
// let result = workers[0].maoshi;
// workers.forEach(value => {
//     ishchilarSoni++
//     if(value.maoshi > result) {
//         result = value.maoshi
//     }
// })
// console.log(ishchilarSoni,result);

// 5-masala
// const products = [
//   { nom: "Kompyuter", kategoriya: "Elektronika", narxi: 1000 },
//   { nom: "Telefon", kategoriya: "Elektronika", narxi: 700 },
//   { nom: "Stol", kategoriya: "Mebel", narxi: 200 },
//   { nom: "Stul", kategoriya: "Mebel", narxi: 100 },
//   { nom: "Lampochka", kategoriya: "Elektronika", narxi: 10 },
// ];

// let result;
// let count = 0;
// let summ = 0;

// products.forEach((value) => {
//   count++;
//   summ = summ + value.narxi;
// });

// result = summ / count;
// console.log(result);
