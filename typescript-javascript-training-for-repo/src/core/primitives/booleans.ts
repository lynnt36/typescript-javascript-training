// A boolean represents a value which can only be true or false.
// Use booleans when you need to answer yes/no questions.
// Below are some examples of boolean values and expressions.
// Run the below code to see the results in the console, and to familiarise
// yourself with what is happening.
class Booleans {
    constructor() {
        const isItMonday: boolean = true;
        const isItFriday: boolean = false;

        console.log(isItMonday);
        console.log(isItFriday);

        // boolean expressions
        const x: number = 13;
        const y: number = 10;

        // Is X bigger than Y?
        console.log(x > y);

        // Check both values are equal using "==="
        console.log(x === y);

        // Is 45 less than 20?
        console.log(45 < 20);

        // BELOW ARE THE EXERCISES WE ATTEMPTED DURING LESSON 1 OF THE COURSE

        // 1. True or False
        // Create 3 boolean variables,
        //    isOnline - true if the user is online
        //    hasPaid - true if the user has paid
        //    isAdmin - false if the user is not an admin
        // Log all 3 to the console
        // The goal here is to understand how to assign true or false values to variables.

        // **ADD CODE HERE** Create the variables here

        console.log(isOnline);
        console.log(hasPaid);
        console.log(isAdmin);

        // 2. Comparison check
        // Create two number variables: age and minimumAge.
        // Create a boolean variable canVote that is true if age is greater than or equal to minimumAge.
        // The goal here is to understand that boolean values can result from comparisons.
        let age = 18;
        let minimumAge = 18;

        // **ADD CODE HERE** Create canVote boolean here

        console.log(canVote);

        // 3. Boolean toggle
        // Create a boolean variable lightOn that starts as false.
        // Then “toggle” it to true and log both values.
        // The goal here is to understand changing boolean values and how they can represent on/off states..
        let lightOn = false;

        // **ADD CODE HERE** Toggle the value here

        console.log(lightOn);

        // 4. Check if a number is even
        // Create a variable called num and assign it any number.
        // Create a variable called isEven that becomes true if the number is even and false otherwise.
        // Log both values.
        // The goal here is to understand how to create a boolean by checking if a number meets a condition (even/odd).
        let num = 10;

        // **ADD CODE HERE** Create isEven here

        console.log(num);
        console.log(isEven);

        // 5. Two conditions
        // Create two boolean variables: isRaining and hasUmbrella.
        // Create a third boolean variable canGoOutside that is true if it is not raining or if the user has an umbrella.
        // Log the result.
        // The goal here is to learn how to combine multiple boolean values using logical operators (AND/OR).
        let isRaining = true;
        let hasUmbrella = false;

        // **ADD CODE HERE** Create canGoOutside here

        console.log(canGoOutside);
    }
}

console.log(new Booleans());