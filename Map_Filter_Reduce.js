// What is Map Function:
// Map function is a higer Order functions which are use to tranform an array means if you want to iteriate each an every value of an array and want to get an new array from the previous array
const arr = [1, 4, 5, 36, 36];
// function double(x){
//     return  x * 2;
// }

// const result=arr.map(double)
// console.log(result)

// const arr1=[1,4,5,36,36];  // convert it into binary

// function convertItIntpBinary(x){
//     return x.toString(2)
// }
// const result=arr.map(convertItIntpBinary)
// console.log(result)

// What is Filter Function
// filter is use to filter an array just simple if we have an array we want to get the number which are greater than 2 or 3 or 4 anyone else then we use filter and perform action on the basis of requirement this can do with the helpof filter function

// function isOdd(x){
//     return x % 2
// }
// function isEven(x){
//     return x % 2 == 0
// }

// const result =arr.filter(isEven)
// console.log(result)

// Reduce Function:
// If we have an array of elements then reduce fuunction will take all the elements of array combine them into one value for example if we have an array const arr-[1,2,4,5,6] then if we want to get the sum of all theese elemets then we will use reduce function in JS

// const result = arr.reduce(function (acc, curr) {
//   return acc + curr;
// }, 0);
// console.log(result);


// const result1=arr.reduce(function (max,cur){
//     if(cur > max){
//         max=cur
//     }
//     return max
// },0)

// console.log(result1)


const result1=arr.reduce(function (acc,cur){
   
    console.log("Accumulator is here",acc)
    console.log("Current value is here",cur)
},0)
console.log(result1)
