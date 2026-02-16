class ObjectMethods {
    constructor() {
        // Object.keys, Object.values, Object.entries

        const person = {
            name: 'John',
            age: 30,
            city: 'London'
        };

        // The following methods are used to retrieve keys, values, and entries from an object.
        // These methods return arrays containing the respective properties of the object, meaning they can be iterated over or manipulated as needed.

        const personKeys = Object.keys(person);
        console.log('Keys:', personKeys); // ['name', 'age', 'city']

        for (const key of personKeys) {
            if (key === 'age') {
                console.log('Object.keys(person) contains the key "age"');
            }
        }

        const personValues = Object.values(person);
        console.log('Values:', personValues); // ['John', 30, 'London']

        for (const value of personValues) {
            if (value === 30) {
                console.log('Object.values(person) contains the value 30');
            }
        }

        const personEntries = Object.entries(person);
        console.log('Entries:', personEntries); // [['name', 'John'], ['age', 30], ['city', 'London']]
    }
}