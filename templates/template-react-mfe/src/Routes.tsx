import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const ExamplePage = lazy(() => import('./pages/ExamplePage/ExamplePage'));

const Routes = (): JSX.Element => {
  return (
    <Suspense fallback={<span>Loading ...</span>}>
      <Switch>
        <Route path="/" component={ExamplePage} />
      </Switch>
    </Suspense>
  );
};
export default Routes;
