<template>
  <v-container fluid>
    <!--显示角色身份-->
    <v-card dark color="blue darken-3" class="py-3 my-3">你是急诊护士“{{ currentItem.name }}”，正在登记病人入院信息</v-card>

    <!--填写病人信息-->
    <v-card>
      <v-text-field class="px-5 pt-5" v-model="patient.name" label="姓名"></v-text-field>

      <v-divider></v-divider>

      <v-select v-for="(selectItem, index) in selectItems" :key="index" offset-y class="px-5 pt-5" v-model="patient[keys[index]]" :items="selectItem.items" :label="selectItem.text" dense></v-select>

      <v-col><v-btn class="mb-4" dark elevation="2" color="blue darken-3">登记病人入院信息</v-btn></v-col>

    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'AddPatient',
  props: {
    currentItem: {
      type: Set,
      default: {}
    }
  },
  data () {
    return {
      keys: ['testResult', 'illnessLevel'],
      selectItems: [
        {
          text: '核酸检测结果',
          items: ['阳性', '阴性']
        },
        {
          text: '病情评级',
          items: ['轻症', '重症', '危重症']
        }
      ],
      patient: {}
    }
  }
}
</script>

<style scoped>

</style>
