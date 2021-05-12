import {createApp} from 'vue'
import App from './App.vue'
import router from "@/route";
import installElementPlus from './plugins/element'

const app = createApp(App)
app.use(router)
installElementPlus(app)
app.mount('#app')
