// Remove the first occurrence of a number in an array.


let arr = [1,2,3,2,4]
let target = 2;


for(i=0;i<arr.length;i++)
{
    if(arr[i] == target)
    {
        arr.splice(i,1)
        break
    }
}

console.log(arr);

