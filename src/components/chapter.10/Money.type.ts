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

  static dollar(amount: number): Dollar {
    return new Dollar(amount, 'USD');
  }

  static franc(amount: number): Franc {
    return new Franc(amount, 'CHF');
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

export class Dollar extends Money {
  constructor(
    amount: number,
    cur: string,
  ) {
    super(amount, cur);
  }
}

export class Franc extends Money {
  constructor(
    amount: number,
    cur: string,
  ) {
    super(amount, cur);
  }
}
