var arr=[1,2,3,4,3,4,2,3]
var item
var most_frequent=1
var frequency=0
for(var i=0; i<arr.length; i++){
    for(var j=i; j<arr.length; j++){
        if(arr[i]==arr[j])
            frequency++
        if(most_frequent<frequency)
        {
            most_frequent=frequency
            item=arr[i]
        }
    }
    frequency=0
}
console.log("most frequent item is "+item)
