class Strings {
    constructor() {
        const firstName: string = "Lynn";
        const lastName: string = "Thomas";

        console.log("first name:", firstName);
        console.log("last name:", lastName);


        // Concatenating strings & using string interpolation
        console.log(`My name is: ${firstName} ${lastName}`);

        // Concatenating strings and numbers
        const myAge: number = 26;
        console.log(`My name is ${firstName} and I am ${myAge} years old.`);

        // String concatenation
        const something: string = "Wassup ";
        const somethingElse: string = "homie";
        const anotherThing: string = "Stuff".concat(" and things");

        console.log(something.concat(somethingElse));
        console.log(anotherThing);

        // String length
        const text: string = "AbcDefG";
        console.log(`The length is: ${text.length}`);

        // String case conversion
        console.log(text.toUpperCase());
        console.log(text.toLowerCase());

        // String index search
        console.log(text.indexOf("G")); // indexed from 0!

        // Template literals for multiline strings
        const multiline: string = `
          This is a multiline
          string in TypeScript
        `;
        console.log(multiline);

        // String literal types
        let mood: 'happy' | 'sad' = 'happy';
        mood = 'sad';
        console.log(`Mood: ${mood}`);


        // Trimming
        const spacedString: string = "   trim me   ";
        console.log(spacedString.trim());

        // Splitting
        const fruits: string = "apple,banana,orange";
        const fruitArray: string[] = fruits.split(',');
        console.log(fruitArray);

        // Checking includes
        console.log(text.includes('Def')); // true

        // Replacing
        console.log(text.replace('Abc', 'Xyz'));

        // Demonstrating string and number concatenation (similar to your Numbers class example)
        const numString: string = "10";
        const num: number = 5;
        console.log(numString + num); // Will concatenate, not add

        ///////////////////////////////////////////////////////////////////////////////////////////

        // BELOW ARE THE EXERCISES WE ATTEMPTED DURING LESSON 2 OF THE COURSE


        // Exercise 1: Full Name with Interpolation
        // Create two string variables:
        // Log a sentence using string interpolation that prints the full name.
        // The goal is to practice string interpolation using template literals.

        const name = "John";
        const surName = "Doe";

        // Log: "My name is John Doe"

        // Exercise 2: String length and case
        // Create a string length called text.
                // log the length of the string.
                // log the string in uppercase.
                // log the string in lowercase.
        // The goal is to use common string methods to manipulate and retrieve information from strings.
        const word = "TypeScript";

        // Log the length
        // Log uppercase
        // Log lowercase

        // Exercise 3: Splitting a string
        // Create a comma-seperated string of items and split it into an array.
        // The goal is to understand how to convert a string into an array using the split method.

        const items = "pen,pencil,eraser";

        // Split into an array and log it.

        // Exercise 4: Find and replace
        // Create a string and
            // check if it includes a specific word.
            // replace part of the string with another word.
        // The goal is to practice using common string methods.

        const message = "I love JavaScript";

        // Check if it includes "JavaScript"
        // Replace "JavaScript" with "TypeScript"

        // Exercise 5: String and number concatenation.
        // Create a string variable and a number variable.
        // Log what happens when you add them together.
        // The goal is to understand how strings and numbers behave when combined.

        const scoreText = "Score: ";
        const score = 10;

        // Log the result
    }
}

console.log(new Strings());