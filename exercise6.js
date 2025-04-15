class Account {
  constructor (owner, balance = 0) {
    this.owner = owner
    this.balance = balance
  }

  deposit (amount) {
    if (amount > 0) {
      this.balance += amount
      // console.log(`${this.owner} deposited $${amount}. New balance: $${this.balance}`)
    } else {
      console.log('Deposit amount must be positive.')
    }
  }

  withdraw (amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount
      // console.log(`${this.owner} withdrew $${amount}. New balance: $${this.balance}`)
    } else if (amount > this.balance) {
      console.log('Insufficient funds.')
    } else {
      console.log('Withdrawal amount must be positive.')
    }
  }
}

// Creating an account object
const userAccount = new Account('John Doe', 0)
userAccount.deposit(300)
userAccount.withdraw(100)

console.log(`This account has a balance of' R${userAccount.this.amount}. There have
    been deposits totalling R${this.deposit.amount} and withdarawals totalling R${this.withdraw.amount}`)
