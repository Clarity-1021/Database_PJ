<template>
  <v-container fluid>
    <!--显示角色身份-->
    <v-card dark color="blue darken-3" class="py-3 my-3">你是“{{ currentItem.area }}”病区的主治医师“{{ currentItem.name }}”，正在对病人核酸检测</v-card>

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

              <v-select v-for="(selectItem, j) in selectItems" :key="j" offset-y class="px-5 pt-5" :items="selectItem.items" :label="selectItem.text" dense></v-select>

              <v-col><v-btn class="mb-4" dark elevation="2" color="blue darken-3">核酸检测</v-btn></v-col>

            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
export default {
  name: 'DoNAT',
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
      selectItems: [
        {
          text: '病情评级',
          items: ['轻症', '重症', '危重症']
        },
        {
          text: '检测结果',
          items: ['阴性', '阳性']
        }
      ],
      itemsPerPageArray: [4, 8, 12],
      page: 1,
      itemsPerPage: 4,
      items: [
        {
          id: '123',
          name: '李斯特'
        },
        {
          id: '1234',
          name: '讲文明'
        },
        {
          id: '124',
          name: '有礼貌'
        },
        {
          id: '143',
          name: '不说'
        },
        {
          id: '1232',
          name: '脏话'
        },
        {
          id: '127',
          name: '好'
        },
        {
          id: '128',
          name: '习惯'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
