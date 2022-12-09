import { createRoot } from 'react-dom/client';

import App from './App';
import { NavigationProvider } from './context/navigation';
import './styles/index.css';

const container = document.getElementById('root');

createRoot(container).render(
	<NavigationProvider>
		<App />
	</NavigationProvider>
);
