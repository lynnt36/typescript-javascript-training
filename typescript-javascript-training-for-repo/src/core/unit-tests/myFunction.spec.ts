import {
    MyFunction,
    MyFunctionWithParam,
    MyFunctionWithParams,
    MyFunctionWithOptionalParam,
    MyFunctionWithDefaultParam,
    MyFunctionWithComplexArgument
} from '../basic/myFunction';

describe('MyFunction', () => {
    it('returns Hello, World!', () => {
        expect(MyFunction()).toBe('Hello, World!');
    });
});

describe('MyFunctionWithParam', () => {
    it('returns Hello, Dave!', () => {
        expect(MyFunctionWithParam('dave')).toBe('Hello, dave!');
    });
});

describe('MyFunctionWithParams', () => {
    it('returns Hello, Homer Simpson!', () => {
        expect(MyFunctionWithParams('Homer', 'Simpson')).toBe('Hello, Homer Simpson!');
    });
});

describe('MyFunctionWithOptionalParam', () => {
    it('returns Hello, World! when no param', () => {
        expect(MyFunctionWithOptionalParam()).toBe('Hello, World!');
    });

    it('returns Hello, Person! when param is provided', () => {
        expect(MyFunctionWithOptionalParam('Person')).toBe('Hello, Person!');
    });
});

describe('MyFunctionWithDefaultParam', () => {
    it('returns Hello, World! when no param', () => {
        expect(MyFunctionWithDefaultParam()).toBe('Hello, World!');
    });

    it('returns Hello, Lisa! when param is provided', () => {
        expect(MyFunctionWithDefaultParam('Lisa')).toBe('Hello, Lisa!');
    });
});

describe('MyFunctionWithComplexArgument', () => {
    it('returns Hello, Jack!', () => {
        expect(MyFunctionWithComplexArgument({ name: 'Jack' })).toBe('Hello, Jack!');
    });
});

describe('isAnAdult', () => {
    it('returns true when age is 18 or over', () => {
        expect(isAnAdult(18)).toBe(true)
    })
})

//////////////////////////////////////////////////////////////////////////

// BELOW ARE THE EXERCISES WE ATTEMPTED DURING LESSON 5 OF THE COURSE

// 1. Write a boolean unit test for the below function
// both true and false tests need to be covered.
// place the below function in myFunction.ts and create the unit tests in this file (myFunction.spec.ts)

export function isZero(num: number): boolean {
    return num === 0;
}

// 2. Write a number unit test for the below function
// cover 3 test cases: positive number, negative number and zero.
// place the below function in myFunction.ts and create the unit tests in this file (myFunction.spec.ts)

export function addTen(num: number): number {
    return num + 10;
}

// 3. Write a string unit test for the below function
// need to output the interpolated string correctly.
// place the below function in myFunction.ts and create the unit tests in this file (myFunction.spec.ts)

export function formatScore(score: number): string {
    return `Score: ${score}`;
}

// 4. write unit tests for the below function which is a boolean function with logic attatched.
// need 3 unit tests, one for admin under 18, one for non-admin adult, and non-admin under 18.
// place the below function in myFunction.ts and create the unit tests in this file (myFunction.spec.ts)

export function canAccess(age: number, isAdmin: boolean): boolean {
    return isAdmin || age >= 18;
}

// 5. write unit tests for the below function which is a string function with logic attatched.
// need 3 unit tests, one for admin user, one for adult non-admin, one for underage non-admin.
// place the below function in myFunction.ts and create the unit tests in this file (myFunction.spec.ts)

export function getAccessMessage(age: number, isAdmin: boolean): string {
    if (isAdmin || age >= 18) {
        return "Access granted";
    }

    return "Access denied";
}


