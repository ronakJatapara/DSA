let arr=[[1,2,3,4],[5,6,7,8],[9,10,11,12]];
// let colSum=0;

function sum(arr)
{

    for(let i=0;i<arr.length;i++)
        {
            let rowSum=0;

            for(let j=0;j<arr[i].length;j++)
            {
            rowSum += arr[i][j];
                
            }
        console.log(rowSum);

        }
}


sum(arr);
