function Digit(num)
{
    let sum = 0;
    
    while(num!=0)
    {
        let first = num % 10;
        num = Math.floor(num / 10);
        sum += first;
    }

    console.log(sum);
}

Digit(123);