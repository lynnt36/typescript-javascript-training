const person = {
    name: 'matt',
    age: 26,
    address: {
        line1: 'addr 1'
    },
    email: 'email@address.com',
    pets: [],
};

export class Destructuring {
    constructor() {
        // so to access the `name` property, there are a few ways we can go about this
        const name = person.name;
        console.log('direct access', name);

        // but we can also use a concept called destructuring
        // const { name } = person;
        // console.log('destructed const', name);

        // we can destructure multiple properties at once
        const { address, email } = person;
        console.log('destructure const multiple', address, email);

        // we can also destructure and rename the properties
        const { email: emailAddress } = person;
        console.log('destructure const rename', emailAddress);

        // we can also destructure and provide default values when a value is undefined
        const p = { age: undefined };
        const { age = 30 } = p;
        console.log('destructure const default', age);

        // we can remove properties from an object using destructuring
        const { pets, ...rest } = person;
        console.log('destructure const remove', rest);

        // we can also destructure nested properties - this can get a bit messy, so use sparingly
        const { address: { line1 } } = person;
        console.log('destructure const nested', line1);

        // we can also destructure in function parameters
        this.myFunction(person);
    }

    // typeof infers the interface/model based on the data in the person object
    myFunction({ name }: typeof person) {
        console.log('destructure function param', name);
    }
}

console.log(new Destructuring());