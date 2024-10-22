let arr=[29, 10, 14, 37, 13];



for(let x=0;x<arr.length-1;x++)
{
    let max = x;

    for(let i=x+1;i<arr.length;i++)
    {
        if(arr[i]>arr[max])
        {
            max=i;
        }
    }
    let temp=arr[max];
    arr[max]=arr[x];
    arr[x]=temp;
}
console.log(arr);
