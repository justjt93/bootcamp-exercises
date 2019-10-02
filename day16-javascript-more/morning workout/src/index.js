const groceryItems = [bananas, milk, beer, meat];
// const slidingMenu = document.querySelector('#movingmenu');


// function ShowList()
// {
//   slidingMenu.classList.add('hiddenmenu');
//   slidingMenu.classList.remove('nowidth');
// }

// function HideList()
// {
//   slidingMenu.classList.remove('hiddenmenu');
//   slidingMenu.classList.add('nowidth');
// }

// document.getElementById('navmenu').addEventListener('mouseenter', ShowList);

// document.getElementById('navmenu').addEventListener('mouseleave', HideList);

/* Find the length of the longest ascending sequence of consecutive numbers in the array. */

// let longestArray = 1;
// let result = 0;


// const numbers = [18, 8, -24, 28, -17, 14, -10, 24, 12, -31, 19, 32, -14, -10, 13, 8, -15, -2, 17];


// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > numbers[i - 1]) {
//     longestArray++;
//   } else if (longestArray > result) {
//     result = longestArray;
//     longestArray = 1;
//   } else {
//     longestArray = 1;
//   }
// }


// console.log(longestArray);
// console.log(result);


// console.log(numbers.reverse());

// for (const i in numbers) {
//   if (numbers[i] > 0) {
//     result += numbers[i];
//   }
// }

// if (numbers[i] > numbers[i + 1] && numbers[i] > numbers[i - 1]) {
//   peakCheck.push(numbers[i]);
// } else if (numbers[i] < numbers[i + 1] && numbers[i] < numbers[i - 1]) {
//   valleyCheck.push(numbers[i]);
// }
