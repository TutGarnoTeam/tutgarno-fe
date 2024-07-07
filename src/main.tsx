import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { Root } from './Root.tsx';
import { persistor, store } from './store/store.ts';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Root />
    </PersistGate>
  </Provider>,
);
