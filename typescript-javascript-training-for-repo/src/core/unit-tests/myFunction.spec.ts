import {
    MyFunction,
    MyFunctionWithParam,
    MyFunctionWithParams,
    MyFunctionWithOptionalParam,
    MyFunctionWithDefaultParam,
    MyFunctionWithComplexArgument,
    isAnAdult,
    add,
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
        expect(isAnAdult(18)).toBe(true);
    });

    it('returns false when age is 17 or under', () => {
        expect(isAnAdult(17)).toBe(false);
    });
});

describe('add', () => {
    it('adds two positive numbers', () => {
        expect(add(2, 3)).toBe(5);
    });
});
