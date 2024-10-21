// find maximum number from array 


let arr=[1,2,3,4,5,6,7,8,9];


function max()
{
let num=1;

    for(let x=0;x<arr.length;x++)
        {
            if(num<arr[x])
            {
              num=arr[x]; 
            }
        }
        return num;


}
console.log(max())




// find minimum number from array 

// let arr=[1,2,3,4,5,6,7,-1,-2];


// function min()
// {
//     let num=Infinity;
   

//     for(let x=0;x<arr.length;x++)
//     {
//         if(num>arr[x])
//         {
//             num=arr[x];
//         }
//     }
//     return num;
// }
// console.log(min());


