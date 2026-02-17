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

        ///////////////////////////////////////////////////////////////////////////////////////////

        // BELOW ARE THE EXERCISES WE ATTEMPTED DURING LESSON 9 OF THE COURSE

        // 1. Create an object called student with the following properties:
        // - name
        // - age
        // - course
        // Then log the entire object, the students name, and the students course.
        // Goal: Understand object structure and property access.

        // add code here

        // 2. Create an object called car with:
        // - brand
        // - model
        // - year
        // Then Change the year to a newer value, Add a new property called color, and log the updated object.
        // Goal: Understand that objects can be modified after creation.

        // add code here

        // 3. Create two objects
        // - loginInfo with properties username and password
        // - profileInfo with properties firstName, lastName and email
        // Merge them into a new object called user.
        // Log the merged object.
        // Goal: Understand combining objects with the spread operator.

        // add code here

        // 4. Create an object called product with: name, price, stock
        // Then: log all the keys, log all the values, use a loop to log each key.
        // Goal: Understand Object.keys and working with object data dynamically.

        // add code here

        // 5. Create an object called employee with: name, position, address (which is another object with street, city, postcode)
        // Then: destructure the city into a variable, and log the city.
        // Goal: Understand nested objects and destructuring.

        // add code here
    }
}

console.log(new Objects());