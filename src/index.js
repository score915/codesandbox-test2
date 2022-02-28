/**
 *
 */
// var val1 = "var変数";
// console.log(val1);

// // var

// val1 = "overwrite test";
// console.log(val1);

// // re-predict

// var val1 = "var_second";
// console.log(val1);

// let val2 = "let parameter";
// console.log(val2);
// val2 = "let para overwritten"
// console.log(val2);
// let val3 = "test";
// const val4 = "const3";
// const val5 = 10;
// console.log(val5);

// const val4 = {
//   name: "James",
//   age: 29
// };

// console.log(val4);

// val4.name = "John";
// val4.address = "Fujisawa";

// const val5 = ["dog", "cat"];
// console.log(val5);
// val5[0] = "bird";
// val5.push("monkey");

// const message2 = `My name is ${val4.name}, age is ${val4.age}.`;
// console.log(message2);

/*

function func1(str) {
  return str;
}

const func2 = function func２(str) {
  return str;
};

const func3 = (str) => {
  return `str = ${str}`;
};

const func4 = (num1, num2) => num1 + num2;

console.log(func1("test"));

console.log(func4(3, 3));

//分割代入
const myProfile = ["James", 28];
const message3 = `Name is ${myProfile[0]}.`;
console.log(message3);

const [name, age] = myProfile;
const message4 = `Name is ${name}, too.`;
console.log(message4);

///     スプレッド構文：配列の展開
const arr1 = [1, 2, 3];
console.log(arr1);
const someFunc = (num1, num2) => num1 + num2;
console.log(...arr1);
console.log(...arr1);
console.log(someFunc(...arr1));

const arr2 = [1, 2, 30, 4, 5];
console.log(arr1);
const [num1, num2, ...arr3] = arr2;
console.log(arr3);
const arr4 = [10, 20];
const arr5 = [30, 40];
const arr6 = [...arr4];
// const arr7 = arr4;
// console.log(arr6);
// console.log(arr7);

const arr7 = [...arr4, ...arr5];
console.log(arr7);

for (let index = 0; index < arr2.length; index++) {
  const element = arr2[index];
  console.log(element);
}

const nameArr2 = ["Tanaka", "yamada", "Katoh"].map((name) => name);

console.log(nameArr2);

const nameArr3 = ["Tanaka", "yamada", "Katoh"].map((name) => console.log(name));

const numArr = [1, 2, 3, 4, 5];

const newNumArr = numArr.filter((num) => num % 2 === 1);

console.log(newNumArr);

console.log(nameArr2.map((name, index) => name + index.toString()));

const newNameArr = nameArr2.map((name) => {
  if (name.startsWith("Ta")) {
    return "Mr." + name;
  } else {
    return name;
  }
});
console.log(newNameArr);

*/

const num = 13000321;
console.log(num.toLocaleString()); // ３桁カンマ区切りの文字列を返す

const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
console.log(formattedNum);
