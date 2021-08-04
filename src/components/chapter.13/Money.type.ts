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

  reduce(to: string) {
    return this;
  }
}

export class Bank {
  reduce(source: Expression, to: string): Money {
		return source.reduce(to);
	}
}

export class Sum implements Expression {
  augend: Money;
  addend: Money;

  constructor(augend: Money, addend: Money) {
    this.augend = augend;
    this.addend = addend;
  }

  reduce(to: string): Money {
    const amount = this.augend.amount + this.addend.amount;
    return new Money(amount, to);
  }
}

export interface Expression {
  reduce(to: string): Money;
}
