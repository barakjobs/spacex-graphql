import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import { ROUTE_URLS } from '@routes/index';

const RocketGrapqhl = lazy(() => import('@components/rocket-grapqhl'));

export const Main = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route exact={true} path={ROUTE_URLS.Main} component={RocketGrapqhl} />
    </Switch>
  </Suspense>
);
