var d = new Date();
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getHours);
console.log(d.getMinutes());
console.log(d.getSeconds());

var t1 = d.getTime();

var someOtherDateObject = new Date();

var t2 = someOtherDateObject.getTime();

if (t1 < t2) {
    
}