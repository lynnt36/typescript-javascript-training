// This is a basic TypeScript const function
export const MyConstFunction = (): string => {
    return 'Hello, World!';
};

// This is a TypeScript const function with a parameter
export const MyConstFunctionWithParam = (name: string): string => {
    return `Hello, ${name}!`;
}

// This is a TypeScript const function with multiple parameters
export const MyConstFunctionWithParams = (forename: string, surname: string): string => {
    return `Hello, ${forename} ${surname}!`;
}

// This is a TypeScript const function with an optional parameter
export const MyConstFunctionWithOptionalParam = (name?: string): string => {
    return `Hello, ${name ?? 'World'}!`;
}

// This is a TypeScript const function with a default parameter
export const MyConstFunctionWithDefaultParam = (name: string = 'World'): string => {
    return `Hello, ${name}!`;
}

export interface Person {
    name: string;
}

// This is a TypeScript function that takes in a complex argument
export const MyFunctionWithComplexArgument = (person: Person): string => {
    return `Hello, ${person.name}!`;
};

console.log(MyConstFunction()); // Hello, World!
console.log(MyConstFunctionWithParam('Dave')); // Hello, Dave!
console.log(MyConstFunctionWithParams('Homer', 'Simpson')); // Hello, Homer Simpson!
console.log(MyConstFunctionWithOptionalParam()); // Hello, World!
console.log(MyConstFunctionWithOptionalParam('Person')); // Hello, Person!
console.log(MyConstFunctionWithDefaultParam('Lisa')); // Hello, Lisa!
console.log(MyFunctionWithComplexArgument({ name: 'Jack' })); // Hello, Jack!

///////////////////////////////////////////////////////////////////////////////////////////

// BELOW ARE THE EXERCISES WE ATTEMPTED DURING LESSON 3 OF THE COURSE

// 1. Basic Arrow Function
// Task: Create an arrow function that returns a fixed message.
// Goal: Understand how arrow functions return values.

const getAppVersion = (): string => {
    // return "Version 1.0"
};

// 2. Arrow Function with One Parameter
// Task: Create an arrow function that takes a username and returns a message.
// Goal: Practice passing a value into an arrow function.

const formatUsername = (username: string): string => {
    // return "User: username"
};

// 3. Arrow Function with Multiple Parameters
// Task: Create an arrow function that takes a file name and file size.
// Goal: Understand how arrow functions use multiple parameters.

const formatFileInfo = (fileName: string, fileSize: number): string => {
    // return "File fileName is fileSize"
};

// 4. Arrow Function with Optional Parameter
// Task: Create an arrow function where a role is optional. If no role is provided, return "Role: Guest".
// Goal: Learn how optional parameters work in arrow functions.

const formatUserRole = (role?: string): string => {
    // use nullish coalescing (??)
};

// 5. Arrow Function with Object Parameter
// Task: Create an arrow function that takes a task object and returns a summary.
// Goal: Practice passing objects into arrow functions.

interface Task {
    title: string;
}

const getTaskSummary = (task: Task): string => {
    // return "Task: task.title"
};

