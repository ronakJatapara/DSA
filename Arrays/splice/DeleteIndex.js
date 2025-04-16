// Delete the element at index k from an array.

let arr = [1, 2, 3, 4, 5];
let k=2;
let newArr=[];


for(i=0;i<arr.length;i++)
{
    if(i==k)
    {
        continue;

    }
   newArr.push(arr[i])

}
console.log(newArr);







