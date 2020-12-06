// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入vuetify
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

// 导入自己的组件
import Doctor from './components/Doctor'
import NurseEmergency from './components/NurseEmergency'
import NurseHead from './components/NurseHead'
import NurseWard from './components/NurseWard'
import SearchPatient from './components/Doctor/SearchPatient'
import SearchNurseHead from './components/Doctor/SearchNurseHead'
import SearchNurse from './components/Doctor/SearchNurse'
import SearchPatientCharged from './components/Doctor/WardNurse/SearchPatientCharged'
import EditIllnessLevel from './components/Doctor/EditIllnessLevel'
import EditLifeState from './components/Doctor/EditLifeState'
import DoNAT from './components/Doctor/DoNAT'
import DecideCheckOut from './components/Doctor/DecideCheckOut'

Vue.config.productionTip = false

// 使用vuetify
Vue.use(Vuetify)

// 全局引入组件
Vue.use(Doctor)
Vue.use(NurseWard)
Vue.use(NurseHead)
Vue.use(NurseEmergency)
Vue.use(SearchPatient)
Vue.use(SearchNurseHead)
Vue.use(SearchNurse)
Vue.use(SearchPatientCharged)
Vue.use(EditIllnessLevel)
Vue.use(EditLifeState)
Vue.use(DoNAT)
Vue.use(DecideCheckOut)

// 初始化组件
Vue.component('NurseWard', NurseWard)
Vue.component('NurseHead', NurseHead)
Vue.component('NurseEmergency', NurseEmergency)
Vue.component('Doctor', Doctor)
Vue.component('SearchPatient', SearchPatient)
Vue.component('SearchNurseHead', SearchNurseHead)
Vue.component('SearchNurse', SearchNurse)
Vue.component('SearchPatientCharged', SearchPatientCharged)
Vue.component('EditIllnessLevel', EditIllnessLevel)
Vue.component('EditLifeState', EditLifeState)
Vue.component('DoNAT', DoNAT)
Vue.component('DecideCheckOut', DecideCheckOut)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // 初始化Vuetify
  vuetify: new Vuetify({
    icons: {
      iconfont: 'mdi' // default - only for display purposes
    }
  }),
  // 注册组件
  components: {
    App,
    Doctor,
    NurseHead,
    NurseEmergency,
    NurseWard,
    SearchPatient,
    SearchNurseHead,
    SearchNurse,
    SearchPatientCharged,
    EditIllnessLevel,
    EditLifeState,
    DoNAT,
    DecideCheckOut
  },
  template: '<App/>'
})
