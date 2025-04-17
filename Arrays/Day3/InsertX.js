function insert(arr){
 let count = 3
 let gap = 4
    for(let i=0;i<arr.length;i++)
    { 
        if(count == i)
        {
            arr.splice(i,0,'x')
            let secondValue =  i + gap + 1 ;
            arr.splice(secondValue,0,'x')
        }

        
      
    }
    return arr
}

console.log(insert([1, 2, 3, 4, 5, 6, 7,4,6,7,8]));




   // let newArr = arr.map((el,i)=>{
    //     arr.splice(el+3,0,"x")
    // })
    // return newArr