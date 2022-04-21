const MAX_LENGTH = 140;
const string = 'Салли Сперроу гуляет по заброшенному особняку и замечает, что статуи там могут двигаться, пока на них никто не смотрит.'

const checkMaxLength = (text, maxLength) => text.length <= maxLength;

checkMaxLength(string, MAX_LENGTH);
