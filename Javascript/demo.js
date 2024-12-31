// var price = 150;
// var product = "Chips";
// var Tax = 250;
// console.log(product);
// var total = price + Tax;
// console.log(total);

// var Fruitname = "mango";
// var count = 3;
// var Price = 120;
// var total = count*Price;
// console.log(Fruitname);
// console.log(total);

var a = 34
// var b = a++
// console.log(b)  //answer is 34 when it see another a it will increment its value
var c = ++a
console.log(c)

var a = null
console.log(a)

function phone()
{
    console.log("This is Redmi phone")
    console.log("This is Oppo Phone")
    console.log("This is Vivo phone")
}
phone()

var factor = "Kamal"
var fplayer = "Dhoni"
var fmovie = "Anbe Sivam"
function favourite()
{
    console.log("Favourite Actor:"+factor)
    console.log("Favourite Player:"+fplayer)
    console.log("Favourite Movie:"+fmovie)
}
favourite()

'use Strict';
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if(hasDriversLicense)
{
    console.log('I can drive :D');
}

logger();

function logger()
{
    console.log('My name is Jonas');
}

logger();

function fruitProcessor(apples,oranges)
{
    console.log(apples,oranges);
    const juice = `juice with ${apples} apples and ${oranges}`;
    return juice;
}

const apple = fruitProcessor(4,5);
console.log(apple);

//dry code = The code should not get repeated

//function declaration
function calcAge1(birthYear)
{
    return 2037 - birthYear;
}

console.log(calcAge1(2004));

//function expression
const calcAge2 = function(birthyear)
{
    return 2037-birthyear;
}

const age2 = calcAge2(1991);

console.log(calcAge1(2004),age2)

//Arrow Function
const calcAge3 = birthyear => 2037-birthyear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthyear,firstname )=>{
    const age = 2024 - birthyear;
    const retirement = 65 - age;
    return `${firstname} retirement in ${retirement} years`;
}

console.log(yearsUntilRetirement(2004,'James'));
console.log(yearsUntilRetirement(2004,'Bob'));

const cutpieces = function(fruit)
{
    return fruit*4;
}

const fruitprocessor = function(apples,oranges)
{
    const applepieces = cutpieces(apples);
    const orangepieces = cutpieces(oranges);

    const juice = `Juice with ${applepieces} pieces of apple and ${orangepieces} pieces of orange`;
    return juice;
}

console.log(fruitprocessor(2,3));

const friends=['Michael','Steven','Peter']; //Primitive values are only immutal where array is an non-primitive 
console.log(friends);
console.log(friends.length);
console.log(friends[friends.length-1]); //return the last element
//we can't change the whole array
friends[2]='Jay';
console.log(friends);

friends.push('janes');
console.log(friends);

friends.unshift('John');
console.log(friends);

friends.pop();
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));

console.log(friends.includes('Jay'));

const calcTip = function (bill)
{
        if(bill>=50 && bill<=300)
        {
            var tips =  15/100*bill;
            return tips;
        }
        else
        {
            var tips = 20/100*bill;
            return tips;
        }
}
let tips =[];
let total=[];
const bills =[125,555,44];

for(var i=0;i<bills.length;i++)
{
 tips[i] = calcTip(bills[i]);
}

for(var i=0;i<bills.length;i++)
{
  total[i]=bills[i]+tips[i];
}


// const tips =[calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
// const total = [bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
console.log(bills,tips,total);

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037-1991,
    job: 'teacher',
    friends:['Michael','peter','Steven']
}

console.log(jonas.age);
console.log(jonas['lastName']);
// const nameKey = 'Name';
// console.log(jonas['last' + nameKey]);

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)



const mark = {
    fullName:'Mark Miller',
    mass:78,
    height:1.69,
    
    calcBMI: function(mass,height)
    {
        this.bmi = this.mass/(this.height*this.height);
        return this.bmi;
    }
    
}

const john = {
    fullName:'John Smith',
    mass:92,
    height:1.95,
    
    calcBMI: function(mass,height)
    {
        this.bmi = this.mass/(this.height*this.height);
        return this.bmi;
    }
}

mark.calcBMI();
john.calcBMI();

// console.log(mark.bmi,john.bmi);

if (mark.bmi > john.bmi)
{
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
}
else if (john.bmi > mark.bmi)
{
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})! `);
}

// for(let j= 1; j<= 0; j--)
// {
//     console.log(j, jonas[j]);
// }
for(let rep = 1; rep<=5; rep++)
{
    console.log(`Lifting weights repetition ${rep}`);
}

console.log("Hello");

let dice = Math.trunc(Math.random()*6)+1;
console.log(dice);