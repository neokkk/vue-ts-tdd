import {
  Bank,
  Expression,
  Money,
} from './Money.type';

/**
 * @todo 더하기
 * @function plus
 */

describe('chapter.12', () => {
  it('add', () => {
    const five: Money = Money.dollar(5);
    const sum: Expression = five.plus(five);
    const bank: Bank = new Bank();
    const reduced: Money = bank.reduce(sum, 'USD');
    expect(Money.dollar(10)).toEqual(reduced);
  });
});
