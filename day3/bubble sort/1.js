// Modify Bubble Sort to sort the array in descending order.

let arr=[5, 1, 4, 2, 8];


for(let x=0;x<arr.length-1;x++)
{
    let max=x;
    for(let i=x;i<=arr.length;i++)
    {
        if(arr[max] < arr[i])
        {
            max=i;
        }
    }
    let temp=arr[max]
    arr[max]=arr[x]
    arr[x]=temp;
}
console.log(arr);
