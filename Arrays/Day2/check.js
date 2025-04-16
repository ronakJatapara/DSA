function check(arr)
{
     for(let i = 0 ; i<arr.length;i++)
     {
        for(let j=i+1;j<arr.length;j++)
        {
           if(arr[i] !== arr[j])
           {
            console.log("no");
            
           }
           
        }
    }
  
}


console.log(check(["js", "react", "node","js"]));
