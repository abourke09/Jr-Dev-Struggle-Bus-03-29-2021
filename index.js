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

function isItPrime(i){

// Iterate from 2 to i-1 
// Checking for whether any other those numbers are evenly divisible
// If any numbers are evenly divisible, then stop and return false 
// If you reach i-1, then return true

  for ( i = 2; i <= i.length - 1; i++) {

  }

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
input: 7
output: 8

input: 5
output: 3

We'll want to start out for loop loop

Build an array of Fibonacci of length x
It's hard to build Fib without the first two integers, so lets start with those [0, 1] 
Pop off the last (x^th) item in the answer array
*/

function fibonacci(x) {

  let fib = [0, 1]

  for (i = 0; i < x; i++){

  }

  fib.pop()
}

// fibonacci(5)

/* 

5. Given an integer n, return any array that contains n unique integers that, when summed, equal 0

Negative integers are allowed 

Example
input: 6
output: [-3, -2, -1, 1, 2, 3]

input: 7
output: [-7, -2, -1, 1, 2, 3, 4]

If the input integer n is even, then:
  divide n by two, and build the array counting down from that number to it's negative twin (you'll count down by minusing 1 n times)
If n is odd, then, 
  the process is mostly the same but you include zero 
*/

function uniqueIntegers(n) {



}

/*
6. Given an array of integers, print out the median and the average

Median: when the integers are sorted from smallest to largest, the median is the integer in the middle (when odd). When even, it is the average of the two middle integers. 

Average: the sum of all of the integers, divided by the number of integers

Example
input: [-2, 17, 23, -99, 11]
sorted array: [-99, -2, 11, 17, 23]


First, sort the array

*/

function mathy(arr) {

  arr.sort(function(a, b){
    return a - b
  })

  let sum = arr.reduce(function(total, num){
    total + num
  })

  return sum
}

//mathy([-2, 17, 23, -99, 11])

/*
7. Given a string of numbers and dashes, format the string into a phone number
You'll always have 10 digits. Obviously it can be a random phone number.

Example
input: "-55-588-85-555"
output: "888-555-5555" 

convert the string to an array
sort the array to separate the numbers from the dashes
delete all but the first 10 elements of the array
input the dash - at the (use slice?)
arr.slice(0, 2).join("") + "-" + arr.slice(3, 5).join("") + "-" + arr.slice(6, 9).join("")
re-join the answer array into a string again
*/

function phoneNumber(s){
  s.split("").sort(function(a, b){
    return a - b
  })
  
  let first = s.slice(0, 2)
  let second = s.slice(3, 5)
  let third = s.slice(6, 9)
  
  first.join("") + "-" + second.join("") + "-" + third.join("")


}

//phoneNumber("-55-588-85-555")