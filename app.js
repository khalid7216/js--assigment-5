var age = 20;
  alert("Your age is " + age);

  var visit = 20;
  alert("You have visited this site " + visit + " times");

  var birthYear = 2004;
  document.write("My birth year is " + birthYear + "<br>");
  document.write("Data type of my declared variable is " + typeof birthYear + "<br>");

  var visitorName = "John Doe";
  var productTitle = "T-shirt(s)";
  var quantity = 5;
  document.write(visitorName + " ordered " + quantity + " " + productTitle + " on XYZ Clothing store");
  var name, age, country;

  var myName;
  var _user;
  var $price;
  var user123;
  var camelCase;

  document.write("<h1>Rules for naming JS variables</h1>");
  document.write("Variable names can only contain letters, numbers, $, and _. <br>");
  document.write("For example: $my_1stVariable<br><br>");
  document.write("Variables must begin with a letter, $ or _. <br>");
  document.write("For example: $name, _name or name<br><br>");
  document.write("Variable names are case sensitive.<br><br>");
  document.write("Variable names should not be JS reserved keywords.<br>");
var num1 = 5;
var num2 = 3;
var sum = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br>");

var sub = num1 - num2;
var mul = num1 * num2;
var div = num1 / num2;
var mod = num1 % num2;
document.write("Subtraction: " + sub + "<br>");
document.write("Multiplication: " + mul + "<br>");
document.write("Division: " + div + "<br>");
document.write("Modulus: " + mod + "<br><br>");

var a;
document.write("Value after variable declaration is: " + a + "<br>");
a = 5;
document.write("Initial value: " + a + "<br>");
a++;
document.write("Value after increment is: " + a + "<br>");
a += 7;
document.write("Value after addition is: " + a + "<br>");
a--;
document.write("Value after decrement is: " + a + "<br>");
var remainder = a % 3;
document.write("The remainder is: " + remainder + "<br><br>");

var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.write("Total cost to buy 5 tickets to a movie is " + totalCost + " PKR<br><br>");

var tableNum = 4;
for (var i = 1; i <= 10; i++) {
  document.write(tableNum + " x " + i + " = " + (tableNum * i) + "<br>");
}
document.write("<br>");

var celsius = 25;
var fahrenheit = (celsius * 9 / 5) + 32;
document.write(celsius + "°C is " + fahrenheit + "°F<br>");

var fahrenheit2 = 70;
var celsius2 = (fahrenheit2 - 32) * 5 / 9;
document.write(fahrenheit2 + "°F is " + celsius2 + "°C<br><br>");

var priceItem1 = 650;
var priceItem2 = 100;
var qtyItem1 = 3;
var qtyItem2 = 7;
var shippingCharges = 100;
var totalCart = (priceItem1 * qtyItem1) + (priceItem2 * qtyItem2) + shippingCharges;
document.write("Total cost of your order is " + totalCart + " PKR<br><br>");

var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained / totalMarks) * 100;
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage + "%<br><br>");

var usd = 10;
var riyal = 25;
var pkr = (usd * 104.80) + (riyal * 28);
document.write("Total Currency in PKR: " + pkr + "<br><br>");

var num = 5;
var result = ((num + 5) * 10) / 2;
document.write("Result is: " + result + "<br><br>");

var currentYear = 2025;
var birthYear = 2004;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;
document.write("They are either " + age2 + " or " + age1 + " years old<br><br>");

var radius = 20;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * radius * radius;
document.write("The circumference is " + circumference + "<br>");
document.write("The area is " + area + "<br><br>");

var snack = "chocolate chip";
var currentAge = 21;
var maxAge = 70;
var amountPerDay = 2;
var totalNeeded = (maxAge - currentAge) * 365 * amountPerDay;
document.write("You will need " + totalNeeded + " " + snack + " to last you until the ripe old age of " + maxAge);
