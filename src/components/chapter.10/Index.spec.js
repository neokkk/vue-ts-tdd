import { Money, Franc, Dollar } from '../chapter.9/Money.type';

describe('chapter.10', () => {
  it('test equality', () => {
    expect(new Money(10, 'USD').equals(new Dollar(10, 'USD')));
    expect(new Money(10, 'CHF').equals(new Franc(10, 'CHF')));
  });
});
