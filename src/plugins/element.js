import Vue from 'vue'
import {
    Button,
    Row,
    Col,
    Pagination,
    Loading,
    Tabs,
    TabPane,
    Dialog,
} from 'element-ui'

Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Pagination)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Dialog)

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;