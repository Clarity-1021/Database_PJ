<template>
  <v-container fluid>
    <!--显示角色身份-->
    <v-card dark color="blue darken-3" class="py-3 my-3">你是“{{ currentItem.area }}”病区的护士长“{{ currentItem.name }}”，正在增加病房护士</v-card>

    <!--填写病房护士信息-->
    <v-card>
      <v-text-field class="px-5 pt-5" v-model="nurseWard.name" label="姓名"></v-text-field>

      <v-divider></v-divider>

      <v-select offset-y class="px-5 pt-5" v-model="nurseWard.gender" :items="selectItem.items" :label="selectItem.text" dense></v-select>

      <v-col><v-btn class="mb-4" dark elevation="2" color="blue darken-3">添加病房护士</v-btn></v-col>

    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'AddNurseWard',
  props: {
    currentItem: {
      type: Set,
      default: {}
    }
  },
  data () {
    return {
      selectItem: {
        text: '性别',
        items: ['男', '女', '无性别']
      },
      nurseWard: {}
    }
  }
}
</script>

<style scoped>

</style>
