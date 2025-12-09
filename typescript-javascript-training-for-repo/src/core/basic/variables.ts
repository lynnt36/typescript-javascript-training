class Variables {
    constructor() {
        // Variable declarations and usage examples following project standards

        // Boolean variable
        const isActive: boolean = true;

        // Number variable
        const userCount: number = 42;

        // String variable
        const userName: string = 'Text';

        // Array of numbers
        const scores: number[] = [10, 20, 30];

        // Array of strings
        const tags: string[] = ['typescript', 'javascript', 'training'];

        // A "const" will not change as it's a constant
        const name = 'Lynn';

        // Attempt to assign to const or readonly variable
        // TS2588: Cannot assign to name because it is a constant.
        // name = 'Dave';
        console.log("Name", name);

        // This can change by using a "let" which is called a variable
        let age = 27;
        console.log("First age", age);

        age = 28; // Changing the value of age
        console.log("Updated age", age);

        // BELOW ARE THE EXERCISES WE ATTEMPTED DURING LESSON 1 OF THE COURSE

        // 1. Create two constants: one for a name and one for a color. Try to reassign them and see what happens
        // The goal here is to understand the const variable and how it works.
        const firstName = "Alex";
        const favouriteColor = "Blue";

        // ** ADD YOUR CODE HERE** Try changing both values here

        // 2. Create a let variable for score,and attempt to reassign it 3 times.
        // The goal here is to understand the let variable and how it works.
        let score = 0;

        // ** ADD YOUR CODE HERE** Update the score values here

        // 3. This exercise is to understand the difference between const/let vs var.
        // Predict which variables will be accessible outside of the block scope.
        // The goal here is to understand block scope(let/const) vs function scope(var).)
        {
            const a = "inside const";
            let b = "inside let";
            var c = "inside var";
        }

        // ** ADD YOUR CODE HERE** Try logging all three variables here, check for any console outputs or errors and understand
        // the behaviours of each variable type.

        // 4. Modify objects and arrays created with const.
        // Modify their contents and try to reassign them.
        const user = { name: "Sam" };
        const colors = ["red"];

        // ** ADD YOUR CODE IN BELOW'S INSTRUCTIONS**
        // Change the user's name
        // Add a new color
        // Try to reassign the whole object and whole array

        // 5. You need to locate, fix and understand any errors from the block of code below.
        const PersonsAge = 30;
        age = 31;

        if (true) {
            var language = "JavaScript";
            let framework = "Angular";
        }

        console.log(framework);
        console.log(language);


    }
}
console.log(new Variables());