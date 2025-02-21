
let arr =  [1, 2, 2, 3, 2, 4];
let replace = 2;
let target = 9;


 for(i=0;i<arr.length;i++)
 {
    if(arr[i] ==  replace)
    {
        arr.splice(i,1,target)
        
    }
 }

 console.log(arr);
 