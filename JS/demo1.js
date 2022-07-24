var a = 10;
a = 100;
console.log(a);
console.log(typeof a);
let str = "hello";
console.log(str);
console.log(typeof str);
console.log(str.length);
var aa;
aa += 10;
console.log(aa);
let aaa;
console.log(aaa);
let s = 10;
let d = "10";
console.log(s == d);
console.log(s === d);
console.log(Math.floor(2.23));
console.log(Math.floor(-2.23));
if (s == d) {
    console.log("s == d");
} else {
    console.log("s != d");
}

let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr.length);
arr[100] = 1212;
console.log(arr[100]);
console.log(arr[10]);
arr.hello = "world";
arr['q'] = 'qq';

function test1() {
    var num = 1;
    function test2() {
        var num = 2;
        console.log(num);
    }
    test2();
}
test1();
let ss = "190";
console.log(ss);
ss = 10;
console.log(ss);
let stu = {
    name: "tom",
    age: 19,
    eat: function() {
        console.log("eat...");
    }
}
console.log(stu);
stu.eat();

let obj = new Object;
obj.name = "zhangsan";
obj.age = 190;
console.log(obj);
var obj1 = document.querySelector('p');