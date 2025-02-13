// function reverseArr(arr)
// {
//     let newArr=[]
//     for(a=arr.length-1;a>=0;a--)
//         {
//                 // console.log(arr[a]);
//           newArr.push(arr[a])
                
//         }    

//     return newArr      

// }


// console.log(reverseArr([1,2,3,4,5]));




// second technique

function reverseArr(arr)
{

    let left=0 , right=arr.length-1;

    while(left<right)
    {
        [arr[left], arr[right]] = [arr[right],arr[left]]
        right--
        left++
    }

     return arr
}


console.log(reverseArr([1,2,3,4,5]));

