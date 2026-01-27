class Ifs {
    constructor() {
        // basic if - comparing 2 values

        if (18 > 20) {
            console.log("YES");
        } else {
            console.log("NO");
        }

        const random: string = 'Hello';
        const random2: string = 'Hello0';

        if (random === random2) {
            console.log("They are the same!! :)");
        } else {
            console.log("They are not the same :(");
        }

        // comparing variables & text
        if (random === "Hello") {
            console.log("True");
        } else {
            console.log("False");
        }

        // if/else if/else - clock
        const hour = 18;

        if (hour < 12) {
            console.log("Good morning!!");
        } else if (hour < 17) {
            console.log("Good afternoon!!");
        } else {
            console.log("Good evening!!");
        }

        //shorthand if statement
        const time = 11;
        const result = (time < 17) ? 'Good day!' : 'Good evening!';
        console.log(result);

        ///////////////////////////////////////////////////////////////////////////////////////////

        // BELOW ARE THE EXERCISES WE ATTEMPTED DURING LESSON 6 OF THE COURSE

        // 1. Write a function that takes a temperature number and returns:
        // - "Cold" if below 10
        // - "Warm" if between 10 and 25
        // - "Hot" if above 25

        // add code here and Also write unit tests.

        // 2. Write a function that takes a boolean for password correct, and a boolean for account locked.
        // Return:
        // - "Account locked" if locked
        // - "Login successful" if password is correct
        // - "Invalid credentials" otherwise
        // - (Order matters.)

        // add code here and Also write unit tests.

        // 3. Write a function that takes a score number and returns:
        // - "Fail" if below 50
        // - "Pass" if 50–74
        // - "Merit" if 75–89
        // - "Distinction" if 90 and above

        // add code here and Also write unit tests.

        // 4. Write a function that takes an hour number and returns:
        // - "Open" if between 9 and 17
        // - "Closed" otherwise

        // add code here and Also write unit tests.

        // 5. Write a function that takes in an age, and a boolean indicating admin status.
        // Return:
        // - "Access granted" if admin or age is 18 and above
        // - "Access denied" otherwise

        // add code here and Also write unit tests.
    }
}

console.log(new Ifs());