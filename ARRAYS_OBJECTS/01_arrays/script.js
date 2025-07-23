// let make an array
let arr = [1, 2, 3, 4, 5];

// => forEach (now read all the values of arr and print hi with it by using)
arr.forEach(function (val) {
  console.log(val + " hi");
});

// => map (it a  imaginary array with same data but we can make changes to it)
let newarr = arr.map(function(arr){
    return arr*2;
});
console.log(newarr);

// => filter (as the term said it is used for filtring data like i want to filter the no. greater or equal to 3 )
let newarr = arr.filter(function(arr){
    if (arr >= 3){ return true;}
    else return false;  
})
console.log(newarr);

// => find (it is used for finding data like we will try to fund 4 and print it )
let newarr = arr.find(function(value){
if (value === 4){return value;}
})
console.log(newarr);

// => indexOf (it works like to find index of any data alos if it dont give means it does not exist like it give -1 then it dioesnot exist )
// we can try it in the console of window (arr.indexOf(3)) => it will give us 2

