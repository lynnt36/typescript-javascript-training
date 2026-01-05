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