
function Sum(arr)
{
    let sum=0
    let max=arr[0]
    
   for(a=0;a<arr.length;a++)
   {
      sum+=arr[a]
     if(arr[a]>max)
     {
        max=arr[a]
        
     }


      
   }
   return sum 
  

   



}

console.log(Sum([1,2,3,4,5]));
