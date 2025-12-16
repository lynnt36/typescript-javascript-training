// in TypeScript, Integers are called Numbers
// In JavaScript/TypeScript, all numbers (whole numbers, decimals, negatives) are type number.
class Numbers {
    constructor() {
        // adding, multiplying, dividing, subtracting
        const noOne:number = 1;
        const noTwo: number = 2;
        const noThree: number = 3;
        const noSix: number = 6;

        console.log(noOne + noThree);
        console.log(noTwo * noSix);
        console.log(noSix / noThree);
        console.log(noTwo - noOne);

        // adding strings & ints
        const w: number = 5;
        const x: string = "10";
        const y: string = "20";
        const z: string = x + y;

        console.log(z);   // won't add, will just concat
        console.log(w + x);   //won't add, prints answer as a string (concat)

        // Square roots
        console.log(Math.sqrt(81));

        // Max/min
        console.log(Math.min(2, 6));
        console.log(Math.min(4, 8));

        // Float numbers (no concept of a 'float' type in TypeScript, they are just numbers)
        const myNum: number = 3.14;
        console.log(myNum + noThree);

        // Big numbers
        // we can use underscores to make big numbers more readable
        // for example, 10000000 (10 million) can be written like so
        const bigNumber = 10_000_000;
        console.log(bigNumber);

        ///////////////////////////////////////////////////////////////////////////////////////

        // BELOW ARE THE EXERCISES WE ATTEMPTED DURING LESSON 1 OF THE COURSE

        // 1. Basic arithmetic
        // Create two number variables: a and b.
        // Assign any values you like.
        // Create variables for sum, difference.
        // Log all results.
        let a = 8;
        let b = 4;

        // **ADD CODE HERE** Create sum and difference variables here 

        console.log("a =", a);
        console.log("b =", b);
        console.log("Sum =", sum);
        console.log("Difference =", difference);

        // 2. Step by step number update
        // Create a number variable counter and assign any value.
        // Add 3 to it and store in newCounter1 variable
        // Subtract 1 and store in newCounter2 variable
        // Multiply by 2 and store in newCounter3 variable
        // Divide by 4 and store in newCounter4 variable
        // Log all results
        // Practice basic arithmetic operations step by step.
        let counter = 5;

        // Add 3 → newCounter1

        // Subtract 1 → newCounter2

        // Multiply by 2 → newCounter3

        // Divide by 4 → newCounter4

        console.log("Original counter:", counter);
        console.log("After addition:", newCounter1);
        console.log("After subtraction:", newCounter2);
        console.log("After multiplication:", newCounter3);
        console.log("After division:", newCounter4);

        // 3. Temperature conversion
        // Create a number variable celsius and assign any value.
        // Create a variable fahrenheit that converts celsius to fahrenheit using the formula:
        // F = (celsius * 9/5) + 32
        // Log both values.
        // The goal here is to practice using formulas with numbers.
        let celsius = 20;

        // Create fahrenheit here

        console.log("Celsius:", celsius);
        console.log("Fahrenheit:", fahrenheit);

        // 4. Total price calculation
        // Create two numbers:
        // pricePerItem
        // quantity
        // Calculate the total cost and log the result.
        let pricePerItem = 15;
        let quantity = 3;

        // Create total here

        console.log("Total cost:", total);

        // 5. Average of three numbers
        // Create three number variables: x, y, and z.
        // Calculate the average and log it.
        let ten = 10;
        let twenty = 20;
        let thirty = 30;

        // Create average here

        console.log("Average:", average);
    }
}

console.log(new Numbers());