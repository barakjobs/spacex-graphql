export const regexSpecialCharacters = (value: string) =>
  value.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/\s]/gi, '');

export const regexWhiteSpaces = (value: string) => value.replace(/\s/gi, '');
