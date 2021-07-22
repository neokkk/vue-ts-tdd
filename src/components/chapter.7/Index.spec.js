import { Dollar, Franc } from './Money.type';

describe('chapter.7', () => {
  it('test equality', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
    expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();
    expect(new Franc(5).equals(new Franc(5))).toBeTruthy();
    expect(new Franc(5).equals(new Franc(6))).toBeFalsy();
    expect(new Dollar(5).equals(new Franc(6))).toBeFalsy();
  });

  // 금액과 클래스가 동일해야만 두 Money가 같다.
  // 기존의 this.amount === object.amount에
  // this.constructor === object.constructor 클래스 비교를 추가했다.
});
