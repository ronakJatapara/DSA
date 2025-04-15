function removeValue(arr)
{
    arr.shift()
    arr.pop()
    return arr
 
        // arr.splice(0,1)
        // arr.splice(arr.length-1,1)
        // return arr
}


console.log(removeValue([10,20,30,40,50]));
