<template>
  <v-container fluid>
<!--    Doctor-->
    <!--选择区域-->
    <v-card class="d-flex flex-row justify-space-around py-2">
<!--    <v-row class="d-flex flex-row justify-space-around" style="border: solid">-->
      <v-btn v-for="(area, i) in areas" :key="i" v-text="area.text" color="primary" elevation="2" @click="areaType=area.text"></v-btn>
    </v-card>
    <v-container fluid>
<!--    <v-container fluid style="border: solid">-->
<!--    <v-container v-if="areaType" fluid style="border: solid">-->
      <v-card class="py-2"><span class="text--disabled">你是</span>{{ areaType }}<span class="text--disabled">病区的主治医师</span></v-card>
      <v-row class="my-5">
        <!--    <v-row class="d-flex flex-row justify-space-between my-5" style="border: solid">-->
        <!--    <v-row v-if="areaType!==''">-->
        <v-col cols="3">
          <v-select class="my-3 mx-5" v-for="(selectItem, i) in selectItems" :key="i" :items="selectItem.items" :label="selectItem.text" dense></v-select>
        </v-col>
      </v-row>
      <v-row class="d-flex flex-row justify-center my-5">
        <!--    <v-row class="d-flex flex-row justify-space-between my-5" style="border: solid">-->
        <!--    <v-row v-if="areaType!==''">-->
        <v-col cols="4"><v-btn class="my-3 mx-5" v-text="checkBtnText" color="primary" elevation="2"></v-btn></v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: 'Doctor',
  data: () => ({
    areas: [
      { text: '轻症' },
      { text: '重症' },
      { text: '危重症' }
    ],
    areaType: false,
    selectItems: [
      { text: '是否出院', items: ['是', '否', '所有'] },
      { text: '是否待转入其他病房', items: ['是', '否', '所有'] },
      { text: '生命状态', items: ['康复出院', '在院治疗', '病亡', '所有'] }
    ],
    checkBtnText: '查询病人'
  })
}
</script>

<style scoped>

</style>
