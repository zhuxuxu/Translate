import Vue from 'vue'
import Router from 'vue-router'
import  TranslateForm from '../components/TranslateForm.vue'
import  TranslateOutput from '../components/TranslateOutput'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'translateForm',
      component: TranslateForm
    },
    {
      path: '/translateOutput',
      name: 'translateOutput',
      component: TranslateOutput
    },
  ]
})
