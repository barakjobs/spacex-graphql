import { secureConsole } from '@secure-console/index';

const s = secureConsole;

declare global {
  const secureConsole: typeof s;
}
