import {
  Bank,
  Expression,
  Money,
  Sum,
} from './Money.type';

describe('chapter.13', () => {
  it('plusReturnSum', () => {
    const sum: Expression = new Sum(Money.dollar(3), Money.dollar(4));
    const bank: Bank = new Bank();
    const result: Money = bank.reduce(sum, 'USD');    
    expect(Money.dollar(7)).toEqual(result);
  });

  it('reduceMoney', () => {
    const bank: Bank = new Bank();
    const result: Money = bank.reduce(Money.dollar(1), 'USD');
    expect(Money.dollar(1)).toEqual(result);
  });
});
