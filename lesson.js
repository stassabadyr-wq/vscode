const normalizePhone = (number = '') => {
  if (!number) return '';
  
  if (number.startsWith('+7')) return number;
  if (number.startsWith('8')) return '+7' + number.slice(1);
  if (number.startsWith('7')) return '+' + number;
  
  return number;
};

console.log(normalizePhone('79788200000'))