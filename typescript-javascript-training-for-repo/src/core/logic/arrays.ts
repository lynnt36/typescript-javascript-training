class Arrays {
    constructor() {
        const cars = ['Ford', 'Volkswagen', 'BMW', 'Audi', 'Volvo'];

        let array: number[] = new Array(3);
        array[0] = 1;
        array[1] = 2;
        array[2] = 3;
        array[3] = 4; // despite us saying the array has a length of 3, we can still add a 4th element

        // accessing elements of an array
        console.log(cars[1]);

        // changing a value
        cars[2] = 'Kia';
        console.log(cars[2]);

        //array length
        console.log(cars.length);

        // looping through an array - for loop
        for (let car = 0; car < cars.length; car++) {
            console.log("CAR: " + cars[car]);
        }

        // for of loop
        for (const car of cars) {
            console.log(car);
        }

        //arrays within arrays
        const myNumbers: number[][] = [
            [1, 2, 3],
            [5, 6, 7]
        ];

        const x: number = myNumbers[1][2];
        const y: number = myNumbers[0][1];

        // Print the values
        console.log(x);
        console.log(y);

        // spread operator with arrays
        const currentUsers = ['Matt', 'Joe', 'Carol'];
        console.log('Current Users', currentUsers);

        const newUsers = ['Steve', 'Dave', 'Alice'];
        console.log('New Users', newUsers);

        const allUsers = [...currentUsers, ...newUsers];
        console.log('All Users', allUsers);

        const allUsersConcat = currentUsers.concat(newUsers);
        console.log('All Users concat', allUsersConcat);


        ///////////////////////////////////////////////////////////////////////////////////////////

        // BELOW ARE THE EXERCISES WE ATTEMPTED DURING LESSON 6 OF THE COURSE

        // 1. Accessing & Changing Values
        // Task: Create an array of 5 colours,
        //       log the second colour,
        //       change the third colour to something else,
        //       log the updated value.
        // Goal: Understand how to access and update values in an array using indexes.

        // add code here

        // 2. Array Length
        // Task: Create an array of at least 4 items (any topic).
        //       Log the length of the array.
        //       Add one more item to the array
        //       Log the new length.
        // Goal: Understand how .length works and that arrays can grow dynamically.

        // add code here

        // 3. Looping Through an Array
        // Task: Create an array of numbers.
        //       Use a for loop to log each number
        //       Then do the same using a for…of loop.
        // Rules:Both loops must log the same values.
        // Goal: Practice iterating over arrays and see two common ways to do it.

        // add code here

        // 4. Nested Arrays
        // Task: Create a 2D array with two rows of numbers
        //       Example shape:
        //       [[1, 2, 3], [4, 5, 6]]
        //       Log:
        //       One value from the first row
        //       One value from the second row
        // Goal: Understand how arrays can contain other arrays and how to access nested values.

        // add code here

        // 5. Combining Arrays
        // Task: Create one array of existing users.
        //       Create another array of new users.
        //       Combine them into a single array in two different ways:
        //       Using the spread operator
        //       Using.concat()
        //       Log both results.
        // Goal: Understand how to merge arrays and recognise multiple ways to solve the same problem.

        // add code here
    }
}

console.log(new Arrays());