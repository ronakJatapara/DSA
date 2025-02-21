
let arr= [1, 2, 3, 2, 4, 2, 5]


for(i=0;i<arr.length;i++)
{
    let target = 2 ;

   if(arr[i] == target)
   {
    arr.splice(i,1)
   }

}

console.log(arr);
