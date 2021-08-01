export class Money {
  protected currency: string;
  amount: number;

  constructor(
    amount: number,
    currency: string,
  ) {
    this.amount = amount;
    this.currency = currency;
  }

  static dollar(amount: number): Dollar {
    return new Dollar(amount, 'USD');
  }

  static franc(amount: number): Franc {
    return new Franc(amount, 'CHF');
  }

  public getCurrency(): string {
    return this.currency;
  }

  public equals(object: { amount: number, currency: string }): boolean {
    const money = new Money(object.amount, object.currency);
    return this.amount === money.amount && this.getCurrency() === object.currency;
  }

  public times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency);
  }

  public toString(): string { // only for debugging
    return this.amount + ' ' + this.currency;
  }
}

export class Dollar extends Money {
  constructor(
    amount: number,
    currency: string,
  ) {
    super(amount, currency);
  }
}

export class Franc extends Money {
  constructor(
    amount: number,
    currency: string,
  ) {
    super(amount, currency);
  }
}
