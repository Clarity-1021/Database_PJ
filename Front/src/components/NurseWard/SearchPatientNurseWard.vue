<template>
  <v-container fluid>
    <!--显示角色身份-->
    <v-card dark color="blue darken-3" class="py-3 my-3">你是“{{ currentItem.area }}”病区的病房护士“{{ currentItem.name }}”，正在查询病人信息</v-card>

    <!--选择查询病人的条件-->
    <v-card class="mb-3">
      <!--筛选框-->
      <v-row class="my-3">
        <v-col v-for="(selectItem, i) in selectItems" :key="i" cols="4">
          <v-select offset-y class="py-3 px-3"  :items="selectItem.items" :label="selectItem.text" dense></v-select>
        </v-col>
      </v-row>

      <!--查询按钮-->
      <v-row>
        <v-col>
          <v-btn class="my-5 mx-5" v-text="checkBtnText" elevation="2"></v-btn>
        </v-col>
      </v-row>
    </v-card>

    <!--展示病人信息-->
    <v-data-iterator :items="items" :items-per-page.sync="itemsPerPage" :page="page" hide-default-footer>
      <template v-slot:header>
        <v-toolbar dark color="blue darken-3" class="mb-1">

          <span>每页病人数量</span>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn light text color="white" class="ml-2" v-bind="attrs" v-on="on">
                {{ itemsPerPage }}
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(number, index) in itemsPerPageArray" :key="index" @click="updateitemsPerPage(number)">
                <v-list-item-title>{{ number }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-spacer></v-spacer>

          <span class="mr-4">
              第 {{ page }} 页 共 {{ numberOfPages }} 页
          </span>
          <v-btn light fab small class="mr-1" @click="formerPage">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab light small class="ml-1" @click="nextPage">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>

        </v-toolbar>
      </template>

      <template v-slot:default="props">
        <v-row>
          <v-col v-for="item in props.items" :key="item.id" cols="12" sm="6" md="4" lg="3">
            <v-card>
              <v-card-title class="subheading font-weight-bold">
                {{ item.name }}
              </v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item v-for="(info, index) in itemsInfos" :key="index">
                  <v-list-item-content class="font-weight-bold">
                    {{ keys[index] }}
                  </v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ item[info] }}
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
export default {
  name: 'SearchPatientNurseWard',
  props: {
    currentItem: {
      type: Set,
      default: {}
    }
  },
  computed: {
    numberOfPages () {
      return Math.ceil(this.items.length / this.itemsPerPage)
    }
  },
  methods: {
    nextPage () {
      if (this.page + 1 <= this.numberOfPages) this.page += 1
    },
    formerPage () {
      if (this.page - 1 >= 1) this.page -= 1
    },
    updateitemsPerPage (number) {
      this.itemsPerPage = number
    }
  },
  data () {
    return {
      // areaType: '',
      selectItems: [
        {text: '是否满足出院条件', items: ['是', '否', '所有']},
        {text: '病情评级', items: ['轻症', '重症', '危重症', '所有']},
        {text: '生命状态', items: ['康复出院', '在院治疗', '病亡', '所有']}
      ],
      checkBtnText: '查询病人',
      itemsPerPageArray: [4, 8, 12],
      page: 1,
      itemsPerPage: 4,
      keys: [
        '是否满足出院条件',
        '病情评级',
        '生命状态'
      ],
      itemsInfos: [
        'checkOut',
        'illnessLevel',
        'lifeState'
      ],
      items: [
        {
          id: '123',
          name: '李斯特',
          checkOut: '是',
          illnessLevel: '轻症',
          lifeState: '在院治疗'
        },
        {
          id: '1234',
          name: '讲文明',
          checkOut: '是',
          illnessLevel: '轻症',
          lifeState: '在院治疗'
        },
        {
          id: '124',
          name: '有礼貌',
          checkOut: '否',
          illnessLevel: '轻症',
          lifeState: '康复出院'
        },
        {
          id: '143',
          name: '不说',
          checkOut: '否',
          illnessLevel: '轻症',
          lifeState: '在院治疗'
        },
        {
          id: '1232',
          name: '脏话',
          checkOut: '否',
          illnessLevel: '轻症',
          lifeState: '在院治疗'
        },
        {
          id: '127',
          name: '好',
          checkOut: '否',
          illnessLevel: '轻症',
          lifeState: '在院治疗'
        },
        {
          id: '128',
          name: '习惯',
          checkOut: '否',
          illnessLevel: '轻症',
          lifeState: '在院治疗'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
