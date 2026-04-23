class User {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get fullName(firstName, lastName) {
        return `${firstName} ${lastName}`;
    }

    set fullName(newName) {
        const [first, last] = newName.split(' ')
        this._firstName = first;
        this._lastName = last;
    }
}