/*
Junior Dev Struggle Bus MeetUp
Monday, March 29
Lead by Kirk Hilse

1. Given a string of words separated by spaces, return the string but with all of the words reversed.

Example 1
input: "The quick brown fox jumped over the lazy dog."
output: "dog. lazy the over jumped fox brown quick The"

Plain-English answer:
Iterate over the string
Separate words by spaces
Input into array
Build string from array in reverse

*/

function reverser(s) {
  let answer = []

  s.split(" ").forEach(function(w) {
    answer.unshift(w)
  })

  return answer.join(" ")
}

// reverser("The quick brown fox jumped over the lazy dog.")

/*
2. Determine whether an input number is prime or not

A prime is divisible by only 1 and itself.

Example
input: 17
output: true

input: 15
output: false

*/

function isItPrime(n){

// Iterate from 2 to n-1 
// Checking for whether any of those numbers are evenly divisible into n
// If any numbers are evenly divisible, then stop and return false 
// If you reach n-1, then return true

  for ( i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

// isItPrime(17)

/*

3. Autocomplete: Take an input and compare it to a dictionary of words.
Research: Tri 

As a user is typing input, take unput and compare to dictionary of words
Example
cat, care, cant 
ca -> cat, care, cant
0 -> c -> a -> t
0 -> c -> a -> r -> e


4. Given an input integer x, return the x^th number in the fibonacci sequence

Fibonacci is a sequence of number where each number is equal to the sum of the previous two numbers. ie 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

Example
input: 2
output: 1

input: 4
output: 2

input: 5
output: 3


Build an array of Fibonacci of length x
It's hard to build Fib without the first two integers, so lets start with those [0, 1] 
We'll want to start out with a for loop 
We can build a fib array by taking fib[i-1] and fib[i-2] to create fib[i]
Our For loop will start at i = 2

Our answer will be array[x - 1]
*/

function fibonacci(x) {

  let fib = [0, 1]

  for (i = 2; i < x; i++){
    let newValue = fib[i - 1] + fib[i - 2]
    fib.push(newValue)
  }

  return fib[x - 1]
}

// fibonacci(5)

/* 

5. Given an integer n, return any array that contains n unique integers that, when summed, equal 0

Negative integers are allowed 

Example
input: 6
output: [-3, -2, -1, 1, 2, 3]

input: 7
output: [-3, -2, -1, 0, 1, 2, 3]


I'll build the array as if it's an odd number, then take the zero out if it's actually even.
To controll for getting decimal places when dividing by 2, I'll round down 
Divide the input integer n by 2, then round down to the nearest whole number to get x
Using a for loop, start at i = -x and stop at i = x 
  Inside the for loop, build an array (declared outside the loop) with each element = i 
Outside of the For loop, slice/splice out zero between at index x, IF n is even
*/

function uniqueIntegers(n) {
  let arr = []
  let x = Math.floor(n/2)

  for (i = -x; i <= x; i++){
    arr.push(i)
  }

  (n % 2 === 0) && arr.splice(x, 1)
  
  return arr
  
}

//uniqueIntegers(13)

/*
6. Given an array of integers, print out the median and the average

Median: when the integers are sorted from smallest to largest, the median is the integer in the middle (when odd). When even, it is the average of the two middle integers. 

Average: the sum of all of the integers, divided by the number of integers

Example
input: [-2, 17, 23, -99, 11]
sorted array: [-99, -2, 11, 17, 23]
output, median: 11
output, average: -10 

First, sort the array, arr.sort((a, b) => a - b)
declare a count variable and set is equal to arr.length 
declare a sum variable and set is equal to arr.reduce((acc, curr) => acc + curr)
delcare and set median according to whether count is even or odd 
declare and set average = sum / count
Return [median, average]
*/

function mathy(arr) {

  arr.sort((a, b) => a - b)

  const count = arr.length
  const sum = arr.reduce((acc, curr) => acc + curr)

  let median = (count % 2 === 0) ? (arr[count/2] + arr[count/2 - 1])/2 : arr[Math.floor(count/2)] 

  let average = sum / count 

  return [median, average]
}

// mathy([-2, 17, 23, -99, 11])

/*
7. Given a string of numbers and dashes, format the string into a phone number
You'll always have 10 digits. Make sure not to lose the order of the numbers.

Example
input: "55-5111-2222"
output: "555-111-2222" 

convert the string to an array
filter the array to remove the randomly placed dashes
input the dash - at the indexes 3 and 7 (use slice(index, number to be removed, thing to add))
re-join the answer array into a string again
*/

function phoneNumber(s){
  let arr = s.split("")
  
  const nums = arr.filter((x) => x != "-")

  nums.splice(3, 0, "-")
  nums.splice(7, 0, "-")
  
  return nums.join("")
}

phoneNumber("55-5111-2222")