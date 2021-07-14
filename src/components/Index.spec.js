// import { shallowMount } from '@vue/test-utils';
// import Index from './Index.vue';
import { Dollar } from './Money.type';

describe('Index Component', () => {
  // const wrapper = shallowMount(Index);

  test('무조건 통과하는 케이스', () => {
    const five = new Dollar(5);
    expect(five.amount).toBe(5);
  });
  
  test('문제점 1. dollar의 값이 변하지 않게 하려면?', () => {
    const five = new Dollar(5);
    const ten = five.times(2);

    expect(five.amount).not.toBe(10);
    expect(five.amount).toBe(5);
    expect(ten.amount).toBe(10);
  });

  test('equals 메서드 구현하기', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBe(true); // 문제점 2. null값일 경우
    expect(new Dollar(5).equals(new Dollar(6))).toBe(false);
  });

  test('비교 방법을 바꿔보자', () => {
    const five = new Dollar(5);

    expect(new Dollar(10)).toEqual(five.times(2));
    expect(new Dollar(15)).toEqual(five.times(3));
  });
});
