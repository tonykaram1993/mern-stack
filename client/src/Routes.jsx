import React from 'react';
import { Switch, Route } from 'react-router-dom';

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

const Home = React.lazy(() => import('./containers/Home'));
const NotFound = React.lazy(() => import('./components/NotFound'));

function Routes(props) {
  return (
    <React.Suspense fallback={loading()}>
      <Switch>
        <Route component={Home} exact path="/" />

        {/* Finally, catch all unmatched routes */}
        <Route component={NotFound} />
      </Switch>
    </React.Suspense>
  );
}

export default Routes;
