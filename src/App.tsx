import AppRouter, { AppRoutes, routes } from 'router/index';
import { SWRConfigProvider } from './providers';

function App() {
  return (
    <SWRConfigProvider>
      <AppRouter>
        <AppRoutes routes={routes} />
      </AppRouter>
    </SWRConfigProvider>
  );
}

export default App;
