import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import "./http/requests"
import { Field, Icon, Swipe, SwipeItem, Cell, CellGroup, Switch, Search } from 'vant';

const app = createApp(App)
app.use(router)


app.use(Field)
app.use(Icon)
app.use(Swipe)
app.use(SwipeItem)
app.use(Cell)
app.use(CellGroup)
app.use(Switch)
app.use(Search)


app.mount('#app')
