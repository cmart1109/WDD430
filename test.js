var Person = function (name) {
  this.name = name;
  this.canTalk = true;
};

Person.prototype.greet = function () {
  if (this.canTalk) {
    console.log("Hola, yo soy " + this.name);
  }
};

var Employee = function (name, title) {
  Person.call(this, name);
  this.title = title;
};

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
//Si no aplicas Object.prototype.constructor a Employee,
//tomará prototype.constructor de Person (padre).
//Para evitarlo, aplicamos prototype.constructor a Employee (hijo).

Employee.prototype.greet = function () {
  if (this.canTalk) {
    console.log("Hola, yo soy " + this.name + ", el " + this.title);
  }
};

var Customer = function (name) {
  Person.call(this, name);
};

Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer;
//Si no aplicas Object.prototype.constructor a Customer,
//tomará prototype.constructor de Person (padre).
//Para evitarlo, aplicamos prototype.constructor a Customer (hijo).

var Mime = function (name) {
  Person.call(this, name);
  this.canTalk = false;
};

Mime.prototype = Object.create(Person.prototype);
Mime.prototype.constructor = Mime;
//Si no aplicas Object.prototype.constructor a Mime,
//tomará prototype.constructor de Person (padre).
//Para evitarlo, aplicamos prototype.constructor a Mime (hijo).

var bob = new Employee("Bob", "Constructor");
var joe = new Customer("Joe");
var rg = new Employee("Red Green", "Reparador");
var mike = new Customer("Mike");
var mime = new Mime("Mime");

bob.greet();
// Hola, yo soy Bob, el Constructor

joe.greet();
// Hola, yo soy Joe

rg.greet();
// Hola, yo soy Red Green, el Reparador

mike.greet();
// Hola, yo soy Mike

mime.greet();