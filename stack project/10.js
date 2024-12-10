let str = "hello world";

function removeSpace(str)
{
    let newstring = "";
    for(let i=0; i<str.length; i++)
    {
        if(str[i] !== " ")
        {
            newstring += str[i];
        }
    }
    console.log(newstring);
}

removeSpace(str);