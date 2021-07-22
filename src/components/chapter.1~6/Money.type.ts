export abstract class Money {
  amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  public equals(object: { amount: number }): boolean {
    return this.amount === object.amount;
  }
}

export class Dollar extends Money {
  constructor(amount: number) {
    super(amount);
  }

  public times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier);
  }
}

export class Franc extends Money {
  constructor(amount: number) {
    super(amount);
  }

  public times(multiplier: number): Money {
    return new Franc(this.amount * multiplier);
  }
}
