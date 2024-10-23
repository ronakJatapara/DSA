
// Given an array of integers, sort the array in ascending order using Bubble Sort



let arr=[5, 1, 4, 2, 8];


for(let x=0;x<=arr.length-2;x++)
{
    let min=x;
    for(let i=x;i<arr.length;i++)
    {
        if(arr[min]>arr[i])
        {
            min=i;
        }
    }
    let temp=arr[min]
    arr[min]=arr[x]
    arr[x]=temp;
}
console.log(arr);
