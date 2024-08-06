var flag=0
var arr=[2,44,3,2,8]
if (arr[0]==0 || arr[0]==1){
    flag=1
}
for( let i=2; i<=arr[0]/2; i++){
    if (arr[0]%i == 0){
        flag=1
    }
}
if (flag==0 || arr[0]===2){
    console.log(arr[0]+" is a prime number")
}
else{
    console.log(arr[0]+" is not a prime number")
}