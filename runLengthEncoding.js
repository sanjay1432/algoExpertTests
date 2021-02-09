function runLengthEncoding(string) {
    // Write your code here.
    let newString ='';

    const recursive = (string, index,count) =>{
        if(index>string.length) return;
       let character = string[index]
      if(string[index] === string[index+1]){
          recursive(string, index+1, count+1)
      }else{
       newString+= count>9?9+character: count+character
       while(count>9){
        let n = count-9
        newString+= n>9?9+character :n+character 
        count = count-9 
       }
     
       recursive(string, index+1, 1)
      }
      
    }
    recursive(string, 0, 1) 
    return newString;
  }
  
  console.log(runLengthEncoding('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'))