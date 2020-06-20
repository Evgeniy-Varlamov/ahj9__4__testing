import getPaySystem from '../getPaySystem';

test('getPaySystem - AmericanExpress (34)', () => {
  const expected = 'american';
  const cardNumber = '3400000000000000';
  const received = getPaySystem(cardNumber);
  expect(received).toBe(expected);
});
test('getPaySystem - AmericanExpress (37)', () => {
  const expected = 'american';
  const cardNumber = '3711111111111111';
  const received = getPaySystem(cardNumber);
  expect(received).toBe(expected);
});
test('getPaySystem - DinersClub (30)', () => {
  const expected = 'club';
  const cardNumber = '3000000000000000';
  const received = getPaySystem(cardNumber);
  expect(received).toBe(expected);
});
test('getPaySystem - DinersClub (36)', () => {
  const expected = 'club';
  const cardNumber = '3611111111111111';
  const received = getPaySystem(cardNumber);
  expect(received).toBe(expected);
});
test('getPaySystem - DinersClub (38)', () => {
  const expected = 'club';
  const cardNumber = '3822222222222222';
  const received = getPaySystem(cardNumber);
  expect(received).toBe(expected);
});
test('getPaySystem - Discover', () => {
  const expected = 'discover';
  const cardNumber = '6011111111111111';
  const received = getPaySystem(cardNumber);
  expect(received).toBe(expected);
});
test('getPaySystem - JCB (31)', () => {
  const expected = 'jcb';
  const cardNumber = '3100000000000000';
  const received = getPaySystem(cardNumber);
  expect(received).toBe(expected);
});
test('getPaySystem - JCB (35)', () => {
  const expected = 'jcb';
  const cardNumber = '3111111111111111';
  const received = getPaySystem(cardNumber);
  expect(received).toBe(expected);
});
test('getPaySystem - MasterCard (51)', () => {
  const expected = 'mastercard';
  const cardNumber = '5100000000000000';
  const received = getPaySystem(cardNumber);
  expect(received).toBe(expected);
});
test('getPaySystem - MasterCard (52)', () => {
  const expected = 'mastercard';
  const cardNumber = '5211111111111111';
  const received = getPaySystem(cardNumber);
  expect(received).toBe(expected);
});
test('getPaySystem - MasterCard (53)', () => {
  const expected = 'mastercard';
  const cardNumber = '5322222222222222';
  const received = getPaySystem(cardNumber);
  expect(received).toBe(expected);
});
test('getPaySystem - MasterCard (54)', () => {
  const expected = 'mastercard';
  const cardNumber = '5433333333333333';
  const received = getPaySystem(cardNumber);
  expect(received).toBe(expected);
});
test('getPaySystem - MasterCard (55)', () => {
  const expected = 'mastercard';
  const cardNumber = '5144444444444444';
  const received = getPaySystem(cardNumber);
  expect(received).toBe(expected);
});
test('getPaySystem - МИР', () => {
  const expected = 'mir';
  const cardNumber = '200000000000000';
  const received = getPaySystem(cardNumber);
  expect(received).toBe(expected);
});
test('getPaySystem - VISA', () => {
  const expected = 'visa';
  const cardNumber = '400000000000000';
  const received = getPaySystem(cardNumber);
  expect(received).toBe(expected);
});
test('getPaySystem - false', () => {
  const cardNumber = '700000000000000';
  const received = getPaySystem(cardNumber);
  expect(received).toEqual(false);
});
