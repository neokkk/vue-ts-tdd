import { Money } from './Money.type';

describe('chapter.11', () => {
  it('test equality', () => {
    expect(Money.dollar(10).equals(Money.dollar(10))).toBeTruthy();
    expect(Money.franc(10).equals(Money.franc(10))).toBeTruthy();
    expect(Money.dollar(10).equals(Money.franc(10))).toBeFalsy();
  });
});
