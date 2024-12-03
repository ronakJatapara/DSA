function arr(num)
{
    if(num<=1)
    {
        return num;
    }
    return arr(num-1) + arr(num-2);
}

console.log(arr(6));