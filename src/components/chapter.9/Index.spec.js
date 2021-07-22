import { Money, Dollar } from '../chapter.10/Money.type';

describe('chapter.9', () => {
  it('factory method', () => {
    const five = Money.dollar(5);

    expect(new Dollar(10).equals(five.times(2))).toBeTruthy();
    expect(new Dollar(15).equals(five.times(3))).toBeTruthy();
  });
});
