class Operators {
    constructor() {
        const variable1: number = 10;
        const variable2: number = 8;

        // Assignment operators
        const greaterThan = variable1 > variable2; // This will be true as 10 is greater than 8
        console.log("Greater than", greaterThan);

        const lessThan = variable1 < variable2; // This will be false as 10 is not less than 8
        console.log("Less than", lessThan);

        const equalTo = variable1 === variable1; // This checks for an exact equality
        console.log("Equal to", equalTo);

        const notEqualTo = variable1 !== variable2; // This checks for inequality
        console.log("Not equal to", notEqualTo);

        const greaterThanOrEqualTo = variable1 >= variable2; // This checks if variable1 is greater than or equal to variable2
        console.log("Greater than or equal to", greaterThanOrEqualTo);

        const lessThanOrEqualTo = variable1 <= variable2; // This checks if variable1 is less than or equal to variable2
        console.log("Less than or equal to", lessThanOrEqualTo);

        // Arithmetic Operators
        const add = variable1 + variable1;
        console.log("Add", add);

        const subtract = variable1 - variable2;
        console.log("Subtract", subtract);

        const multiply = variable1 * variable2;
        console.log("Multiply", multiply);

        const divide = 10 / 2;
        console.log("Divide", divide);

        const exponent = 2 ** 3; // 2 raised to the power of 3 (i.e. 2^3)
        console.log("Exponent", exponent);

        // Logical Operators
        // OR - This checks if at least one of the conditions is true.
        if (10 < 9 || 5 < 10) {
            console.log("One of these is true");
        } else {
            console.log("False.");
        }
        // AND - This checks if both conditions are true.
        if (10 > 9 && 5 < 10) {
            console.log("Both of these are true");
        } else {
            console.log("False.");
        }

        // Modulus operator - calculate the remainder of a division.
        // In this example, it checks if 4 can be divided by 2 without a remainder.
        if (4 % 2 === 0) {
            console.log('4 is even');
        }

        if (4 % 3 === 0) {
            console.log('4 is odd');
        }

        ///////////////////////////////////////////////////////////////////////////////////////////

        // BELOW ARE THE EXERCISES WE ATTEMPTED DURING LESSON 3 OF THE COURSE

        // 1. Comparison operators
        // Task: Create two numbers and compare them using different comparison operators.
        // Goal: Practice using comparison operators that return booleans.

        const a = 15;
        const b = 10;

        // Check if a is greater than b
        // Check if a is less than b
        // Check if a is equal to b
        // Check if a is not equal to b

        // 2. Arithmetic operations
        // Task: Using two numbers, perform basic maths operations.
        // Goal: Practice addition, subtraction, multiplication, and division.

        const num1 = 20;
        const num2 = 5;

        // Create add
        // Create subtract
        // Create multiply
        // Create divide

        // 3. Logical AND (&&)
        // Task: Log a message only if both conditions are true.
        // Goal: Understand how logical AND works.

        const age = 19;
        const hasTicket = true;

        // If age is 18 or over AND hasTicket is true, log "You may enter"

        // 4. Logical OR (||)
        // Task: Log a message if at least one condition is true.
        // Goal: Understand how logical OR works.

        const isWeekend = false;
        const isDayOff = true;

        // If it is the weekend OR a day off, log "No work today"

        // 5. Modulus operator (%)
        // Task: Check if a number is divisible by 2.
        // Goal: Understand how modulus is used to check remainders.

        const number = 7;

        // Use modulus to check if the number is even or odd


    }
}