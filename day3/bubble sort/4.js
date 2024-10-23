
// Sort an array of floating-point numbers using Bubble Sort.

let arr=[2.3, 5.7, 1.8, 4.9];

for(let x=0;x<arr.length;x++)
{
    let min = x;

    for(let i=x;i<arr.length;i++)
    {
        if(arr[min]>arr[i])
        {
            min=i
        }
    }
    let temp=arr[min];
    arr[min]=arr[x];
    arr[x]=temp;
}
console.log(arr);
