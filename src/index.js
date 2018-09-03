import { mainUi } from './views';
import Store from './store';

const mainStore = Store.getInstance(); 
mainStore.init();

window.onload = () => {
    mainUi(mainStore).render();
}
