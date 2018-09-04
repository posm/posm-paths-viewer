import { mainUi } from './views';
import Store from './store';
import Handler from './handler';
import css from './styles/main.css';

const mainStore = Store.getInstance(); mainStore.init();
const mainHandler = Handler.getInstance(); mainHandler.init();

window.onload = () => mainUi(mainStore.state).render();
