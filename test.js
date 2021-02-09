const testTraversing = (value) =>{
    
    let sum = 0;

    const traverse = val=>{
       if(val<1) return;
       sum+= val;

       val--
       traverse(val)

    }
   
    traverse(value)
    return sum;
}


console.log(testTraversing(10))