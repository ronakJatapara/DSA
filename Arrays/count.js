function num(arr)
{
      
    let count=0
    let count1=0

    
    for(i=0;i<arr.length;i++)
    {
        if(arr[i]% 2==0)
        {
            count++
        }
        else if(arr[i]%2!=0)
        {
            count1++
        }
    }

     return {count , count1}

}



console.log(num([1,2,3,4,5]));
