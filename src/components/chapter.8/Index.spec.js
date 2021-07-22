import { Money, Dollar } from './Money.type';

describe('chapter.8', () => {
  it('factory method', () => {
    const five = Money.dollar(5);

    expect(new Dollar(10).equals(five.times(2))).toBeTruthy();
    expect(new Dollar(15).equals(five.times(3))).toBeTruthy();
  });

  it('test equality', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
    expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();
    expect(Money.franc(5).equals(Money.franc(5))).toBeTruthy();
    expect(Money.franc(5).equals(Money.franc(6))).toBeFalsy();
    expect(Money.dollar(5).equals(Money.franc(6))).toBeFalsy();
  });
});
