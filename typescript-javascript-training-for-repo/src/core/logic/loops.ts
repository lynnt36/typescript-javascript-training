class Loops {
    constructor() {
        // for loops
        for (let i = 0; i < 10; i++) {
            console.log(i);
        }

        console.log("--");

        for (let i = 0; i < 5; i++) {
            console.log(i);
        }

        console.log("--");

        // for of loop
        for (const element of [1, 2, 3, 4, 5]) {
            console.log(element);
        }

        console.log("--");

        // for in loop
        const person = { name: 'Matthew', age: 26 };

        for (const key in person) {
            console.log(key);
        }

        console.log("--");

        // forEach loop
        const fruits = ['apple', 'banana', 'cherry'];

        fruits.forEach(fruit => {
            console.log(fruit);
        });

        console.log("--");

        // while loop
        let x = 0;

        while (x < 5) {
            console.log(x);
            x++;
        }

        console.log("--");

        // do/while loops
        let n = 0;

        do {
            console.log(n);
            n++;
        } while (n <= 10);

        console.log("--");

        // break and continue
        for (let j = 0; j < 10; j++) {
            if (j === 5) {
                console.log("Breaking at", j);
                break; // exits the loop when j is 5
            }
            console.log(j);
        }

        console.log("--");

        for (let k = 0; k < 10; k++) {
            if (k % 2 === 0) {
                console.log("Skipping even number", k);
                continue; // skips the rest of the loop iteration when k is even
            }
            console.log(k);
        }
    }
}

console.log(new Loops());