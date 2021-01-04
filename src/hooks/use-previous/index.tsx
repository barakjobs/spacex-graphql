/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react';
import _ from 'lodash';

export const usePrevious = (value: any) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

export const usePreviousExtended = (state: any) => {
  const length = _.mapValues(state, 'length');

  const ref = useRef<any>();

  useEffect(() => {
    ref.current = length;
  });

  return ref.current;
};
