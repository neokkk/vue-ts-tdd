export class Money implements Expression {
  protected currency: string;
  amount: number;

  constructor(
    amount: number,
    currency: string,
  ) {
    this.amount = amount;
    this.currency = currency;
  }

  static dollar(amount: number): Money {
    return new Money(amount, 'USD');
  }

  static franc(amount: number): Money {
    return new Money(amount, 'CHF');
  }

  getCurrency(): string {
    return this.currency;
  }

  equals(object: { amount: number, currency: string }): boolean {
    const money = new Money(object.amount, object.currency);
    return this.amount === money.amount && this.getCurrency() === object.currency;
  }

  times(multiplier: number): Expression {
    return new Money(this.amount * multiplier, this.currency);
  }

  toString(): string { // only for debugging
    return this.amount + ' ' + this.currency;
  }

  plus(addend: Expression): Expression {
    return new Sum(this, addend);
  }

  reduce(bank: Bank, to: string): Money {
		const rate = bank.rate(this.currency, to);
		return new Money(this.amount / rate, to);
	}
}

export class Bank {
  #rates: Map<unknown, number> = new Map();

  reduce(source: Expression, to: string) {
    return source.reduce(this, to);
  }

	rate(from: string, to: string): number {
		const rate: number = this.#rates.get(new Pair(from, to).key) || 1;
		return rate;
	}

	addRate(from: string, to: string, rate: number): void {
		this.#rates.set(new Pair(from, to).key, rate);
	}
}

export class Sum implements Expression {
  augend: Expression;
  addend: Expression;

  constructor(augend: Expression, addend: Expression) {
    this.augend = augend;
    this.addend = addend;
  }

  reduce(bank: Bank, to: string): Money {
		const amount: number = this.augend.reduce(bank, to).amount + this.addend.reduce(bank, to).amount;
		return new Money(amount, to);
	}

  plus(addend: Expression): Expression {
    return new Sum(this, addend);
  }

  times(multiplier: number) {
    return new Sum(this.augend.times(multiplier), this.addend.times(multiplier));
  }
}

class Pair {
  #from: string;
  #to: string;

  constructor(from: string, to: string) {
    this.#from = from;
    this.#to = to;
  }

  get key() {
    return Symbol.for(`Pair {${this.#from}: ${this.#to}}`);
  }
}

export interface Expression {
  reduce(bank: Bank, to: string): Money;
  plus(addend: Expression): Expression;
  times(multiplier: number): Expression;
}
