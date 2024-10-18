    


let arr=[1,0,1,0,1,0,1,0];

// let arr2=[]


for(let x=0;x<arr.length;x++)
{

    // let min=-Infinity;
    if(arr[x]==0)
    {
       arr.sort();
    //    arr2.push(arr);
    }

}

console.log(arr);


 

for(let x=0;x<arr.length;x++)
{
    if(arr[x]==1)
    {
        arr.sort((a,b)=> b-a)
    }
}
;
console.log(arr);




// we can use array.sort() method for arrange array  ascending order  and descending order







