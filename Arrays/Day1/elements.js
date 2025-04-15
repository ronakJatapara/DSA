// let arr = [1,2,3,4,5];
// let getEle=3;

// for(let i=0;i<arr.length;i++)
// {
   
//             if(arr[i] === getEle)
//             {
//                let ans =  arr.slice(getEle-1,arr.length)
//                console.log(ans);
               
//             }
       
// }

function elements(arr)
{
    let getEle = 3;
     for(let i=0;i<arr.length;i++)
     {
        if(arr[i]===getEle)
        {
            let ans =  arr.slice(getEle-1,arr.length)
            return ans
        }
     }
}

console.log(elements([1,2,3,4,5]));
