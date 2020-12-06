<template>
  <v-container style="min-width: 900px" fluid>
    <v-container fluid>
      <v-card dark color="blue darken-3" class="py-3">所有的主治医生</v-card>
    </v-container>

    <!--选择主治医生-->
    <v-container fluid>
      <v-data-iterator :items="items" hide-default-footer>
        <template v-slot:default="props">
          <v-row>
            <v-col v-for="item in props.items" :key="item.id" cols="12" sm="6" md="4" lg="3">
              <v-card link @click="currentItem=item">
                <v-card-title class="subheading font-weight-bold">
                  {{ item.name }}
                </v-card-title>

                <v-divider></v-divider>

                <v-list dense>
                  <v-list-item>
                    <v-list-item-content class="font-weight-bold">
                      负责区域
                    </v-list-item-content>
                    <v-list-item-content class="align-end">
                      {{ item.area }}
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </template>
      </v-data-iterator>
    </v-container>

    <v-container fluid v-if="currentItem">
      <v-card class="d-flex flex-row justify-space-around py-3">
        <v-btn dark v-for="(func, j) in funcs" :key="j" v-text="func.text" elevation="2" color="blue darken-3" @click="funcType=func.text"></v-btn>
        <v-btn v-if="currentItem.area==='轻症'" dark elevation="2" color="blue darken-3" @click="funcType='决定出院'">决定出院</v-btn>
      </v-card>
    </v-container>

    <SearchPatient :currentItem="currentItem" roleType="主治医师" v-if="funcType==='查询病人'" />
    <SearchNurseHead :currentItem="currentItem" v-if="funcType==='查询护士长'" />
    <SearchNurseWard :currentItem="currentItem" roleType="主治医师" v-if="funcType==='查询病房护士'" />
    <EditIllnessLevel :currentItem="currentItem" v-if="funcType==='修改病情评级'" />
    <EditLifeState :currentItem="currentItem" v-if="funcType==='修改生命状态'" />
    <DoNAT :currentItem="currentItem" v-if="funcType==='核酸检测'" />
    <DecideCheckOut :currentItem="currentItem" v-if="funcType==='决定出院'" />
  </v-container>
</template>

<script>
export default {
  name: 'Doctor',
  props: {
    items: {
      Type: Set,
      default: []
    }
  },
  data () {
    return {
      // currentItem: {
      //   id: '1',
      //   name: '李斯特',
      //   area: '轻症'
      // },
      currentItem: false,
      funcs: [
        {text: '查询病人'},
        {text: '查询护士长'},
        {text: '查询病房护士'},
        {text: '修改病情评级'},
        {text: '修改生命状态'},
        {text: '核酸检测'}
      ],
      // funcType: '决定出院'
      funcType: ''
    }
  }
}
</script>

<style scoped>

</style>
