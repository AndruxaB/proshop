import { createRoot } from 'react-dom/client';
import './index.css';
import './bootstrap.min.css';
import App from './App';

// // Global state
// import reducer, { initialState } from './state/reducer';
// import { StateProvider } from './state/StateProvider';
import { StoreProvider } from './store/StoreProvider';

const root = createRoot(document.getElementById('root'));

// root.render(<StateProvider reducer={rootReducer} initialState={initialState} children={<App />} />);
root.render(<StoreProvider children={<App />} />);
