export class Money {
  amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  public times(multiplier: number) {
    return new Money(this.amount * multiplier); // 새로운 객체를 반환하자
  }

  public equals(money: Money): boolean {
    return this.amount === money.amount;
  }
}

export class Dollar extends Money {
  public equals(money: Money): boolean {
    return this.amount === new Dollar(money.amount).amount;
  }
}

export class Franc extends Money {
  public equals(money: Money): boolean {
    return this.amount === new Franc(money.amount).amount;
  }
}
