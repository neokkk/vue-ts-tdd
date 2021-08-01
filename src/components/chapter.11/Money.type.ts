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

  static dollar(amount: number): Money {
    return new Money(amount, 'USD');
  }

  static franc(amount: number): Money {
    return new Money(amount, 'CHF');
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
