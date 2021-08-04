import {
  Bank,
  Expression,
  Money,
  Sum,
} from './Money.type';

describe('chapter.16', () => {
  it('sumPlusMoney', () => {
    const fiveBucks: Expression = Money.dollar(5);
    const tenFrancs: Expression = Money.franc(10);
    const bank: Bank = new Bank();
    bank.addRate('CHF', 'USD', 2);

    const sum: Expression = new Sum(fiveBucks, tenFrancs).plus(fiveBucks);
    const result: Money = bank.reduce(sum, 'USD');
    expect(result).toEqual(Money.dollar(15));
  });

  it('sumTimes', () => {
    const fiveBucks: Expression = Money.dollar(5);
    const tenFrancs: Expression = Money.franc(10);
    const bank: Bank = new Bank();
    bank.addRate('CHF', 'USD', 2);

    const sum: Expression = new Sum(fiveBucks, tenFrancs).times(2);
    const result: Money = bank.reduce(sum, 'USD');
    expect(result).toEqual(Money.dollar(20));
  });

  it('plusSameCurrencyReturnsMoney', () => {
    const sum: Expression = Money.dollar(1).plus(Money.dollar(1));
    expect(sum instanceof Money).toBeTruthy();
  });
});
