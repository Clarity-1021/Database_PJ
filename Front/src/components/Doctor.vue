<template>
  <v-container style="min-width: 900px" fluid>
    <!--选择治疗区域-->
    <v-container fluid>
      <v-card class="d-flex flex-row justify-space-around py-3">
        <v-btn dark v-for="(area, i) in areas" :key="i" v-text="area.text" elevation="2" color="blue darken-3" @click="areaType=area.text"></v-btn>
      </v-card>
    </v-container>

    <v-container fluid v-if="areaType">
      <v-card class="d-flex flex-row justify-space-around py-3">
        <v-btn dark v-for="(func, j) in funcs" :key="j" v-text="func.text" elevation="2" color="blue darken-3" @click="funcType=func.text"></v-btn>
        <v-btn v-if="areaType==='轻症'" dark elevation="2" color="blue darken-3" @click="funcType='决定出院'">决定出院</v-btn>
      </v-card>
    </v-container>
    <SearchPatient :areaType="areaType" v-if="funcType==='查询病人'" />
    <SearchNurseHead :area-type="areaType" v-if="funcType==='查询护士长'" />
    <SearchNurse :area-type="areaType" v-if="funcType==='查询病房护士'" />
    <EditIllnessLevel :area-type="areaType" v-if="funcType==='修改病情评级'" />
    <EditLifeState :area-type="areaType" v-if="funcType==='修改生命状态'" />
    <DoNAT :area-type="areaType" v-if="funcType==='核酸检测'" />
    <DecideCheckOut :area-type="areaType" v-if="funcType==='决定出院'" />
  </v-container>
</template>

<script>
export default {
  name: 'Doctor',
  computed: {
    numberOfPages () {
      return Math.ceil(this.items.length / this.patientsPerPage)
    }
  },
  methods: {
    nextPage () {
      if (this.page + 1 <= this.numberOfPages) this.page += 1
    },
    formerPage () {
      if (this.page - 1 >= 1) this.page -= 1
    },
    updatepatientsPerPage (number) {
      this.patientsPerPage = number
    }
  },
  data () {
    return {
      areas: [
        {text: '轻症'},
        {text: '重症'},
        {text: '危重症'}
      ],
      areaType: '轻症',
      // areaType: false,
      funcs: [
        {text: '查询病人'},
        {text: '查询护士长'},
        {text: '查询病房护士'},
        {text: '修改病情评级'},
        {text: '修改生命状态'},
        {text: '核酸检测'}
      ],
      funcType: '决定出院'
      // funcType: ''
    }
  }
}
</script>

<style scoped>

</style>
