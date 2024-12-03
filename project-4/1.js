let arr=[1, 2, 3, 4, 6]
let target=6;


   let low=0;
   let high=arr.length-1;
 function num()
 {

 
   while(low<=high)
   {
    let sum= arr[low]+arr[high];
        if(sum==target)
            {
                return [low,high];
            }
           else if(sum<target)
            {
                low++;
            }
            else if(sum>target)
            {
                high--;
            }
   }
}

console.log(num());