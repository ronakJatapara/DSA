
function mirror(arr)
{
    
      for(let i =arr.length-1;i>=0;i--)
      {
        arr.splice(arr.length,0,arr[i])

      }
      
      return arr      
}


console.log(mirror([1, 2, 3,4]));




