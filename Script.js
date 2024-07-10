a=5;
var a=20;
console.log(a);
let b=20;
console.log(b);
{
    let b=90
    console.log(b)
}

console.log(typeof(b));
var st="i am string";
console.log(typeof(st));
var d=true;
var m=4;
console.log(typeof(m));
var arr1=["orange","apple",10];
console.log(arr1[2]);
console.log(arr1.length)
arr1.push("pineapple")
console.log(arr1)
// Javascript Objects
let person={
    name:"boy",
    age:20,
    location:"Tvm"
}
console.log(person.name)
let arr2=[{
    name:"yoy",
    age:"20",
    location:"Erklm"
},{
    name:"zoy",
    age:"20",
    location:"Tvm"
}]
console.log(arr2[0].location)
function add(x,y) {
    var sum=x+y
   return sum
}
var p= add(30,20)
console.log(p);
let g = 1
let h = g++
console.log(g,h)
g=10
h='10'
if (g>h) {console.log("g is greater than h")
    
} 
else if (g==h) {console.log("g is equal to h")
        
    } else {console.log("g is not equal to h")
        
    }
    var array=[1,2,3,4,5]
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    
}
for (const key in person) {

    console.log(key)
    }
for

