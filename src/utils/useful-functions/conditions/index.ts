import _ from 'lodash';

export const conditionMouseEvent = (id: string, compareParam: string, mouseEventType: string): boolean =>
  id === compareParam && mouseEventType === 'mouseover' ? true : false;

export const defaultValue = (value: string | null | undefined, defValue: string): string =>
  [undefined, null, ''].includes(value) ? _.defaultTo(undefined, defValue) : _.defaultTo(value, defValue);

export const defaultValueNumber = (value: number, defValue: number): number =>
  value === undefined ? _.defaultTo(undefined, defValue) : _.defaultTo(value, defValue);
