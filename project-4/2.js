let arr=[1, 1, 2, 2, 3, 4, 4, 5];

 function num(){
    let i=0;
    for(let j=0;j<arr.length;j++)
    {
        if(arr[i]!=arr[j])
        {
            i++;
            arr[i]=arr[j];
        }
    }
    console.log(arr);
    return i+1;
    
 }
 console.log(num());