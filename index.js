var finances = [
  ['Jan-2010', 867884],
  ['Feb-2010', 984655],
  ['Mar-2010', 322013],
  ['Apr-2010', -69417],
  ['May-2010', 310503],
  ['Jun-2010', 522857],
  ['Jul-2010', 1033096],
  ['Aug-2010', 604885],
  ['Sep-2010', -216386],
  ['Oct-2010', 477532],
  ['Nov-2010', 893810],
  ['Dec-2010', -80353],
  ['Jan-2011', 779806],
  ['Feb-2011', -335203],
  ['Mar-2011', 697845],
  ['Apr-2011', 793163],
  ['May-2011', 485070],
  ['Jun-2011', 584122],
  ['Jul-2011', 62729],
  ['Aug-2011', 668179],
  ['Sep-2011', 899906],
  ['Oct-2011', 834719],
  ['Nov-2011', 132003],
  ['Dec-2011', 309978],
  ['Jan-2012', -755566],
  ['Feb-2012', 1170593],
  ['Mar-2012', 252788],
  ['Apr-2012', 1151518],
  ['May-2012', 817256],
  ['Jun-2012', 570757],
  ['Jul-2012', 506702],
  ['Aug-2012', -1022534],
  ['Sep-2012', 475062],
  ['Oct-2012', 779976],
  ['Nov-2012', 144175],
  ['Dec-2012', 542494],
  ['Jan-2013', 359333],
  ['Feb-2013', 321469],
  ['Mar-2013', 67780],
  ['Apr-2013', 471435],
  ['May-2013', 565603],
  ['Jun-2013', 872480],
  ['Jul-2013', 789480],
  ['Aug-2013', 999942],
  ['Sep-2013', -1196225],
  ['Oct-2013', 268997],
  ['Nov-2013', -687986],
  ['Dec-2013', 1150461],
  ['Jan-2014', 682458],
  ['Feb-2014', 617856],
  ['Mar-2014', 824098],
  ['Apr-2014', 581943],
  ['May-2014', 132864],
  ['Jun-2014', 448062],
  ['Jul-2014', 689161],
  ['Aug-2014', 800701],
  ['Sep-2014', 1166643],
  ['Oct-2014', 947333],
  ['Nov-2014', 578668],
  ['Dec-2014', 988505],
  ['Jan-2015', 1139715],
  ['Feb-2015', 1029471],
  ['Mar-2015', 687533],
  ['Apr-2015', -524626],
  ['May-2015', 158620],
  ['Jun-2015', 87795],
  ['Jul-2015', 423389],
  ['Aug-2015', 840723],
  ['Sep-2015', 568529],
  ['Oct-2015', 332067],
  ['Nov-2015', 989499],
  ['Dec-2015', 778237],
  ['Jan-2016', 650000],
  ['Feb-2016', -1100387],
  ['Mar-2016', -174946],
  ['Apr-2016', 757143],
  ['May-2016', 445709],
  ['Jun-2016', 712961],
  ['Jul-2016', -1163797],
  ['Aug-2016', 569899],
  ['Sep-2016', 768450],
  ['Oct-2016', 102685],
  ['Nov-2016', 795914],
  ['Dec-2016', 60988],
  ['Jan-2017', 138230],
  ['Feb-2017', 671099]
];

//Use code to count the total number of months
let months = []
let income = []
// For loop for seperating months from array
for (let i = 0; i < finances.length; i++) {
  months.push(finances[i][0])
}
// For loop for sepearting income from array
for (let i = 0; i < finances.length; i++) {
  income.push(finances[i][1])
}

console.log("Total months: " + months.length)

//Add up all values from the income of each month 
let sum1 = 0
for (let i = 0; i < income.length; i++) {
  sum1 += income[i];
}
console.log("Total of income: $" + sum1)

// Calculate profit between each month, comparing each profit 
// Created a second list starting from item 1 to compare against income list
let secondlist = []
for (let i = 1; i < income.length; i++)
  secondlist.push(income[i])

// Total off all items in secondlist- all items in income
// Used length-1 to stop NaN on the last item in the total as there is 1 less item in second array

let total = []
for (let i = 0; i < income.length - 1; i++) {
  total.push(secondlist[i] - income[i])
}
// console.log("Array of profit/losses: " + total)


// Sum total of all profit and loss 
let sum = 0
for (let i = 0; i < total.length; i++) {
  sum += total[i];
}
// console.log("Net total Profit/Losses :$" + sum)


// Total/Number of months -1 (as you only count the number of changes between each month)
// Created variable to put months length into so that it is a number
// Checking that sum and monthsLength are numbers
// console.log(typeof(sum))
// console.log(typeof(monthsLength))
// toFixed(2) rounds the number to 2 decimal points https://bobbyhadz.com/blog/javascript-round-number-to-two-decimal-places
let monthsLength = months.length;
console.log("Average Change: $" + ((sum /= months.length - 1)).toFixed(2));

// FInd out the greatest and lowestprofit (find biggest number in finances variable) using if loop
// Combine finances string and number 
// var max = total[0];
// var min = total[0];
// for(i=0; i < total.length;i++){
//   if(total[i] >= max){
//     max = total[i]
//   }
//   if(total[i] <= min){
//     min = total[i]
//   }
// }

// // Need to add the month 
// console.log("Greatest Increase in Profits: $" + max)
// console.log("Greatest Decrease in Profits: $" + min)

let monthsNet = []
for (i = 0; i < months.length; i++) {

  monthsNet.push([months[i + 1], total[i]])
}
// Console.log this to check that it creates the output that I am able to work with
// console.log(monthsNet)

let max = monthsNet[0];
let min = monthsNet[0];

for (let i=0; i<monthsNet.length; ++i) {
  // Used const as it cannot be declared or updated like var
  const item = monthsNet[i];
  if (item[1] > max[1]) max = item;
  if (item[1] < min[1]) min = item;
}

// JSON.stringify helps to convert object into string 
// https://www.w3schools.com/js/js_json_stringify.asp#:~:text=Stringify%20a%20JavaScript%20Object&text=Use%20the%20JavaScript%20function%20JSON,string%20following%20the%20JSON%20notation.
console.log("Greatest Increase in Profits:", max[0],"("+"$"+JSON.stringify(max[1])+")")
console.log("Greatest Decrease in Profits:", min[0],"("+"$"+JSON.stringify(min[1])+")")