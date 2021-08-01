export class Money {
  amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  static dollar(amount: number): Dollar {
    return new Dollar(amount);
  }

  static franc(amount: number): Franc {
    return new Franc(amount);
  }

  public equals(object: { amount: number }): boolean {
    return this.constructor === object.constructor && this.amount === object.amount;
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
