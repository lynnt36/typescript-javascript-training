// This is a basic TypeScript function
function MyFunction(): string {
    return 'Hello, World!';
}

// This is a TypeScript function with a parameter
function MyFunctionWithParam(name: string): string {
    return `Hello, ${name}!`;
}

// This is a TypeScript function with multiple parameters
function MyFunctionWithParams(forename: string, surname: string): string {
    return `Hello, ${forename} ${surname}!`;
}

// This is a TypeScript function with an optional parameter
function MyFunctionWithOptionalParam(name?: string): string {
    return `Hello, ${name ?? 'World'}!`;
}

// This is a TypeScript function with a default parameter
function MyFunctionWithDefaultParam(name: string = 'World'): string {
    return `Hello, ${name}!`;
}

interface Person {
    name: string;
}
// This is a TypeScript function that takes in a complex argument
function MyFunctionWithComplexArgument(person: Person): string {
    return `Hello, ${person.name}!`;
}

console.log(MyFunction()); // Hello, World!
console.log(MyFunctionWithParam('Dave')); // Hello, Dave!
console.log(MyFunctionWithParams('Homer', 'Simpson')); // Hello, Homer Simpson!
console.log(MyFunctionWithOptionalParam()); // Hello, World!
console.log(MyFunctionWithOptionalParam('Person')); // Hello, Person!
console.log(MyFunctionWithDefaultParam('Lisa')); // Hello, Lisa!
console.log(MyFunctionWithComplexArgument({ name: 'Jack' })); // Hello, Jack! 