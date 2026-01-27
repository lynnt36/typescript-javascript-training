class Switches {
    constructor() {
        const day: number = 4;

        switch (day) {
            case 1:
                console.log("Monday");
                break;
            case 2:
                console.log("Tuesday");
                break;
            case 3:
                console.log("Wednesday");
                break;
            case 4:
                console.log("Thursday");
                break;
            case 5:
                console.log("Friday");
                break;
            case 6:
                console.log("Saturday");
                break;
            case 7:
                console.log("Sunday");
                break;
            default:
                console.log("It's some day");
        }

        const children: number = 5;

        switch (children) {
            case 1:
                console.log("Only child");
                break;
            case 2:
                console.log("Twins");
                break;
            case 3:
                console.log("Triplets");
                break;
            case 4:
                console.log("Quadruplets");
                break;
            default:
                console.log("That's a lot of kids!!");
        }

        const beverage: string = 'coffee';

        switch (beverage) {
            case 'coffee':
                console.log("Coffee is great!");
                break;
            case 'tea':
            case 'Tea':
            case 'TEA':
                console.log("Tea is refreshing!");
                break;
            default:
                console.log("I don't know that beverage.");
        }

        ///////////////////////////////////////////////////////////////////////////////////////////

        // BELOW ARE THE EXERCISES WE ATTEMPTED DURING LESSON 6 OF THE COURSE

        // 1. Write a function that takes a number (1–7) and returns the correct day name.
        // Return "Invalid day" for anything else.

        // add code here

        // 2. Write a function that takes a user role string and returns:
        // - "Full access" for "admin"
        // - "Limited access" for "editor"
        // - "Read-only access" for "viewer"
        // - "No access" for anything else

        // add code here

        // 3. Write a function that takes a traffic light colour and returns:
        // - "Stop" for "red"
        // - "Get ready" for "yellow"
        // - "Go" for "green"
        // - "Unknown signal" otherwise

        // add code here

        // 4. Write a function that takes a month number and returns:
        // - "Winter" for December–February
        // - "Spring" for March–May
        // - "Summer" for June–August
        // - "Autumn" for September–November
        // - "Invalid month" otherwise
        // - (Use grouped cases.)

        // add code here

        // 5. Write a function that takes a status code number and returns:
        // - "Success" for 200
        // - "Not Found" for 404
        // - "Server Error" for 500
        // - "Unknown Status" otherwise
    }
}

console.log(new Switches());