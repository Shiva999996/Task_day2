// 1️ Build a Closure-Based Counter System

function createCounter() {
    let count = 0 //private variable 

    return function () {
        count++;
        return count;
    };
}

//usage
const counter = createCounter()

console.log(counter());
console.log(counter());
console.log(counter());






// 2️ Function Factory Returning Multiple Utilities
function counterfactory() {
    let count = 0    //private variable

    return {
        increment() {
            count++;
            return count;
        },

        Decrement() {
            count--;
            return count;
        },

        reset() {
            count = 0;
            return count;
        },

        getvalue() {
            return count;
        }
    }
}

//usage
let facCounter = counterfactory();

console.log(facCounter.increment());
console.log(facCounter.increment());
console.log(facCounter.Decrement());
console.log(facCounter.reset());
console.log(facCounter.getvalue());





// 3 Implement Private Variables Using Closures
//  Example: Bank Account System

function createBankAccount(initalbalance) {
    let balance = initalbalance;

    return {
        deposit(amount) {
            balance += amount;
            return balance
        },

        withdrawl(amount) {
            if (amount > balance) {
                return "unsufficient balance"
            }
            balance -= amount;
            return balance;
        },

        getbalance() {
            return balance;
        }
    }
}

let bankinfo = createBankAccount(1000);

console.log(bankinfo.deposit(500));   //1500
console.log(bankinfo.withdrawl(300)); //1200
console.log(bankinfo.getbalance());  //1200



