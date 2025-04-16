let arr=[1, 2, 2, 3, 3, 3]


for(i=0;i<arr.length;i++)
{
  
    for(j=i+1;j<arr.length;j++)
    {
        if(arr[i] === arr[j])
        {
           arr.splice(j,1);
           j--;


        }
    }

    
    
}

console.log(arr);



  // .............add new value using splice............. //

// let arr = [10,20,30,40,60]
// arr.splice(4,0,50)
// console.log(arr);

  // .............add new value using splice............. //





  // .............add new value in 2 places splice............. //

//   let arr  = [1,2,4,5,6,7,8]
//    arr.splice(0,2,2,3)
//    console.log(arr);

  // .............add new value in 2 places splice............. //

   