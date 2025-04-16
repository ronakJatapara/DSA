// let arr = [1, 2, 3, 4, 5, 6]


function middleEle(arr)
{
    for(let i=0;i<arr.length;i++)
        {
          let middleIndex = Math.floor(arr.length/2)
       
            arr.splice(middleIndex-1,2,'x','x')
            break;
      }
      return arr
}



console.log(middleEle( [1, 2, 3, 4, 5, 6]));
