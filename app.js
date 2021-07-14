//             Chapter#1

// 1. Write a script to greet your website visitor using JS alert box.

//         alert()

// 2. Write a script to display following message on your web page: 

//         alert("error! please enter a valid passord")

// 3. Write a script to display following message on your web page: (Hint : Use line break) 

//         alert("welcome to js land..." , break , "Happy coding")

// 4. Write a script to display following messages in sequence: 

//         alert("welcome to js land...")
//         alert("Happy coding")
// 5. Generate the following message through browser’s developer console: 

//         alert("Hello! I can rum JS through brosers developer console")


// 6. Make use of alerts in your new/existing HTML & CSS project. 

// 7. Practice placement of <script></script> element in following sections of your project in exercise 6: 

// a. Head 

// b. Body (before your page’s HTML) 

// c. Body (inside your page’s HTML) 

// d. Body (after your page’s HTML) 



//                 Chapter#2

// 1. Declare a variable called username. 

//                 var username

// 2. Declare a variable called myName & assign to it a string that represents your Full Name. 

//                 var myName = "Hassan"

// 3. Write script to 
// a) Declare a JS variable, titled message. 

//                 var js = "welcome to js land..."

// b) Assign “Hello World” to variable message 

//                 var h = "Hello world"

// c) Display the message in alert box. 

//                 alert(js)
//                 alert(h)

// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes. 

//                 alert("Hassan")
//                 alert("23 years old")
//                 alert("Roll number 123")

// 5. Write a script to display the following alert using one JS variable: 

//                 alert("PIZZA", break,"PIZZ", break, "PIZ", break ,"PI", break, "P")

// 6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). 
// Show the blow mentioned message in an alert box.(Hint: use string concatenation) 

//                  var email = "abc.gmail.com"
//                  alert("My email address is" + email)

// 7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box: 

//                   var book = "A smarter ay to learn javaScript"
//                   alert("I am trying to learn from the book " + book)

// 8. Write a script to display this in browser through JS 

//                 Document.write("Yah! I can rite HTML content throgh javaScript")

// 9. Store following string in a variable and show in alert and browser through JS 

//                 var js = “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬” 
//                 alert(js)




//                 Chapter#3

// 1. Declare a variable called age & assign to it your age. Show your age in an alert box. 

//                 var age = "I am 23 years old"
//                 alert(age)

// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her 
// number of visits on your web page. For example: “You have visited this site N times”. 

//                  alert("You visited this site N times")
// 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser: 

//                 var birthyear = 1998
//                 alert("My birth year is"+ birthyear + break + "Data type of my declared variable is number")

// 4. A visitor visits an online clothing store 
// www.xyzClothing.com . Write a script to store in variables 
// the following information: 
// a. Visitor’s name 
// b. Product title 
// c. Quantity i.e. how many products a visitor wants to order 
// Show the following message in your browser: 
// “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”. 

//                 var vname = "Khan"
//                 var ptitle = "pents"
//                 var Quantity = 6
//                 alert(vname + "Ordered" + Quantity + ptitle + "On my shop")



//                 Chapter#4

// 1. Declare 3 variables in one statement. 

//                 var a,b,c

// 2. Declare 5 legal & 5 illegal variable names. 

//                 var a,b,c,d,e
//                 var $name , 8a , +name , %z , *topic

// 3. Display this in your browser 
// a)  A heading stating “Rules for naming JS variables” 

//                 document.write("Rules for naming JS varibles")
// b)  Variable names can only contain ___character___, ___underscor___, ___number after charecter___ and ___Special symbol after character___. 
// For example $my_1stVariable 
// c) Variables must begin with a ___abc___, ___$name___ or ___name__. 
// For example $name, or name 
// d) Variable names are case ____yes_____ 
// e) Variable names should not be JS ____no_____   


//                 Chapter#5

//  1. write a program that take two numbers & add them in a new variable.
//  show the result in your browser.  

//             var a = 5
//             var b = 4
//             var c = a+b
//             document.write("Sum of "+a+" and "+b+ " is "+c )

// 2. Repeat task1 for subtraction, multiplication, division & modulus. 

//             var a = 5
//             var b = 4
//             var c = a-b
//             var d = a*b
//             var e = a%b
//             document.write("Subtraction of "+a+" and "+b+ " is "+c )
//             document.write("Multiplition of "+a+" and "+b+ " is "+d )
//             document.write("Modulus of "+a+" and "+b+ " is "+e )


// 3. Do the following using JS Mathematic Expressions 
// a. Declare a variable. 
// b. Show the value of variable in your browser like
//  “Value after variable declaration is: ??”. 
//  c. Initialize the variable with some number. 
//  d. Show the value of variable in your browser like 
//  “Initial value: 5”. e. Increment the variable. 
//  f. Show the value of variable in your browser like 
//  “Value after increment is: 6”. 
//  g. Add 7 to the variable. 
//  h. Show the value of variable in your browser like 
//  “Value after addition is: 13”. 
//  i. Decrement the variable. 
//  j. Show the value of variable in your browser like 
//  “Value after decrement is: 12”. 
//  k. Show the remainder after dividing the variable’s value by 3.  
//  l. Output : “The remainder is : 0”. 

//             var a
//             document.write(a)
//             a=5
//             document.write(a)
//             a++
//             document.write(a)
//             a = a + 7
//             document.write(a)
//             a--
//             document.write(a)
//             a = a % 3
//             document.write(a)

// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & 
// calculate the cost of buying 5 tickets to a movie. Example output: 

//             var ticket = 600
//             var n = 5
//             var t = ticket*n
//             document.write(t)

// 5. Write a script to display multiplication table of any number in your browser. E.g 

//             var t = 7
//             document.write(t + " x 1 = " + t*1)
//             document.write(t + " x 2 = " + t*2)
//             document.write(t + " x 3 = " + t*3)
//             document.write(t + " x 4 = " + t*4)
//             document.write(t + " x 5 = " + t*5)
//             document.write(t + " x 6 = " + t*6)
//             document.write(t + " x 7 = " + t*7)
//             document.write(t + " x 8 = " + t*8)
//             document.write(t + " x 9 = " + t*9)
//             document.write(t + " x 10 = " + t*10)


// 6. The Temperature Converter: It’s hot out! Let’s make a 
// converter based on the steps here. 
// a.  Store a Celsius temperature into a variable. 
// b. Convert it to Fahrenheit & output “NNoC is NNoF”. 
// c. Now store a Fahrenheit temperature into a variable. 
// d. Convert it to Celsius & output “NNoF is NNoC”. 
// Conversion Formulae: 

//             var far = 77
//             var cel = 23
//             var fartocel = (far-32)*(5/9)
//             var celtofar = (cel*9/5)+32 
//             document.write(" fahrenheit to celcius " + fartocel )
//             document.write(" celcius to fahrenheit" + celtofar )

// 7.  Write a program to implement checkout process of a 
// shopping cart system for an e-commerce website. 
// Store the following in variables 

// a. Price of item 1 
// b. Price of item 2 
// c. Ordered quantity of item 1 
// d. Ordered Quantity of item 2 
// e. Shipping charges 
// Compute the total cost & show the receipt in your browser. 

//             var item1 = 2500
//             var item2 = 3250
//             var Noitem1 = 5
//             var Noitem2 = 3
//             var cost1 = item1*Noitem1
//             var cost2 = item2*Noitem2
//             var totalcost = cost1+cost2
//             document.write(" Price of item 1 = "+item1)
//             document.write(" Quantity of item 1 = "+Noitem1)
//             document.write(" Price of item 2 = "+item2)
//             document.write(" Quantity of item 2 = "+Noitem2)
//             document.write(" The total cost of your order is " +totalcost)

// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser 

//             var totalmarks = 500
//             var marksobtained = 350
//             var per = marksobtained*100/500
//             document.write(" percentage = "+per)

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee) 

//             var us = 104.80
//             var riyal = 28
//             var rs = us*10 + riyal*25
//             document.write(" Pakistani ruppes = "+rs)

// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence: 
// a. Add 5 b. Multiply by 10 c. Divide the result by 2 Perform all calculations in a single expression 

//             var a = 7
//             var cal = (((a+5)*10)/2)
//             Document(cal)

// 11. The Age Calculator: Forgot how old someone is? Calculate it! a. Store the current year in a variable. 
// b. Store their birth year in a variable. c. Calculate their 2 possible ages based on the stored values. 
// Output them to the screen like so: “They are either NN or NN years old”. 

//             var byear = 1998
//             var current = 2021
//             var age = current - byear
//             document.write(" Age = "+age)

// 12. The Geometrizer: Calculate properties of a circle. 
// a. Store a radius into a variable. 
// b. Calculate the circumference based on the radius, and output 
// “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142) 
// Calculate the area based on the radius, and output “The  area is NN”. (Hint : Area of a circle = π r2, π = 3.142) 

//             var rad = 12
//             var circle = 2*3.142*r
//             var area = 3.142*r*r
//             document.write(" Circu,ference of a circle is = "+circle)
//             document.write(" Area of the circle = "+area)

// 13. The Lifetime Supply Calculator: Ever wonder how much a 
// “lifetime supply” of your favorite snack is? Wonder no more. 
// a. Store your favorite snack into a variable 
// b. Store your current age into a variable. 
// c. Store a maximum age into a variable. 
// d. Store an estimated amount per day (as a number). 
// e. Calculate how many would you eat total for the rest of your life. 
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”. 

//             var snack = " lays "
//             var age = 21
//             var maxage = 65
//             var amount = 10
//             var totalamount = (maxage-age)*365*10
//             document.write(" total eating = " +totalamount)

//                 Chapter#6-9

// 1. Write a program to take a number in a variable, 
// do the required arithmetic to display the following 
// result in your browser:  

//             var a = 10
//             document.write(" the value of a is "+a+" <br> ")
//             document.write(" Value of ++a is " + ++a + " <br> " )
//             document.write(" Now the value of a is "+a+ " <br> ")
//             document.write(" Value of a++ is " + a++ + " <br> " )
//             document.write(" Now the value of a is "+a+ " <br> ")
//             document.write(" Value of --a is " + --a + " <br> " )
//             document.write(" Now the value of a is "+a+ " <br> ")
//             document.write(" Value of a-- is " + a-- + " <br> " )
//             document.write(" Now the value of a is "+a+ " <br> ")

// 2. What will be the output in variables a, b & result after execution 
// of the following script: var a = 2, b = 1;
// var result = --a - --b + ++b + b--; 
// Explain the output at each stage: --a; --a - --b; --a - --b + ++b;
//  --a - --b + ++b + b--; 

//  var result = --a - --b + ++b + b--; 
//                 1 -  0  +  1  +  1   = 3

// 3. Write a program that takes input a name from user & greet the user.

//             var a = prompt(" Enter your name ")
//             alert(" HI SIR " + a)

// 5. Write a program to take input a number from user 
// & display it’s multiplication table on your browser. 
// If user does not enter a new number, multiplication 
// table of 5 should be displayed by default. 

//             var t = prompt(" Table of ")
//             if(t != 0){
//             Document.write(t + " x 1 = " + (t*1))
//             Document.write(t + " x 2 = " + (t*2))
//             Document.write(t + " x 3 = " + (t*3))
//             Document.write(t + " x 4 = " + (t*4))
//             Document.write(t + " x 5 = " + (t*5))
//             Document.write(t + " x 6 = " + (t*6))
//             Document.write(t + " x 7 = " + (t*7))
//             Document.write(t + " x 8 = " + (t*8))
//             Document.write(t + " x 9 = " + (t*9))
//             Document.write(t + " x 10 = " + (t*10))
//             }
//             else
//             {
//                 Document.write(5 + " x 1 = " + (5*1))
//                 Document.write(5 + " x 2 = " + (5*2))
//                 Document.write(5 + " x 3 = " + (5*3))
//                 Document.write(5 + " x 4 = " + (5*4))
//                 Document.write(5 + " x 5 = " + (5*5))
//                 Document.write(5 + " x 6 = " + (5*6))
//                 Document.write(5 + " x 7 = " + (5*7))
//                 Document.write(5 + " x 8 = " + (5*8))
//                 Document.write(5 + " x 9 = " + (5*9))
//                 Document.write(5 + " x 10 = " + (5*10))
//                 }

// 6. Take 
// a) Take three subjects name from user and store them in 3 different variables. 
// b) Total marks for each subject is 100, store it in another variable. 
// c) Take obtained marks for first subject from user and stored
// it in different variable. 
// d) Take obtained marks for remaining 2 subjects from user 
// and store them in variables. 
// e) Now calculate total marks and percentage and show the 
// result in browser like this.(Hint: user table) 

//         var sub1 = prompt("subject 1 = ")
//         var sub2 = prompt("subject 2 = ")
//         var sub3 = prompt("subject 3 = ")
//         var totalmarks = 300
//         var mark1 = prompt(" marks obtained in " + sub1)
//         var mark2 = prompt(" marks obtained in " + sub2)
//         var mark3 = prompt(" marks obtained in " + sub3)
//         var obtainedmarks = mar1+mark2+mark3
//         var per = obtainedmarks*100/totalmarks
//         document.write(" Total marks obtained = " + obtainedmarks)
//         document.write(" Percentage = " + per)


// Chapter#9-11

// 1. Write a program to take “city” name as input from user. 
// If user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights” 

//                 var city = prompt(" city name ")
//                 if (city == Karachi)
//                 Document.write('Welcome to city of lights')
//                 else
//                 Document.write('Sorry')

// 2. Write a program to take “gender” as input from user. 
// If the user is male, give the message: Good Morning Sir. 
// If the user is female, give the message: Good Morning Ma’am. 

//                 var gender = prompt(" gender ")
//                 if(gender == male)
//                 document.write(" Good Morning sir ")
//                 else
//                 document.write(" Good Morning Maam ")

// 3. Write a program to take input color of road traffic signal
//  from the user & show the message according to this table: 

// Signal color    Message 
// Red Must        Stop 
// Yellow          Ready to move 
// Green           Move now   

//                 var signal = prompt(" Enter signal color ")
//                 if(signal == red)
//                 document.write(" Stop ")
//                 else if (signal == Yellow)
//                 document.write(" Ready to move")
//                 else
//                 document.write(" Move now")

// 4. Write a program to take input remaining fuel in car (in litres) 
// from user. If the current fuel is less than 0.25litres, 
// show the message “Please refill the fuel in your car” 

//                 var fuel = prompt(" Enter reamining fuel in car ")
//                 if(fuel < 0.25)
//                 document.write("Please refill the fuel in your car")
//                 else
//                 document.write("Happy Drive")

// 5. Run this script, & check whether alert message would be 
// displayed or not. Record the outputs. 
// a. var a = 4; if (++a === 5){ alert("given condition for variable a is true"); } 

// b. var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); } 

// c. var c = 12; if (c++ === 13){ alert("condition 1 is true"); } if (c === 13){ alert("condition 2 is true"); } 
// if (++c < 14){ alert("condition 3 is true"); } if(c === 14){ alert("condition 4 is true"); } 

// d. var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ alert("The cost equals"); } 

// e. if (true){ alert("True"); } if (false){ alert("False"); } 

// f. if("car" < "cat"){ alert("car is smaller than cat"); } 

//         given condition for variable a is true

//         The cost equals

//         car is smaller than cat

// 6. Write a program to take input the marks obtained in three subjects 
// & total marks. Compute & show the resulting percentage on your page. 
// Take percentage & compute grade as per following table: 
// Show the total marks, marks obtained, percentage, grade & remarks like: 

//         var mark1 = prompt(" marks obtained in math" )
//         var mark2 = prompt(" marks obtained in english" )
//         var mark3 = prompt(" marks obtained in urdu" )
//         var totalmarks = prompt(" total marks " )
//         var sum = mark1+mark2+mark3
//         var per = sum*100/totalmarks
//         Document.write("Total marks = " + totalmarks)
//         Document.write("Obtained marks = " + sum)
//         Document.write("Percentage = " + per)
//         if(per<50){
//                 Document.write('Grade fail') 
//                 Document.write("Remarks Very Bad result")
//                }
//        else if(per>=50 && per < 60){ 
//                 Document.write("Grade C")
//                 Document.write("Remarks Need to improve")
//        } 
//        else if(per>=60 && per < 70){ 
//                 Document.write("Grade B") 
//                 Document.write("Remarks Not Bad")
//        } 
//        else if(per>=70 && per < 80){ 
//                 Document.write("Grade A")
//                 Document.write("Remarks Good result")
//        } 
//        else if(per>=80 && per <= 100){ 
//                 Document.write("Grade A+") 
//                 Document.write("Remarks Excellent")
//        } 
//        else{ 
//                 Document.write("Error")
//        } 


// 7. Guess game: Store a secret number (ranging from 1 to 10) 
// in a variable. Prompt user to guess the secret number. 
// a. If user guesses the same number, show “Bingo! Correct answer”. 
// b. If the guessed number +1 is the secret number, show 
// “Close enough to the correct answer”. 

//        n = 5
//        var a = prompt("select any number beteen 1 to 10")
//        if(a==n)
//        Document.write("Bing!")
//        else if(a==(n+1))
//        Document.write("Close enough to the correct answer")
//        else
//        Document.write("try again")


// 8. Write a program to check whether the given number is divisible by 3. 
// Show the message to the user if the number is divisible by 3. 

//        var num = prompt("enter any number")
//        if(num%3==0)
//        Document.write(num + "is divisible by 3")
//        else
//        Document.write(num + " Not divisible by 3")

// 9. Write a program that checks whether the given input is an 
// even number or an odd number. 

//        var no = prompt("enter number")
//        if(no%2==0)
//        Document.write("Even Number")
//        else
//        Document.write("Odd number")

// 10. Write a program that takes temperature as input and shows a 
// message based on following criteria a. T > 40 then “It is too hot 
// outside.” b. T > 30 then “The Weather today is Normal.”
//  c. T > 20 then “Today’s Weather is cool.” d. T > 10 then “OMG! 
//  Today’s weather is so Cool.” 

//        var t = prompt("Enter temperature")
//        if(t>40)
//        Document.write("It is too hot outside")
//        else if(t>30)
//        Document.write("The Weather today is Normal.")
//        else if(t>20)
//        Document.write("Today’s Weather is cool.")
//        else if(t>10)
//        Document.write("“OMG! Today’s weather is so Cool.”") 

// 11. Write a program to create a calculator for +,-,*, / & % 
// using if statements. Take the following input: 
// a. First number 
// b. Second number 
// c. Operation (+, -, *, /, %) 
// Compute & show the calculated result to user. 

//        var a = prompt("Enter first Number")
//        var b = prompt("Enter 2nd number")
//        var c = prompt("Enter operation")
//        if(c == '+'){
//                 document.write(a + ' + ' + b + ' = ' + (a+b))
//        }
//        else if(c == '*'){
//                 document.write(a + ' x ' + b + ' = ' + (a*b))
//         }
//         else if(c == '/'){
//                 document.write(a + ' / ' + b + ' = ' + (a/b))
//         }
//         else if(c == '-'){
//                 document.write(a + ' - ' + b + ' = ' + (a-b))
//         }
//         else if(c == '%'){
//                 document.write(a + ' % ' + b + ' = ' + (a%b))
//         }

//         else{
//                 document.write("Operator unfound")
//         }


//                 Chapter#12-13


// 1. Write a program that takes a character (number or string) 
// in a variable & checks whether the given input is a number, 
// uppercase letter or lower case letter. 
// (Hint: ASCII codes:- A=65, Z=90, a=97, z=122). 

//         var a = prompt('Enter Character')
//         if(a >= 65 && a<= 90){
//                 Document.write('UpperCase letter')
//         }
//         else if(a >= 97 && a<= 122){
//                 document.write('LowerCase Letter')
//         }
//         else{
//                 document.write("Special character OR Number")
//         }

// 2. Write a JavaScript program that accept two integers and display 
// the larger. Also show if the two integers are equal. 

//         var a = prompt('Enter first integer')
//         var b = prompt('Enter Second integer')
//         if(a == b){
//                 document.write("Both integers are same")
//         }
//         else if(a > b){
//                 document.write(a)
//         }
//         else if(b > a){
//                 document.write(b)
//         }
//         else{
//                 document.write('Invalid')
//         }

// 3. Write a program that takes input a number from user & state 
// whether the number is positive, negative or zero. 

//         var a = prompt('Enter any integer')
//         if(a == 0){
//                 document.write('Zero')
//         }
//         else if(a < 0){
//                 document.write('Negative number')
//         }
//         else if(a > 0){
//                 document.write('Positive number')
//         }
//         else{
//                 document.write('Invalid')
//         }

// 4. Write a program that takes a character (i.e. string of length 1) 
// and returns true if it is a vowel, false otherwise 

//         var str = prompt('Enter string of length 1')
//         if(str == 'a' || str == 'A' || str == 'e' || str == 'E' || str == 'i' 
//         || str == 'I' || str == 'o' || str == 'O' || str == 'u' || str == 'U'){
//                 Document.write('true')
//         }
//         else{
//                 Document.write('false')
//         }


// 5. Write a program that 
// a. Store correct password in a JS variable. 
// b.  Asks user to enter his/her password 
// c.  Validate the two passwords: 
// i. Check if user has entered password. If not, then give message 
// “ Please enter your password” 
// ii. Check if both passwords are same. If they are same, 
// show message “Correct! The password you entered matches the 
// original password”. Show “Incorrect password” otherwise. 

//         var a = 'hassan'
//         var js = prompt('Enter password')
//         if(js.length == 0){
//                 document.write('Please! Enter your password ')
//         }
//         else if(js == a){
//                 document.write('Correct! The password you entered matches the original password')
//         }
//         else{
//                 document.write('Incorrect password')
//         }

// 6. This if/else statement does not work. Try to fix it: 
//         var greeting; 
//         var hour = 13; 
//         if (hour < 18) { 
//                 greeting = "Good day"; 
//         else 
//         greeting = "Good evening"; } 

//         var greeting; 
//         var hour = 13; 
//         if (hour < 18) { 
//                 greeting = "Good day"; 
//         }
//         else { 
//                 greeting = "Good evening";
//         } 


// 7. Write a program that takes time as input from user in 24 hours clock 
// format like: 1900 = 7pm. Implement the following case using if, 
// else & else if statements 

//         var time = prompt('Enter hours in 24 hours format')
//         if(time >= 0000 && time <1200){
//                 document.write('Good Morning')
//         }
//         else if(time >= 1200 && time <1700){
//                 document.write('Good Afternoon')
//         }
//         else if(time >= 1700 && time <2100){
//                 document.write('Good Evening')
//         }
//         else if(time >= 2100 && time <2359){
//                 document.write('Good Night')
//         }
//         else{
//                 document.write('Invalid time')
//         }


//                 Chapter#14-16

// 1. Declare an empty array using JS literal notation to store student 
// names in future. 

//         var arr = []

// 2. Declare an empty array using JS object notation 
// to store student names in future. 

//         var arr = []

// 3. Declare and initialize a strings array. 

//         var a = ['apple' , 'mango' , 'banana']

// 4.  Declare and initialize a numbers array. 

//         var a = [1,2,3,7,9]

// 5.  Declare and initialize a boolean array. 

//         var a = [0,1]

// 6. Declare and initialize a mixed array. 

//         var arr = [4,8,'ali','mango',9]

// 7. Declare and Initialize an array and store available education 
// qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, 
// M. Phil., PhD). Show the listed qualifications in your browser like: 

//         var edu = ['SSC' , 'HSC' , 'BSC' , 'BS' , 'BCOM' , 'MS' , 'M.phil' , 'phD']
//         Document.write('Qualifications')
//         document.write('1.) ' + edu[0])
//         document.write('2.) ' + edu[1])
//         document.write('3.) ' + edu[2])
//         document.write('4.) ' + edu[3])
//         document.write('5.) ' + edu[4])
//         document.write('6.) ' + edu[5])
//         document.write('7.) ' + edu[6])
//         document.write('8.) ' + edu[7])


// 8. Write a program to store 3 student names in an array.
// Take another array to store score of these three students. 
// Assume that total marks are 500 for each student, 
// display the scores & percentages of students like:  

//         var a = ['ali' , 'basit' , 'samad']
//         var arr = [350 , 450 , 360]
//         document.write('score of ' + a[0] + ' is ' + arr[0] + '. percentage: ' + (arr[0]*100/500))
//         document.write('score of ' + a[1] + ' is ' + arr[1] + '. percentage: ' + (arr[1]*100/500))
//         document.write('score of ' + a[2] + ' is ' + arr[2] + '. percentage: ' + (arr[2]*100/500))

// 9. Initialize an array with color names. Display the array elements 
// in your browser. 
// a. Ask the user what color he/she wants to add to the beginning 
// & add that color to the beginning of the array. 
// Display the updated array in your browser. 
// b. Ask the user what color he/she wants to add to the end & 
// add that color to the end of the array. 
// Display the updated array in your browser. 
// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser. 
// d. Delete the first color in the array. 
// Display the updated array in your browser. 
// e. Delete the last color in the array. 
// Display the updated array in your browser. 
// f. Ask the user at which index he/she wants to add a color & color name. 
// Then add the color to desired position/index. . 
// Display the updated array in your browser. 
// g. Ask the user at which index he/she wants to delete color(s) 
// & how many colors he/she wants to delete. Then remove the same number 
// of color(s) from user-defined position/index. . 
// Display the updated array in your browser. 

//         var a = ['green' , 'yellow' , 'red']
//         a.unshift('pink')
//         document.write(a)
//         a.push('blue')
//         document.write(a)
//         a.unshift('purple' , 'golden')
//         document.write(a)
//         a.shift()
//         document.write(a)
//         a.pop()
//         document.write(a)
//         a.splice(2,0,'light blue')
//         document.write(a)
//         a.splice(1,3)
//         document.write(a)


// 10. Write a program to store student scores in an array & sort the 
// array in ascending order using Array’s sort method. 

// var a = ['356' , '420' , '289' , '365' , '325']
// a.sort()
// document.write(a);

// 11. Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities array. 

//         var city = ['karachi' , 'lahore' , 'sukkur']
//         var selectedCities = []
//         selectedCities = city
//         document.write(selectedCities)

// 12.  Write a program to create a single string from the below 
// mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; 
// (Use array’s join method) 

// var arr = ["This " , " is " , " my " , " cat"]
// var a = arr.join('')
// document.write(a)

// 13. Create a new array. Store values one by one in such a way 
// that you can access the values in the order in which they were stored. 
// (FIFO-First In First Out) 

// var a = [prompt() , prompt() , prompt() , prompt() , prompt()]
// document.write(a)


// 14. Create a new array. Store values one by one in such a way that you
//  can access the values in reverse order. (Last InFirst Out) 

// var a = [prompt() , prompt() , prompt() , prompt() , prompt()]
// document.write(a.reverse())


// 15. Write a program to store phone manufacturers (Apple, Samsung, 
//        Motorola, Nokia, Sony & Haier) in an array. 
//        Display the following dropdown/select menu in your browser 
//        using document.write() method: 

// var phone = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony' , 'Haier']
// document.write(phone)


// Chapter#17-20

// 1. Declare and initialize an empty multidimensional array. 
// (Array of arrays)  

//         var a = ['a' , 'b' , ['c' , 'd']]

// 2. Declare and initialize a multidimensional array
//  representing the following matrix:  

// var a = [[0,1,2,3] , [1,0,1,2] , [2,1,0,1]]
// for(var i = 0; i < a.length; i++){
//         document.write(a[i] + '<br>')
// }

// 3. Write a program to print numeric counting from 1 to 10.  

// for(var i = 1; i <= 10; i++){
//         document.write(i + '<br>')
// }

// 4.  Write a program to print multiplication table of any number
//  using for loop. Table number & length should be taken as
//   an input from user.  

// var t = prompt('Table of ')
// var n = prompt('how many times')
// for(var i = 1; i <= n; i++){
//         document.write(t + ' x ' + i + ' = ' + (t*i) + '<br>')
// }

// 5. Write a program to print items of the following array using for 
// loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”] 

// var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry']
// for(var i = 0; i < fruits.length; i++){
//         document.write(fruits[i] + '<br>')
// }

// 6. Generate the following series in your browser. See example output. 
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k 

// document.write('Counting <br>')
// for(var i = 1; i <= 15; i++){
//         document.write(i + ' , ')
// }

// document.write('<br> Reverse Counting <br>')
// for(var i = 10; i >= 1; i--){
//         document.write(i + ' , ')
// }

// document.write('<br> Even <br>')
// for(var i = 0; i <= 20; i++){
//         if(i%2 == 0)
//         document.write(i + ' , ')
// }

// document.write('<br> Odd <br>')
// for(var i = 0; i <= 20; i++){
//         if(i%2 == 1)
//         document.write(i + ' , ')
// }

// document.write('<br> Even <br>')
// for(var i = 1; i <= 20; i++){
//         if(i%2 == 0)
//         document.write(i + 'k , ')
// }

// 7. You have an array A = [“cake”, “apple pie”, “cookie”,
//          “chips”, “patties”] Write a program to enable 
//          “search by user input” in an array. After searching, 
//          prompt the user whether the given item is found in the 
//          list or not. Example: 

// var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
// var s = prompt('Search in an array')
// var flag=0
// for(var i = 0; i < A.length; i++){
//         var f
//         if(s == A[i]){
//                 flag++
//         }
// }
// if(flag > 0){
//         document.write('Found')
// }
// else{
//         document.write('Not Found')
// }

// 8. Write a program to identify the largest number in the given array. 
// A = [24, 53, 78, 91, 12]. 


// var A = [24, 53, 78, 91, 12]
// var flag = A[0]
// for(var i = 0; i < A.length; i++){
//         if(A[i] >= flag){
//         flag = A[i]
//         }
// }
// document.write('Largest Number = ' + flag )

// 9. Write a program to identify the smallest number in the given array. 
// A = [24, 53, 78, 91, 12] 

// var A = [24, 53, 78, 91, 12]
// var flag = A[0]
// for(var i = 0; i < A.length; i++){
//         if(flag >= A[i]){
//                 flag = A[i]
//         }
// }
// document.write('Smallest Number = ' + flag )

// 10. Write a program to print multiples of 5 ranging 1 to 100. 

// var a = 5
// for(i = 1; i <= 100; i++){
//         if(i%a == 0){
//                 document.write(i + ' , ')
//         }
// }


// Chapter#21-25

// 1. Write a program that takes two user inputs for first and last name 
// using prompt and merge them in a new variable titled fullName. 
// Greet the user using his full name. 

//         var firstname = prompt('Enter your firstname')
//         var lastname = prompt('Enter your last name')
//         var fullname = firstname + lastname
//         alert(fullname)

// 2. Write a program to take a user input about his favorite mobile phone
//  model. Find and display the length of user input in your browser 

// var fav = prompt('Enter your favourite mobile name')
// var l = fav.length
// document.write(l)

// 3. Write a program to find the index of letter “n” in the word 
// “Pakistani” and display the result in your browser .

// var word = 'pakistani'
// var ind = 'n'
// for(var i = 0; i < word.length ; i++){
//         if(word[i] == ind)
//         alert(i)
// }


// 4. Write a program to find the last index of letter “l” in the 
// word “Hello World” and display the result in your browser. 

// var word = 'Hello World'
// var ind = word.lastIndexOf('l')
// alert(ind)

// 5. Write a program to find the character at 3rd index in the word 
// “Pakistani” and display the result in your browser. 

//         var word = 'pakistani'
//         var char = word.charAt(3)
//         alert(char)

// 6. Repeat Q1 using string concat() method. 

// var firstname = prompt('Enter your firstname')
// var lastname = prompt('Enter your last name')
// var fullname =  firstname.concat(lastname)
// alert(fullname)

// 7. Write a program to replace the “Hyder” to “Islam” in the word 
// “Hyderabad” and display the result in your browser. 

// var word = 'Hyderabad'
// var word2 = 'Islam'
// var newWord = word.replace('Hyder' , word2)
// alert(newWord)

// 8. Write a program to replace all occurrences of “and” in the string 
// with “&” and display the result in your browser. var message = 
// “Ali and Sami are best friends. They play cricket and football 
// together.”; 

// var message = 'Ali and Sami are best friends. They play cricket and football together.' ;
// var newMessage = message.replace(/and/g , '&')
// alert(newMessage)

// 9. Write a program that converts a string “472” to a number 472. 
// Display the values & types in your browser. 

// var str = '472'
// alert(+str)
// alert(typeof(Number(str)))

// 10. Write a program that takes user input. Convert and show the input 
// in capital letters. 

// var name = prompt('Enter your name')
// var name = name.toUpperCase()
// alert(name)

// 11. Write a program that takes user input. Convert and show the input
//  in title case. 

//  var name = prompt('Enter your name')
//  var name = name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase()
//  alert(name)


// 12. Write a program that converts the variable num to string. 
// var num = 35.36 ; Remove the dot to display “3536” display in 
// your browser. 

//  var num = 35.36
//  var r = '.'
//  var num = num.toString()
//  for(i = 0; i < num.length; i++){
//         if(num.slice(i,i+1) == r){
//                 var x = num.slice(0,i)
//                 var y = num.slice(i+1)  
//                 alert(x + y)
//                 break       
//         }
//  }

// 13. Write a program to take user input and store username in a 
// variable. If the username contains any special symbol among 
// [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ . 

// var username = prompt('Enter your name')
// for(i = 0; i < username.length; i++){
// if(username[i] == '!' || username[i] == '@' || username[i] == '.' || username[i] == ','){
//         alert('Please Enter valid name')
//         break
// }
// }


// 14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, 
// “patties”] Write a program to enable “search by user input” 
// in an array. After searching, prompt the user whether the 
// given item is found in the list or not. Note: Perform case 
// insensitive search. Whether the user enters cookie, Cookie,
// COOKIE or coOkIE, program should inform about its 
// availability. Example: 

//         var A = ['cake' , 'apple pie' , 'cookie' , 'chips' , 'patties']
//         var search = prompt('what do you want to search')
//         for(i = 0; i < A.length; i++){
//         if(search == A[i] || search == A[i].toUpperCase() || search == A[i].slice(0,1).toUpperCase() + A[i].slice(1).toLowerCase() || search == A[i].slice(0,2).toLowerCase() + A[i].slice(2).toUpperCase()){
//                 alert('Available')
//         }
// }

// 15. Write a program to take password as an input from user. 
// The password must qualify these requirements: a. It should 
// contain alphabets and numbers b. It should not start with a
//  number c. It must at least 6 characters long If the password 
//  does not meet above requirements, prompt the user to enter a 
//  valid password. For character codes of a-z, A-Z & 0-9, refer 
//  to ASCII table at the end of this document. 

// var cap;
// var sml;
// var num;
//  var pass = prompt('Set password')
//  for(var i = 0; i < pass.length; i++){
//          if(pass.length < 6){
//                  alert('Password must be atleast 6 word')
//                  break;
//          }
//  }
//  for(var j = 65; j < 91; j++){
//         if(String.fromCharCode(j)){
//                 cap = cap + 1;
//         }
// }
// for(var k = 97; k < 123; k++){
//         if(String.fromCharCode(k)){
//                 sml = sml + 1;
//         }
// }
// for(var l = 48; l < 58; l++){
//         if(String.fromCharCode(l)){
//                 num = num + 1;
//         }
// }
// if(cap > 0 && sml > 0 && num > 0 && pass.length > 5 && ( (pass[0]>String.fromCharCode(64) && pass[0]<String.fromCharCode(91) ) || (pass[0]>String.fromCharCode(96) && pass[0]<String.fromCharCode(123) ) ) ) {
//         alert('password reset')
// }
// else{
//         alert('Please enter valid password')
// }

// 16. Write a program to convert the following string to an array 
// using string split method. var university = “University of Karachi”;
//  Display the elements of array in your browser. 

// var university = 'University of Karachi';
// const myArr = university.split();
// for(var i = 0; i < myArr.length; i++){
//         document.write(myArr[i] + '<br>') 
// }


// 17. Write a program to display the last character of a user input. 

// var inp = prompt('Enter any word')
// var l = inp.length - 1;
// alert(inp[l])

// 18. You have a string “The quick brown fox jumps over the lazy dog”.
//  Write a program to count number of occurrences of word “the” in 
//  given string.

// var word = "The quick brown fox jumps over the lazy dog"
// var word2 = "The"
// var flag = 0
// for(var i = 0; i < word.length; i++){
//         if(word.slice(i,i+3) == word2 || word.slice(i,i+3) == word2.toLowerCase())
//                 flag = flag + 1
// }
// alert(flag)


// Chapter#26-30

// 1. Write a program that takes a positive integer from user & display 
// the following in your browser. 
// a. number 
// b. round off value of the number 
// c. floor value of the number 
// d. ceil value of the number  

// var num = prompt('Enter positive integer')
// var numb = Math.round(num)
// var floor = Math.floor(num)
// var ceil = Math.ceil(num)
// document.write(num + '<br>')
// document.write(numb + '<br>')
// document.write(floor + '<br>')
// document.write(ceil)

// 2. Write a program that takes a negative floating point number from 
// user & display the following in your browser. 
// a. number 
// b. round off value of the number 
// c. floor value of the number 
// d. ceil value ofthe number 

// var num = prompt('Enter negative Integer')
// var numb = Math.round(num)
// var floor = Math.floor(num)
// var ceil = Math.ceil(num)
// document.write(num + '<br>')
// document.write(numb + '<br>')
// document.write(floor + '<br>')
// document.write(ceil)



// 3. Write a program that displays the absolute value of a number. 
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5 

// var num = prompt("Enter any number")
// if(num < 0){
//         var numb = num * -1
//         document.write('Absolute value of ' + num + ' is ' + numb)
// }
// else{
//         document.write('Absolute value of ' + num + ' is ' + num)
// }

// 4. Write a program that simulates a dice using random() method of 
// JS Math class. Display the value of dice in your browser.: 

// var dice = Math.random()
// dice = dice * 6        
// dice = Math.ceil(dice)
// document.write(dice)


// 5. Write a program that simulates a coin toss using random() 
// method of JS Math class. Display the value of coin in your browser 

// var coin = Math.random()
// coin = coin * 2        
// coin = Math.ceil(coin)
// if(coin == 1){
//         document.write('Head')
// }
// else{
//         document.write('Tail')
// }


// 6. Write a program that shows a random number between 1 and 100 
// in your browser. 

// var num = Math.random()
// num = num * 100        
// num = Math.ceil(num)
// document.write('Number beteen 1 and 100 is : ' + num)

// 7. Write a program that asks the user about his weight. Parse 
// the user input and display his weight in your browser. Possible 
// user inputs can be: 
// a. 50 b. 50kgs c. 50.2kgs d. 50.2kilograms 

// var weight = prompt('Enter your weight in kilograms ')
// document.write('The weight of user is ' + weight + 'Kilograms')

// 8. Write a program that stores a random secret number from 1 to 10 
// in a variable. Ask the user to input a number between 1 and 10. 
// If the user input equals the secret number, congratulate the user. 

// var num = Math.random()
// num = num * 10
// num = Math.ceil(num)
// var numb = prompt("Enter number between 1 to 10")
// if(num == numb){
//         alert('Congratulations number mathched')
// }
// else{
//         alert('Try Again')
// }


// Chapter#31-34

// 1. Write a program that displays current date and time in your browser.

// var d = new Date()
// document.write(d)

// 2. Write a program that alerts the current month in words. 
// For example December. 

// var date = new Date()
// var arr = ['January' , 'February' , 'March' , 'April' , 'May' , 'June' , 'July' , 'August' , 'September' , 'October' , 'November' , 'December']
// var month = date.getMonth()
// document.write(arr[month])

// 3. Write a program that alerts the first 3 letters of the current day,
//  for example if today is Sunday then alert will show Sun. 

// var date = new Date()
// var arr = ['sun' , 'mon' , 'tue' , 'wed' , 'thr' , 'fri' , 'sat']
// var day = date.getDay()
// document.write('Today is : ' + arr[day])

// 4. Write a program that displays a message “It’s Fun day” if its 
// Saturday or Sunday today. 

// var date = new Date()
// var arr = ['sun' , 'mon' , 'tue' , 'wed' , 'thr' , 'fri' , 'sat']
// var day = date.getDay()
// if(day == 0 || day == 6){
//         document.write('Its Fun day')
// }

// 5. Write a program that shows the message “First fifteen days of the 
// month” if the date is less than 16th of the month else shows 
// “Last days of the month”. 

// var date = new Date()
// var d = date.getDate()
// if(d < 16){
//         document.write('First Fifteen days of the month')
// }
// else{
//         document.write('Last Fifteen days of the month')
// }

// 6. Write a program that determines the minutes since midnight, 
// Jan. 1, 1970 and assigns it to a variable that hasn't been declared 
// beforehand. Use any variable you like to represent the Date object. 

// var date = new Date()
// var mili = date.getTime()
// var min = mili/(1000*60)
// document.write(date + '<br>')
// document.write(mili + ' MilliSeconds <br>')
// document.write(min + ' Minutes ')

// 7. Write a program that tests whether it's before noon and alert 
// “Its AM” else “its PM”. 

// var date = new Date()
// var hour = date.getHours()
// if(hour > 12){
//         alert('Its A.M')
// }
// else{
//         alert('Its P.M')
// }

// 8. Write a program that creates a Date object for the last day of 
// the last month of 2020 and assigns it to variable named laterDate. 

// var laterDate = new Date('December 31, 2020')
// document.write('Laterdate : ' + laterDate)

// 9. Create a date object of the starting date of this Ramadan and 
// alert the number of days past since 1st Ramadan? Note: 1st Ramadan
//  was on June 18, 2015 

// var d = new Date()
// var date = new Date('june 18, 2015')
// var days = d.getTime() - date.getTime()
// days = days / (1000 * 60 * 60 * 24)
// days = Math.floor(days)
// document.write(days + ' Days have passed since 1st Ramzan 2015')

// 10. Write a program that displays in your browser the seconds that
//  elapsed between the reference date and the beginning of 2015. 

// var d = new Date()
// var date = new Date('2015')
// var days = d.getTime() - date.getTime()
// days = days / (1000)
// days = Math.floor(days)
// document.write(days + ' Seconds had passed since 2015')


// 11. Create a Date object for the current date and time. Extract the
//  hours, reset the date object an hour ahead and finally display the
//   date object in your browser. 

// var date = new Date()
// document.write('Current time is : ' + date)
// date.setHours(13)
// document.write('<br> 1 Hour ago it was : ' + date)

// 12. Write a program that creates a date object and show the date in
//  an alert box that is reset to 100 years back? 

// var date = new Date()
// document.write('Current date : ' + date)
// date.setFullYear(1921)
// document.write('<br>1 years ago date : ' + date)

// 13. Write a program to ask the user about his age. Calculate and 
// show his birth year in your browser. 

// var date = new Date()
// date = date.getFullYear()
// var age = prompt('Your age is ')
// document.write('Your age is ' + age)
// age = date - age
// document.write('<br>Your birth year is ' + age)

// 14. Write a program to generate your K-Electric bill in your browser.
//  All the amounts should be rounded off to 2 decimal places. Display 
//  the following fields: 
// a. Customer Name 
// b. Current Month 
// c. Number of units 
// d. Charges per unit 
// e. Net Amount Payable (within Due Date) 
// f. Late Payment Surcharge 
// g. Gross Amount Payable (after Due Date) Where, 

// Net Amount Payable (within Due Date) =
//  Number of units * Charges per unit & Gross Amount Payable 
//  (after Due Date) = Net Amount + Late Payment Surcharge 

// document.write('<h1>K-Electric Bill</h1>')
// var cn = 'Hassan'
// var unit = 215;
// var charge = 16;
// var sc = 50;
// var arr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
// document.write('<br>Customer name : ' + cn)
// var date = new Date()
// var month = date.getMonth()
// document.write('<br>Current Month : ' + arr[month])
// document.write('<br>Number of units : ' + unit)
// document.write('<br>Charges per unit : ' + charge)
// document.write('<br>Net Amount Payable (within due date) ' + charge * unit)
// var c = charge*unit+sc
// document.write('<br>Net Amount Payable (after due date) ' + c)


// Chapter#35-38


// 1. Write a function that displays current date & time in your browser.

        // function date(d){
        //         document.write(d)
        // }      
        // var d = new Date()
        // date(d)

// 2. Write a function that takes first & last name and then it greets 
// the user using his full name. 
 
        // function name(fn , sn){
        //         document.write(fn+sn)
        // }
        // var fn = prompt('First name')
        // var sn = prompt('last name')
        // name(fn , sn)
 
// 3. Write a function that adds two numbers (input by user) and returns
//  the sum of two numbers. 

        // function sum(x,y){
        //         var s = x + y
        //         return s
        // }
        // var a = prompt('first number')
        // a = +a
        // var b = prompt('Second number')
        // b = +b
        // document.write('Sum is : ' + sum(a,b))


// 4. Calculator:  Write a function that takes three arguments num1, 
// num2 & operator & compute the desired operation. Return and show 
// the desired result in your browser. 
 
        // function cal(num1,num2,opr){
        //         if(opr == '*'){
        //                 var res = num1 * num2
        //                 return res
        //         }
        //         else if(opr == '/'){
        //                 var res = num1 / num2
        //                 return res
        //         }
        //         else if(opr == '+'){
        //                 var res = num1 + num2
        //                 return res
        //         }
        //         else if(opr == '-'){
        //                 var res = num1 - num2
        //                 return res
        //         }
        //         else{
        //                 document.write("Invalid operator")
        //         }
        // }
        // var a = prompt('first number')
        // a = +a
        // var b = prompt('Second number')
        // b = +b
        // var c = prompt('Enter operator e.g * , / + - ')
        // var result = cal(a,b,c)
        // document.write(result)

// 5. Write a function that squares its argument. 
 
        // function sqr(x){
        //         document.write('Square of ' + x + ' is ' + x*x)
        // }
        // var a = prompt('Enter any number')
        // sqr(a)

// 6. Write a function that computes factorial of a number. 

        // function fac(x){
        //         var res =  1
        //         for(var i = x; i > 1; i--){
        //                 res = res*i
                       
        //         }
        //         document.write('Factorial of ' + x + ' is ' + res)
        // }
        // var a = prompt('Enter any number')
        // fac(a)

// 7. Write a function that take start and end number as inputs & display 
// counting in your browser. 
 
        // function coun(x,y){
        //         for(var i = x; i <= y; i++){
        //                 document.write(i + '<br>')
        //         }
        // }
        // var a = prompt('Enter starting number of counting')  
        // a = +a
        // var b = prompt('Enter ending number of counting')  
        // b = +b
        // coun(a,b)
 
// 8. Write a nested function that computes hypotenuse of a right angle 
// triangle.  Hypotenuse2 = Base2 + Perpendicular2 Take base and 
// perpendicular as inputs. Outer function : calculateHypotenuse() 
// Inner function: calculateSquare() 

        // function sr(b,p){
        //         b = +b*b
        //         p = +p*p
        //         cal(b,p)
        //         function cal(b,p){
        //                 var h = b + p
        //                 h = Math.pow(h , 0.5)
        //                 document.write(h)
        //         }
        // }
        // var a = prompt('First number')
        // a = +a
        // var b = prompt('Second number')
        // b = +b
        // sr(a,b)
        
 
// 9. Write a function that calculates the area of a rectangle.      
// A = width * height     Pass width and height in following manner: 
// i. Arguments as value 
// ii. Arguments as variables 
 
        // function rec(d,h){
        //         var a = d*h
        //         document.write(a + '<br>')
        // }
        // rec(5,2)
        // var a = 9
        // var b = 6
        // rec(a,b)

// 10. Write a JavaScript function that checks whether a passed string 
// is palindrome or not?   A palindrome is word, phrase, or sequence 
// that reads the same backward as forward, e.g., madam. 

        // function pal(s){
        //                 if(s == s.split('').reverse().join('') ){
        //                         document.write('Palindrome word')
        //                 }
                   
        //         }
        // var a = prompt('Enter any word')
        // pal(a)
 
// 11. Write a JavaScript function that accepts a string as a parameter 
// and converts the first letter of each word of the string in upper 
// case.  EXAMPLE STRING : 'the quick brown fox'  EXPECTED OUTPUT : 
// 'The Quick Brown Fox' 

        // function upp(s){
        //         for(var i = 0; i < s.length; i++){
        //                 var sp = charCodeAt(32)
        //                 if(s[i] == sp){
        //                         s[i+1] = s[i+1].toUpperCase()
        //                 }
        //        document.write(s[i])
        //         }
        
        // }
        // var a = prompt('Enter sentence')
        // upp(a)
 
// 12. Write a JavaScript function that accepts a string as a parameter 
// and find the longest word within the string.  EXAMPLE STRING : 
// 'Web Development Tutorial'  EXPECTED OUTPUT : 'Development' 
 
// 13. Write a JavaScript function that accepts two arguments, a string 
// and a letter and the function will count the number of 
// occurrences of the specified letter within the string.  Sample 
// arguments : 'JSResourceS.com', 'o'  
 
        // function check(s,c){
        //         var flag = 0
        //         for(var i = 0; i < s.length; i++){
        //                 if(s[i] == c){
        //                         flag = flag + 1
        //                 }
        //         }
        //         document.write(flag)
        // }
        // var s = prompt('Sentence')
        // var c = prompt('character')
        // check(s,c)
 
 
 
// 14. The Geometrizer Create 2 functions that calculate properties of a 
// circle, using the definitions here. Create a function called 
// calcCircumference: • Pass the radius to the function. • Calculate 
// the circumference based on the radius, and output "The circumference 
// is NN". Create a function called calcArea: • Pass the radius to the 
// function. • Calculate the area based on the radius, and output "The 
// area is NN". 
 
// Circumference of circle    =     2πr Area of circle       =     πr2

        // function calcCircumference(r){
        //         document.write('The circumference of a circle is ' + (2*3.142*r))
        // }
        // function calcArea(r){
        //         document.write('<br>The area is ' + (3.142*r*r))
        // }
        // var out = prompt('radius')  
        // calcCircumference(out)
        // calcArea(out)



// Chapter#38-42

// 1. Write a custom function power ( a, b ), to calculate the value of 
// a raised to b. 

        // function power(a,b){
        //         var r = Math.pow(a, b)
        //         document.write(r)
        // }
        // var a = prompt('Suare of ')
        // a = +a
        // var b = prompt('power')
        // b = +b
        // power(a,b)

// 2. Any year is entered through the keyboard. Write a 
// function to determine whether the year is a leap year or not. Leap 
// years ..., 2012, 2016, 2020, … 

        // function lyear(y){
        //         if(y % 4 == 0){
        //                 document.write(y + ' is leap year')
        //         }
        //         else{
        //                 document.write(y + ' is Not a leap year')
        //         }
        // }
        // var year = prompt('Enter any year')
        // lyear(year)

// 3. If the lengths of the sides of a triangle are denoted by a, b, 
// and c, then area of triangle is given by 
// area = S(S − a)(S − b)(S − c) where, S = ( a + b + c ) / 2 
// Calculate area of triangle using 2 functions 

        // function s(a,b,c){
        //         var s = (a + b + c) / 2 
        //         area(s)
        //         function area(p){
        //                 var area = s * (s - a) * (s - b) * (s - c)
        //                 document.write('Area of a triangle is ' + area)
        //         }
        // }
        // s(2,3,3)

// 4. Write a function that receives marks received by a student in 3 
// subjects and returns the average and percentage of these marks. 
// there should be 3 functions one is the mainFunction and other are 
// for average and percentage. Call those functions from mainFunction 
// and display result in mainFunction. 
 
        // function mainFunction(m,e,u){
        //         var sum = m + u + e
        //         document.write('Avergae marks is ' + average(sum))
        //         document.write('<br>Percentage is ' + percentage(sum))
        //         function average(sum){
        //                 var avg = sum / 3
        //                 return avg
        //         } 
        //         function percentage(sum){
        //                 var per = sum / 300 * 100
        //                 return per
        //         }
        // }
        // var math = +prompt('Marks of math')
        // var eng = +prompt('Marks of english')
        // var urdu = +prompt('Marks of urdu') 
        // mainFunction(math,eng,urdu)

// 5. You have learned the function indexOf. Code your own custom 
// function that will perform the same functionality. You can code
//  for single character as of now. 
 
        // function index(a,c){
        //         for(var i = 0; i < a.length; i++){
        //                 if(a[i] == c){
        //                         document.write('Index of ' + c + ' is ' + i)
        //                 }
        //         }
        // }
        // var a = prompt('Enter words')
        // var b = prompt('Index of')
        // index(a,b)

// 6. Write a function to delete all vowels from a sentence. Assume 
// that the sentence is not more than 25 characters long. 

        // function vowel(a){
        //         for(var i = 0; i < a.length; i++){
        //                 if(a[i] == 'a' || a[i] == 'e' || a[i] == 'i' || a[i] == 'o' || a[i] == 'u' || a[i] == 'A' || a[i] == 'E' || a[i] == 'I' || a[i] == 'O' || a[i] == 'U'){
        //                         continue
        //                 }
        //                 document.write(a[i])
        //         }
        // }
        // var sen = prompt('Enter sentence')
        // vowel(sen)
 
// 7. Write a function with switch statement to count the number of 
// occurrences of any two vowels in succession in a line of text. 
// For example, in the sentence 

// “Pleases read this application and give me gratuity” Such occurrences
//  are ea, ea, ui. 
 

        // function twoVowel(a){
        //         for(var i = 0; i < a.length; i++){
        //                 if( (a[i] == 'a' || a[i] == 'e' || a[i] == 'i' || a[i] == 'o' || a[i] == 'u' || a[i] == 'A' || a[i] == 'E' || a[i] == 'I' || a[i] == 'O' || a[i] == 'U') && (a[i+1] == 'a' || a[i+1] == 'e' || a[i+1] == 'i' || a[i+1] == 'o' || a[i+1] == 'u' || a[i+1] == 'A' || a[i+1] == 'E' || a[i+1] == 'I' || a[i+1] == 'O' || a[i+1] == 'U') ){
        //                         document.write(a[i] + a[i+1] + '<br>')
        //                 }
        //         }
        // }
        // var sen = prompt('Enter sentence')
        // twoVowel(sen)


// 8. The distance between two cities (in km.) is input through the 
// keyboard. Write four functions to convert and print this distance 
// in meters, feet, inches and centimeters. 
 
        // function meter(km){
        //         var metre = km * 1000
        //         document.write(metre + ' meters <br>')
        // }
        // function inch(km){
        //         var metre = km * 1000 * 36
        //         document.write(metre + ' inches <br>')
        // }
        // function feet(km){
        //         var metre = km * 1000 * 3 
        //         document.write(metre + ' feets <br>')
        // }
        // function centimeters(km){
        //         var metre = km * 1000 * 100
        //         document.write(metre + ' centimeters <br>')
        // }
        // var km = +prompt("Enter kilometer beteen to cities ")
        // meter(km)
        // inch(km)
        // feet(km)
        // centimeters(km)

// 9. Write a program to calculate overtime pay of employees. Overtime 
// is paid at the rate of Rs. 12.00 per hour for every hour worked 
// above 40 hours. Assume that employees do not work for fractional 
// part of an hour. 

        // function salery(hour){
        //         if(hour > 40){
        //                 hour = hour - 40
        //         var overtime = hour * 12
        //         document.write('Overtime amount is RS#' + overtime)
        //         }
        // }
        // var s = +prompt('working hour')
        // salery(s)
 
// 10. A cashier has currency notes of denominations 10, 50 and 100. 
// If the amount to be withdrawn is input through the keyboard in 
// hundreds, find the total number of currency notes of each 
// denomination the cashier will have to give to the withdrawer. 

        // function bank(amount){
        //         var hun = amount / 100
        //         hun = Math.floor(hun)
        //         var f = amount % 100
        //         var fifty = f / 50
        //         fifty = Math.floor(fifty)
        //         var t = f % 50
        //         var ten = t / 10
        //         ten = Math.floor(ten)
        //         document.write(hun + ' Hundreds notes<br>' + fifty + ' Fiftys notes <br>' + ten + ' Tens notes')

        // }
        // var cash = +prompt('Enter Amount')
        // bank(cash)