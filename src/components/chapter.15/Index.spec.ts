import {
  Bank,
  Expression,
  Money,
} from './Money.type';

describe('chapter.15', () => {
  it('mixedAddition', () => {
    const fiveBucks: Expression = Money.dollar(5);
    const tenFrancs: Expression = Money.franc(10);
    const bank: Bank = new Bank();
    bank.addRate('CHF', 'USD', 2);

    const result: Money = bank.reduce(fiveBucks.plus(tenFrancs), 'USD');
    expect(result).toEqual(Money.dollar(10));
  });
});
