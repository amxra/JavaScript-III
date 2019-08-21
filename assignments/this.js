/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. This refers to the window object when defined in the global scope. Any top level variable will be a property of this 
* 2. This becomes the object when it is defined within an object as a property. so that this.name === obj.name 
* 3. When this is new keyword binding, this refers the object that will be created with the new keyword
* 4. Explicit binding allows us to coerce this into what we want when using .call() or.apply() to invoke a function. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

 var outerThis = this;
 var newVariable = 'amira'

    console.log(this.newVariable); // logs 'amira'

// Principle 2

// code example for Implicit Binding

    function girlName (){
        return ` Hi my name is ${this.name}`
    }

    var girl = {
        name: 'amira',
        foo : girlName
    }

    console.log(girl.foo()); //logs amira 

// Principle 3

// code example for New Binding

    function Girl (name,job){
        this.name =name;
        this.job = job;
    }

    const amira = new Girl('amira', 'software engineer' )

    console.log(amira);

// Principle 4

// code example for Explicit Binding

    function anotherGirl (name, job) {
         console.log(this);
         return `Her name is ${name}, she is a ${job}`
 }

 anotherGirl.call( "Nigeria", 'Tosin', 'Software engineer')