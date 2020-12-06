<template>
  <v-container fluid>
    <!--显示角色身份-->
    <v-card dark color="blue darken-3" class="py-3 my-3">你是“{{ currentItem.area }}”病区的病房护士“{{ currentItem.name }}”，正在登记病人“{{ currentPatient.name }}”的每日信息</v-card>
    <!--填写病人信息-->
    <v-card>
      <v-text-field disabled class="px-5 pt-5" v-model="currentPatient.name" label="姓名"></v-text-field>

      <v-divider></v-divider>

      <v-text-field class="px-5 pt-5" v-model="patient.temperature" label="体温"></v-text-field>

      <v-select offset-y class="px-5 pt-5" v-model="patient.lifeState" :items="selectItem.items" :label="selectItem.text" dense></v-select>

      <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date" transition="scale-transition" offset-y min-width="290px">
        <template v-slot:activator="{ on, attrs }">
          <v-text-field class="px-5 pt-5" v-model="patient.data" label="日期" readonly v-bind="attrs" v-on="on"></v-text-field>
        </template>
        <v-date-picker :min="currentPatient.checkInDate" :max="today" v-model="patient.data" year-icon="mdi-calendar-blank" prev-icon="mdi-skip-previous" next-icon="mdi-skip-next"></v-date-picker>
      </v-menu>

      <v-col><v-btn class="mb-4" dark elevation="2" color="blue darken-3">登记病人每日信息</v-btn></v-col>

    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'AddDailyInfo',
  props: {
    currentItem: {
      type: Set,
      default: {}
    },
    currentPatient: {
      type: Set,
      default: {}
    }
  },
  data () {
    return {
      today: new Date().toISOString().substr(0, 10),
      menu: false,
      keys: ['testResult', 'illnessLevel'],
      selectItem: {
        text: '生命状态',
        items: ['康复出院', '在院治疗', '病亡']
      },
      patient: {
        data: new Date().toISOString().substr(0, 10)
      }
    }
  }
}
</script>

<style scoped>

</style>
