import {
  Bank,
  Money,
} from './Money.type';

describe('chapter.14', () => {
  it('reduceMoneyDifferentCurrency', () => {
    const bank: Bank = new Bank();
    bank.addRate('CHF', 'USD', 2);

    const result: Money = Money.franc(2).reduce(bank, 'USD');
    expect(result).toEqual(Money.dollar(1));
  });

  it('identityRate', () => {
    expect(new Bank().rate('USD', 'USD')).toEqual(1);
  });
});
