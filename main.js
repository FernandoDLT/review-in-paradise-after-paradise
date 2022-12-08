// Create a function that takes in an array. If the first number is 
// less than the last number alert  "Hi".
// If the first number is greater than the last number, alert "Bye".
// If they are equal, alert "We close in an hour".

// let nums = [10, 20, 30, 40, 50]
function checkFirstAndLast(arr) {
    if( arr[0] < arr[ arr.length - 1 ] ) {
        alert('Hi')
    }else if( arr[0] > arr[ arr.length -1 ] ) {
        alert('Bye')
    }else {
        alert('We close in an hour')
    }
}

// nums[0] // 10
// nums[4] // 50
// nums[nums.length - 1] // 50



let bestColors = ['green', 'blue', 'red', 'yellow']

for(let i = 0; i < bestColors.length;i++) {
    console.log(bestColors[i])
}

bestColors.forEach((x,i) => console.log(x))