import _ from 'lodash';

export const updateItemValue = <T>(...args: T[][][]) => {
  const newObject = {};

  for (let i = 0; i <= args.length; i++) {
    for (let j = 0; j <= args[0][i].length; j++) {
      _.assign(newObject, args[0][i][j]);
    }
  }

  return newObject;
};

export const updateItemValueToOnelavel = <T>(...args: T[][]) => {
  const newObject = {};

  for (let j = 0; j <= args[0].length; j++) {
    _.assign(newObject, args[0][j]);
  }

  return newObject;
};
