import { createRoot } from 'react-dom/client';
import './variables.css';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
