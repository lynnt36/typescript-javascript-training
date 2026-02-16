class Objects {
    constructor() {
        const person = {
            name: 'Matt',
            age: 26,
        };

        console.log('Person', person);

        const contactDetails = {
            email: 'matt@hotmail.com',
            phone: '012312312223',
        };

        console.log('Contact Details', contactDetails);

        // ... is the spread operator, this gives us the ability to merge two objects together
        const user = {
            ...person,
            ...contactDetails,
        };

        console.log('User', user);


        // if we have the same key in both objects, the last object spread takes precedence
        const a = { key: 'hello' };
        const b = { key: 'goodbye' };

        console.log('Duplicate keys', { ...a, ...b });

        // there is no limit to how many we can combine/spread
        const first = { a: 1 };
        const second = { b: 2 };
        const third = { c: 3 };
        const fourth = { d: 4 };

        const all = {
            ...first,
            ...second,
            ...third,
            ...fourth,
        }

        console.log('All', all);
    }
}

console.log(new Objects());