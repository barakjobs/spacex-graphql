import '@testing-library/jest-dom/extend-expect';

import * as UF from './index';

describe('checked defaultValue functions from useful-functions', () => {
  const itReturn = (info: string, value: string | undefined | null, defaultValue: string, expectedValue: string) => {
    return it(info, () => {
      expect(UF.defaultValue(value, defaultValue)).toBe(expectedValue);
    });
  };

  itReturn('should return "etykieta" when value is undefined', undefined, 'etykieta', 'etykieta');
  itReturn('should return "etykieta" when value is null', null, 'etykieta', 'etykieta');
  itReturn('should return "etykieta" when value is empty string', '', 'etykieta', 'etykieta');
  itReturn('should return "Etykieta" when value is Etykieta', undefined, 'Etykieta', 'Etykieta');
});

describe('checked defaultValueNumber functions from useful-functions', () => {
  const itReturn = (info: string, value: number, defaultValue: number, expectedValue: number) => {
    return it(info, () => {
      expect(UF.defaultValueNumber(value, defaultValue)).toBe(expectedValue);
    });
  };

  itReturn('should return 3 when value is 3', 3, 1, 3);
  itReturn('should return 4 when value is 4', 4, 2, 4);
  itReturn('should return 1 when value is 1', 1, 3, 1);
});
