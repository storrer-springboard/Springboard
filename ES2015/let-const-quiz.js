/* ES5 Global Constants */
var PI 3.14;
PI = 42; // no problems here

// ES2015 version
const PI = 3.14
PI = 42 // no longer allowed

/* Quiz
What is the difference between var and let?
var variables can be reassigned and redeclared, whereas let variables can be reassigned but not redeclared.
var hoists a variable, allowing it to be declared *after* it is referenced. var creates function scoped variables,
whereas let variables are block scoped.

What is the difference between var and const?
const variables cannot be redeclared or reassigned and are block scoped like let variables.

What is the difference between let and const?
let variables can be reassigned but not redeclared, whereas const cannot be redeclared nor reassigned.

What is hoisting? 
A var variable or function is hoisted in JavaScript which means that it can be referenced before it 
is declared or defined when writing code.
*/
