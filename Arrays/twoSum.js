function TwoSum(arr)
{
    let sum=0
    let target=9;

     for(i=0;i<arr.length;i++)
     {
          for(j=0;j<arr.length;j++)
          {
            if(arr[i] + arr[j] === target)
            {
                return [i,j]
                
            }
          }
     }

}


console.log(TwoSum([1,2,3,4,5]));
