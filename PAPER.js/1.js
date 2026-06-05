// function reverString(str){
//     newStr = ""
//     for(let i = str.length - 1; i>=0; i--){
//         newStr += str[i]                             // 1
//     }
//     return newStr
// }

// const hello = reverString("Hello")
// console.log(hello)


// function countVowels(str){
//     let count = 0;
//     for(let i = 0; i <= str.length; i++){
//         if(str[i]==='a' || str[i]==='e' || str[i]==='i' || str[i]==='o' || str[i]==='u'){
//             count++
//         }                                //2
//     }
//     return count
// }

// console.log(countVowels("javascript"))

// let myArr = [12,34,14,5,63,24]
// let largeVal = 0;
// for(let i = 0; i < myArr.length; i++){
                                                 //3
//     if(myArr[i] > largeVal){
//         largeVal = myArr[i]
//     }
// }
// console.log(largeVal)


// let myArr = [12,34,14,5,63,24,24]

// for(let i = 0; i < myArr.length; i++){
//     if(myArr[i] == myArr[i+1]){               //4
//         myArr.pop()
//     }
// }
// console.log(myArr)

// for(let i = 0; i < 100; i++){
//     if(i%3==0){
//         console.log('Fizz')
//         continue
//     } else if(i%5==0){
//        console.log('Buzz')                      //5
//     } else if(i%3==0 && i%5==0){
//         console.log('FizzBuzz')
//     } else {
//         console.log(i)
//     }
// }

// function isPalindrome(str){
//     let newNum = str.toString()
//     let palindrome = ""
//     for(let i = newNum.length - 1; i>=0; i--){
//         palindrome += newNum[i]
//     }
//     if(newNum === palindrome){                   // 6 
//         return true
//     } else {
//         return false
//     }
// }

// console.log(isPalindrome("madam"))

// let myArr = [1,2,3,4,5,6,7,9,11]

// let missingNumber = []

// for(let i = 0; i < myArr.length - 1; i++){
//     if(myArr[i+1] !== myArr[i] + 1){
//         missingNumber.push((myArr[i] + 1))
//     }                                            //7
// }

// for(let i = 0; i<missingNumber.length; i++){
//     console.log(missingNumber[i] , " ")
// }

// let myArr = [1,2,2,3,3,3,4,5]

// let currVal = 0;
// let arr = []
// let freq = 0;

// for(let i = 0; i<myArr.length; i++){
//     currVal = myArr[i]                                //8
//     for(let j = 0; j <myArr.length; j++){
//         if(currVal === myArr[j]){
//             freq++
//         }
//     }
//     arr.push({val:currVal,frequency:freq})
//     freq = 0
// }

// let count = arr[0].val;
// let maxFreq = arr[0].frequency;

// for(let k = 1; k < arr.length; k++){
//     if(arr[k].frequency > maxFreq){
//         maxFreq = arr[k].frequency;
//         count = arr[k].val;
//     }
// }

// console.log(count);

// function isAnagram(str1, str2){
//     let count = 0;
//     let newStr = Array.from(str1.toLowerCase())
//     let secStr = Array.from(str2.toLowerCase())
//     for(let i = 0; i<newStr.length; i++){
//         for(let j = 0; j<secStr.length;j++){
//             if(newStr[i]===secStr[j]){
//                 count++
//             }
//         }
//     }
//     if(count == newStr.length && count == secStr.length){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(isAnagram("aaa","abc"))