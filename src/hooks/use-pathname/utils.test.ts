import '@testing-library/jest-dom/extend-expect';

import { checkedPathname } from './utils';

describe('checked hooks use-pathname utils function checkedPathname', () => {
  const checked = (description: string, path: string, result: boolean) =>
    it(`should render ${description}`, () => {
      expect(checkedPathname(path)).toBe(result);
    });

  checked('false because path is /main', '/main', false);
  checked('true because path is /validation', '/validation', true);
  checked('false because path is /new', '/new', false);
});
