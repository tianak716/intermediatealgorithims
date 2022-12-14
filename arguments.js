function addTogether(){
const [arg1, arg2] = [ ... arguments];

if ( typeof arg1 !== "number") {
    return undefined;
} 
if( arg2 === undefined){
    return function (num) {
        if (typeof of num !== "number") {
            return undefined;
        }
        return arg1 + num;
    };
}
if ( typeof arg2 !== "number")
return undefined;
}
return arg1 + arg2;



const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let firstConst = firstAndLast.split(" ")[0];
  let lastConst = firstAndLast.split(" ")[1];


  this.getFullName = function() {
    return `${firstConst} ${lastConst}`;
  };

  this.getFullName = function() {
    return firstConst;
  };
  this.getFullName = function(first) {
    firstConst = first;
  };
  this.getFullName = function(last) {
  lastConst = last;
  };
  
this.setFullName3 = function(firstAndLast) {
     firstConst = firstAndLast.split(" ")[0];
    lastConst = firstAndLast.split(" ")[1];
} 
};
  

const bob = new Person('Bob Ross');
bob.getFullName( "Bobby Brown");






  const GM = 398600.4418;
  const earthRadius = 6367.4447;

const orbitalPeriod = arr => arr
.map(obj => ({
    name: obj.name,
    orbitalPeriod: Math.round(
        2 * Math.PI * Math.sqrt(
            Math.pow(earthRadius + obj.avgAlt, 3) / GM
        )
    )
}
));

console.log(orbitalPeriod([{name : "iss", avgAlt :413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));