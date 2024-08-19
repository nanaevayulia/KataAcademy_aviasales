import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './redux/store';
import App from './components/app';
import './index.module.scss';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
