function maxNum(arr)
{
  let max = arr[0];


  for(a=1;a<arr.length;a++ )
  {
    if(arr[a]>max)
    {
        max=arr[a]
    }
  }
  return max
  



}


console.log(maxNum([10,20,30,40,50]));
