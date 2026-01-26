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
    }
}

console.log(new Ifs());