<template>
  <v-container style="min-width: 900px" fluid>
    <v-container fluid>
      <v-card dark color="blue darken-3" class="py-3">所有的急诊护士</v-card>
      <!--展示急诊护士信息-->
      <v-data-iterator class="mt-3" :items="items" :items-per-page.sync="itemsPerPage" :page="page" hide-default-footer>
        <template v-slot:header>
          <v-toolbar dark color="blue darken-3" class="mb-1">

            <span>每页病房护士数量</span>
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
              <v-card link @click="currentItem=item">
                <v-card-title class="subheading font-weight-bold">
                  {{ item.name }}
                </v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </template>
      </v-data-iterator>
    </v-container>

    <v-container fluid v-if="currentItem">
      <v-card class="d-flex flex-row justify-space-around py-3">
        <v-btn dark v-for="(func, j) in funcs" :key="j" v-text="func.text" elevation="2" color="blue darken-3" @click="funcType=func.text"></v-btn>
      </v-card>
    </v-container>

    <AddPatient :currentItem="currentItem" v-if="funcType==='登记病人入院信息'" />
    <SearchAllPatient :currentItem="currentItem" v-if="funcType==='查询病人'" />
  </v-container>
</template>

<script>
export default {
  name: 'NurseEmergency',
  props: {
    items: {
      Type: Set,
      default: []
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
      itemsPerPageArray: [4, 8, 12],
      page: 1,
      itemsPerPage: 4,
      // currentItem: {
      //   id: '1',
      //   name: '肖漂亮'
      // },
      currentItem: false,
      funcs: [
        {text: '登记病人入院信息'},
        {text: '查询病人'}
      ],
      // funcType: '查询病人'
      funcType: ''
    }
  }
}
</script>

<style scoped>

</style>
