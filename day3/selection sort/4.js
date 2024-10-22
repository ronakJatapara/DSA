let arr=[78, 55, 45, 98, 13, 9, 23, 76];

for(let x=0;x<arr.length-4;x++)
{
    let min = x;
    
    for(let i=x+1;i<arr.length-4;i++)
    {
        if(arr[i]<arr[min])
        {
            min=i;
        }
    }
    let temp=arr[min];
    arr[min]=arr[x];
    arr[x]=temp;
}
console.log(arr);
