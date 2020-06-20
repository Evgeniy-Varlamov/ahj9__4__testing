export default function getPaySystem(number) {
  if (/^4/.test(number)) return 'visa';
  if (/^5[1-5]/.test(number)) return 'mastercard';
  if (/^2/.test(number)) return 'mir';
  if (/^3[15]/.test(number)) return 'jcb';
  if (/^3[068]/.test(number)) return 'club';
  if (/^60/.test(number)) return 'discover';
  if (/^3[47]/.test(number)) return 'american';
  return false;
}
