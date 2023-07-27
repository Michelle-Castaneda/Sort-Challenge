// Your task is to sort an array of integer numbers by the product (multiplication) of the value and the index.
// For sorting the index starts at 1, NOT at 0!
// The sorting has to be ascending.
// The array will never be null and will always contain numbers.
// Example:
// Input: 23, 2, 3, 4, 5
// Product of value and index:
// 23 => 23 * 1 = 23 -> Output-Pos 4
// 2 => 2 * 2 = 4 -> Output-Pos 1
// 3 => 3 * 3 = 9 -> Output-Pos 2
// 4 => 4 * 4 = 16 -> Output-Pos 3
// 5 => 5 * 5 = 25 -> Output-Pos 5
// Output: 2, 3, 4, 23, 5
function sortByProductAndIndex(arr) {
    arr.sort((a, b) => (a * (arr.indexOf(a) + 1)) - (b * (arr.indexOf(b) + 1)));
    return arr;
  }
  
  
  const inputArray = [23, 2, 3, 4, 5];
  const sortedArray = sortByProductAndIndex(inputArray);
  console.log(sortedArray); 

//   function sortByProduct(arr) {
//     for (let num of arr) {
//         if (isNaN(+num)) {
//             return "sortByProduct takes an array of numbers";
//         }
//     }

//     const timesPosArr = arr.map((num, i) => {
//         return {value: num * (i + 1), index: i + 1};
//     });

//     timesPosArr.sort((a,b) => a.value - b.value);
    
//     const sortedArr = [];
//     for (let posNum of timesPosArr) {
//         sortedArr.push(posNum.value / posNum.index);
//     }

//     return sortedArr;
// }