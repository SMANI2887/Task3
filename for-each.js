//for each conditions

//1.For the given JSON iterate over all for loops (for, for in, for of, forEach)

var number  = [1,2,3,4,5];

for(let i=0; i<number.length; i++){
console.log(number[i]);
}
number.forEach(function(number, index, array){
console.log('index:'+index, number * 5);
});
