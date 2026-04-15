// Bank Account class exercise

class BankAccount {
    constructor(balance = 0, accountHolder, accountNumber){
        this.balance = balance;
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
    }
    deposit(amt){
        if (amt > 0) {
            return (`Deposited ${amt}. New balance $${this.balance += amt}`);
        }
        console.log("You can't deposite a negative amount.");
        
        
    }
    withdray(amt) {
        if (amt > this.balance) {
            return ('Insufficient Funds')
        }
        return (`Withdran ${amt}. New Balance: $${this.balance -= amt}`);
    }
}