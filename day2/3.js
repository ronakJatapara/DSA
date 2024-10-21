


//////   ascending order //////
let arr=[1,0,1,0,1,0,1,0];
for(let x=0;x<arr.length-1;x++)
{
    let max=x;
    for(let i=x+1;i<arr.length;i++)
    {
        if(arr[i]<arr[max])
        {
            max=i;
        }

    }
    let temp=arr[max];
    arr[max]=arr[x];
    arr[x]=temp;
}
console.log(arr);

//////   ascending order //////




////// descending order //////

let arr2=[1,0,1,0,1,0,1,0];


for(let x=0;x<arr2.length-1;x++)
{
    let min=x;
    for(i=x+1;i<arr2.length;i++)
    {
        if(arr2[i]>arr2[min])
        {
            min=i;
        }
    }
    let temp=arr2[min];
    arr2[min]=arr2[x];
    arr2[x]=temp;
}
console.log(arr2);

////// descending order //////








/////////// unsolved code ///////////



// let arr=[1,0,1,0,1,0,1,0];

// let arr2=[];


// for(let x=0;x<arr.length;x++)
// {
//     if(arr[x]==1)
//     {
//         arr2.push(arr[x])
//         // console.log(arr);
//         // arr2.push(arr[x]+1)
        
        
//     }

    
// }

// console.log(arr2);



/////////// unsolved code ///////////





