// cheak how many time value of array Comparisons 



let arr = [6, 3, 1, 7];

let count=0
for(let x=0;x<=arr.length-2;x++)
{
    let min = x;
    for(let i=x;i<arr.length;i++)
    {
        if(arr[min]>arr[i])
        {
            min=i;
        }
        if(min==i)
            {
                let temp=arr[min]
                arr[min]=arr[x]
                arr[x]=temp;
                count++
            }
    }
  
 
}
console.log(arr);
console.log(count);

