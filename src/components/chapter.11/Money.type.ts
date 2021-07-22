export class Money {
  protected cur: string;
  amount: number;

  constructor(
    amount: number,
    cur: string,
  ) {
    this.amount = amount;
    this.cur = cur;
  }

  static dollar(amount: number): Money {
    return new Money(amount, 'USD');
  }

  static franc(amount: number): Money {
    return new Money(amount, 'CHF');
  }

  public currency(): string {
    return this.cur;
  }

  public equals(object: { amount: number, cur: string }): boolean {
    const money = new Money(object.amount, object.cur);
    return this.amount === money.amount && this.currency() === object.cur;
  }

  public times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.cur);
  }

  public toString(): string { // only for debugging
    return this.amount + ' ' + this.cur;
  }
}
