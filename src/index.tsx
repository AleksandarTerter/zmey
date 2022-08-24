import './styles/style.scss';

import App from './App';
import { Router } from 'solid-app-router';
import { render } from 'solid-js/web';

render(() => <Router><App /></Router>, document.getElementById('root') as HTMLElement);
