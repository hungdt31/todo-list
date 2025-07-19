import { Route, Routes } from 'react-router-dom';

import { routes } from '@/route';

export default function App() {
  return (
    <Routes>
      {routes.map((routeGroup, index) => (
        <Route key={index} element={<routeGroup.layout />}>
          {routeGroup.routes.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              element={<item.element />}
            />
          ))}
        </Route>
      ))}
    </Routes>
  );
}
