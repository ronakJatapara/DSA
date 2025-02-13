
function minNUm(arr)
{

    let min=arr[0]

    for(a=1;a<arr.length;a++)
    {
        if(arr[a]<min)
        {
            arr[a]=min
        }
    }
   return min
}


console.log(minNUm([1,2,3,4,5]));
