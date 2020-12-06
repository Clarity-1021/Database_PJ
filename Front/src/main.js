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
import SearchNurseWard from './components/Doctor/SearchNurseWard'
import SearchPatientCharged from './components/Doctor/NurseWard/SearchPatientCharged'
import EditIllnessLevel from './components/Doctor/EditIllnessLevel'
import EditLifeState from './components/Doctor/EditLifeState'
import DoNAT from './components/Doctor/DoNAT'
import DecideCheckOut from './components/Doctor/DecideCheckOut'
import AddNurseWard from './components/NurseHead/AddNurseWard'
import RemoveNurseWard from './components/NurseHead/RemoveNurseWard'
import SearchBed from './components/NurseHead/SearchBed'
import AddPatient from './components/NurseEmergency/AddPatient'
import SearchAllPatient from './components/NurseEmergency/SearchAllPatient'
import SearchPatientNurseWard from './components/NurseWard/SearchPatientNurseWard'
import AddDailyPatientInfo from './components/NurseWard/AddDailyPatientInfo'
import AddDailyInfo from './components/NurseWard/Add/AddDailyInfo'

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
Vue.use(SearchNurseWard)
Vue.use(SearchPatientCharged)
Vue.use(EditIllnessLevel)
Vue.use(EditLifeState)
Vue.use(DoNAT)
Vue.use(DecideCheckOut)
Vue.use(AddNurseWard)
Vue.use(RemoveNurseWard)
Vue.use(SearchBed)
Vue.use(AddPatient)
Vue.use(SearchAllPatient)
Vue.use(SearchPatientNurseWard)
Vue.use(AddDailyPatientInfo)
Vue.use(AddDailyInfo)

// 初始化组件
Vue.component('NurseWard', NurseWard)
Vue.component('NurseHead', NurseHead)
Vue.component('NurseEmergency', NurseEmergency)
Vue.component('Doctor', Doctor)
Vue.component('SearchPatient', SearchPatient)
Vue.component('SearchNurseHead', SearchNurseHead)
Vue.component('SearchNurseWard', SearchNurseWard)
Vue.component('SearchPatientCharged', SearchPatientCharged)
Vue.component('EditIllnessLevel', EditIllnessLevel)
Vue.component('EditLifeState', EditLifeState)
Vue.component('DoNAT', DoNAT)
Vue.component('DecideCheckOut', DecideCheckOut)
Vue.component('AddNurseWard', AddNurseWard)
Vue.component('RemoveNurseWard', RemoveNurseWard)
Vue.component('SearchBed', SearchBed)
Vue.component('AddPatient', AddPatient)
Vue.component('SearchAllPatient', SearchAllPatient)
Vue.component('SearchPatientNurseWard', SearchPatientNurseWard)
Vue.component('AddDailyPatientInfo', AddDailyPatientInfo)
Vue.component('AddDailyInfo', AddDailyInfo)

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
    SearchNurseWard,
    SearchPatientCharged,
    EditIllnessLevel,
    EditLifeState,
    DoNAT,
    DecideCheckOut,
    AddNurseWard,
    RemoveNurseWard,
    SearchBed,
    AddPatient,
    SearchAllPatient,
    SearchPatientNurseWard,
    AddDailyPatientInfo,
    AddDailyInfo
  },
  template: '<App/>'
})
