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
    }
}