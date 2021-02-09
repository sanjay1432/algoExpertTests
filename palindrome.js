function isPalindrome(string) {
    // Write your code here.

    //O(n^2) time | O(n) space
    //  let reversedString ='';
    //  for(let i = string.length-1; i>=0; i--){
    //       reversedString+=string[i]
    //  }
    // return string === reversedString;
  //O(n) time | O(1) space
   let leftIdx = 0;
   let rightIdx = string.length-1;
   while(leftIdx<rightIdx){
       if(string[leftIdx]!=string[rightIdx]){
           return false
       }
       leftIdx++;
       rightIdx--;
   }

   return true;
}

console.log(isPalindrome('abcdcba'))