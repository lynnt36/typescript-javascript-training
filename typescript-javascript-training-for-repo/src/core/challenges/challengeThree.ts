// Mini Project: User Access & Profile Summary

interface User {
    username: string;
    age: number;
    isAdmin: boolean;
}

const user: User = {
    username: "lynn",
    age: 10,
    isAdmin: false
};

const isAnAdult = (age: number): boolean => {
    return age >= 18;
};

const hasAccess = (user: User): boolean => {
    return user?.isAdmin || isAnAdult(user?.age);
};

const getUserSummary = (user: User): string => {
    const accessText = hasAccess(user) ? "Has Access " : "Doesnt have Access";
    return `User: ${user?.username}, Age: ${user?.age}, ${accessText}`;
};

console.log(getUserSummary(user));
