import Vue from 'vue'
import {
    Button,
    Row,
    Col,
    Pagination,
    Loading,
    Tabs,
    TabPane,
} from 'element-ui'

Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Pagination)
Vue.use(Tabs)
Vue.use(TabPane)

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;