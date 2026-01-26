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

        const beverage: string = 'tea';

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
    }
}

console.log(new Switches());