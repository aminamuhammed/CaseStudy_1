var sum=0
var square=0
var arr=[1,9,7,6]
console.log("Array elements are: "+arr)
console.log("Squares of the array elements are")
for (let i = 0; i < arr.length; i++) { 
    square=arr[i]*arr[i]
    console.log(square)
    sum=sum+square
    }
console.log("Sum of the sqaures of the elements in array is: "+sum)