// This is a basic TypeScript function
export function MyFunction(): string {
    return 'Hello, World!';
}

// This is a TypeScript function with a parameter
export function MyFunctionWithParam(name: string): string {
    return `Hello, ${name}!`;
}

// This is a TypeScript function with multiple parameters
export function MyFunctionWithParams(forename: string, surname: string): string {
    return `Hello, ${forename} ${surname}!`;
}

// This is a TypeScript function with an optional parameter
export function MyFunctionWithOptionalParam(name?: string): string {
    return `Hello, ${name ?? 'World'}!`;
}

// This is a TypeScript function with a default parameter
export function MyFunctionWithDefaultParam(name: string = 'World'): string {
    return `Hello, ${name}!`;
}

export interface Person {
    name: string;
}
// This is a TypeScript function that takes in a complex argument
export function MyFunctionWithComplexArgument(person: Person): string {
    return `Hello, ${person.name}!`;
}

export function isAnAdult(age: number): boolean {
    return age >= 18;
}

export function add (a: number, b: number): number {
    return a + b;
}

console.log(MyFunction()); // Hello, World!
console.log(MyFunctionWithParam('Dave')); // Hello, Dave!
console.log(MyFunctionWithParams('Homer', 'Simpson')); // Hello, Homer Simpson!
console.log(MyFunctionWithOptionalParam()); // Hello, World!
console.log(MyFunctionWithOptionalParam('Person')); // Hello, Person!
console.log(MyFunctionWithDefaultParam('Lisa')); // Hello, Lisa!
console.log(MyFunctionWithComplexArgument({ name: 'Jack' })); // Hello, Jack!

///////////////////////////////////////////////////////////////////////////////////////////

// BELOW ARE THE EXERCISES WE ATTEMPTED DURING LESSON 3 OF THE COURSE

// 1. Basic function
// Task: Create a function that returns a fixed message about the system status.
// Goal: Understand how a function returns a value.

function getSystemStatus(): string {
    // return "System online"
}

// 2. Function with one parameter
// Task: Create a function that takes a product name and returns a message.
// Goal: Practice passing a value into a function.

function describeProduct(product: string): string {
    // return "Product: product"
}

// 3. Function with multiple parameters
// Task: Create a function that takes a product name and a price and returns a summary.
// Goal: Understand how functions use multiple parameters.

function formatPrice(product: string, price: number): string {
    // return "Product: product costs £price"
}

// 4. Function with optional parameter
// Task: Create a function where a discount code is optional. If no code is provided, show "No discount applied".
// Goal: Learn how optional parameters work.

function applyDiscount(code?: string): string {
    // use nullish operator (??)
}

// 5. Function with Object Parameter
// Task: Create a function that takes an order object and returns a summary.
// Goal: Practice passing objects into functions.

interface Order {
    id: number;
}

function getOrderSummary(order: Order): string {
    // return "Order ID: order.id"
}

