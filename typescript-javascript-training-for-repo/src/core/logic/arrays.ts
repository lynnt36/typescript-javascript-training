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
    }
}

console.log(new Arrays());