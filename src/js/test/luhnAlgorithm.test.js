import luhnAlgorithm from '../luhnAlgorithm';

test('luhnAlgorithm - TRUE', () => {
  const cardNumber = '5555555555554444';
  const received = luhnAlgorithm(cardNumber);
  expect(received).toEqual(true);
});
test('luhnAlgorithm - FALSE', () => {
  const cardNumber = '100000000000000';
  const received = luhnAlgorithm(cardNumber);
  expect(received).toEqual(false);
});
