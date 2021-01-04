import _ from 'lodash';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { checkedPathname } from './utils';

export const usePathname = () => {
  const [isValidationPathname, setIsValidationPathname] = useState<boolean>(false);
  const {
    location: { pathname },
  } = useHistory();

  useEffect(() => {
    _.flow([checkedPathname, setIsValidationPathname])(pathname);

    return () => {
      _.flow([checkedPathname, setIsValidationPathname])(pathname);
    };
  }, [pathname]);

  return {
    isValidationPathname,
  };
};
