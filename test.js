// alert("helloworld");

// var a = "asmdaksd";
// alert(a);

// var age = 17;
// if (age >= 18) {
//     alert("成年");
// } else if (age >= 14) {
//     alert("青少年");
// } else if (age >= 6) {
//     alert("儿童");
// } else {
//     alert("婴儿");
// }

// var arr = [123, 123.1323, 'wadad'];
// console.log(arr);
var Person = {
    name: "gogogo",
    age: 121,
    height: 121,

    GetAge: function () {
        return this.age;
    }
};
// console.log(Person);
// function fff(a,b = 2,c = 1) {
//      console.log(a,b,c)
//  }
// var a = 'a';
// console.log(a);
// var Person = {
//     name: "tom",
//     age: "18"
// };

// var str = "dasdasd\n"
// str += "djasodj\n"
// console.log(str.toLocaleUpperCase(1), str.length)


function bubblesort(arr)
{

}

let age = 18;
if (age < 10) {
    console.log("小屁孩");
}
else if (age < 18) {
    console.log("未成年");
}
else {
    console.log("成年人");
}

switch (age) {
    case 1:
        console("123");
    case 28:
        console.log("3123123");
    default:
        console.log("hhhhh")
}

for (let i = 0; i < 10; i++){
    console.log(i);
}
for (i in Person) {
    console.log(i,":", Person[i]);
}

function Add() {
    return 1;
}

// console.log(Add())

console.log(Person.GetAge());
var now = new Date().getFullYear();
console.log(typeof(now));