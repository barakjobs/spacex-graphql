export const checkedPathname = (pathname: string): boolean => {
  if (pathname === '/main') return false;
  return pathname === '/validation' && true;
};
