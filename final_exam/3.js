let arr= [4,5,2,25]
let any = new Array(arr.length).fill(-1);
let stack = [];
function next()
{
for(let x=0; x<arr.length; x++)
{
    while(stack.length > 0 && arr[stack[stack.length-1]] < arr[x])
    {
        let sample = stack.pop();
        any[sample]= arr[x];
    }
    stack.push(x);
}
console.log(any);
}




next();