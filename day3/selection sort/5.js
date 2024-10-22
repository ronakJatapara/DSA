let arr=[50, 40, 30, 20, 10];
let count=0;

for(let x=0;x<arr.length-1;x++)
{
    let min = x;
    for(let i=x+1;i<arr.length;i++)
    {
        if(arr[i]<arr[min])
        {
            min=i;


        }

    }
  if(min!=x)
  {
    let temp=arr[min];
    arr[min]=arr[x];
    arr[x]=temp;
    count++
  }



    
}
console.log(arr);
console.log(`the value is swap `,count,`times`);


