"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Variables {
    constructor() {
        // Variable declarations and usage examples following project standards
        // Boolean variable
        const isActive = true;
        // Number variable
        const userCount = 42;
        // String variable
        const userName = 'Text';
        // Array of numbers
        const scores = [10, 20, 30];
        // Array of strings
        const tags = ['typescript', 'javascript', 'training'];
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
        let score = 0;
        console.log(score);
    }
}
console.log(new Variables());
//# sourceMappingURL=variables.js.map