// Delete the middle element from an odd-length array.


let arr = [1, 2, 3, 4, 5];


for(i=0;i<arr.length;i++)
{
  if(i === (arr.length+1)/2)
  {
    arr.splice(i,1)
    break
  }
}
console.log(arr);


