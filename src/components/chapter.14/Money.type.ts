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

  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency);
  }

  toString(): string { // only for debugging
    return this.amount + ' ' + this.currency;
  }

  plus(addend: Money): Expression {
    return new Sum(this, addend);
  }

  reduce(bank: Bank, to: string): Money {
		const rate = bank.rate(this.currency, to);
		return new Money(this.amount / rate, to);
	}
}

export class Bank {
  #rates: Map<unknown, number> = new Map();

	rate(from: string, to: string): number {
		const rate: number = this.#rates.get(new Pair(from, to).key) || 1;
		return rate;
	}

	addRate(from: string, to: string, rate: number): void {
		this.#rates.set(new Pair(from, to).key, rate);
	}
}

export class Sum implements Expression {
  augend: Money;
  addend: Money;

  constructor(augend: Money, addend: Money) {
    this.augend = augend;
    this.addend = addend;
  }

  reduce(bank: Bank, to: string): Money {
    const amount = this.augend.amount + this.addend.amount;
    return new Money(amount, to);
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

  // equals(object: Object): boolean {
  //   const pair: Pair = <Pair>object;
  //   return this.#from === pair.#from && this.#to === pair.#to;
  // }

  // hashCode(): number {
  //   return 0;
  // } // is valid at Java
}

export interface Expression {
  reduce(bank: Bank, to: string): Money;
}
