import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {RouterProvider} from "react-router-dom";

import {persistor, store} from './store/store.ts';
import {router} from "./routes/router.tsx";

import './styles/global.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <RouterProvider router={router}/>
    </PersistGate>
  </Provider>,
);
