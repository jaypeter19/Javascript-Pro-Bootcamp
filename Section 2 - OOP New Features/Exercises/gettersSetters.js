// Exercise 1
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

// Exercise 2

class UserProfile {
    constructor(username, email, birthdate) {
        this.username = username;
        this.email = email;
        this.birthdate = birthdate;
    }

    set username(value) {
        if (value.length === 0) {
            throw new Error("Invalid username");
        } else {
            this._username = value;
        }
    }

    set email(value){
        if (value.includes('@')) {
            this._email = value;
        } else {
            throw new Error('Invalid email');
        }
    }

    set birthdate(value){
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        if (regex.test(value)) {
            this._birthdate = value;
        } else {
            throw new Error('Invalid birthdate');
        }
    }

    get username() {
        return this._username;
    }

    get email() {
        return this._email;
    }

    get birthdate() {
        return this._birthdate;
    }
}
