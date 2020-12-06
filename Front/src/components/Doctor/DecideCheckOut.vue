<template>
  <v-container fluid>
    <!--显示角色身份-->
    <v-card dark color="blue darken-3" class="py-3 my-3">你是“{{ areaType }}”病区的主治医师，正在决定病人是否出院</v-card>

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
                <v-list-item>
                  <v-list-item-content class="font-weight-bold">是否满足出院条件</v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ item.checkOut }}
                  </v-list-item-content>
                </v-list-item>
              </v-list>

              <v-col><v-btn class="my-1" dark elevation="2" color="blue darken-3">决定出院</v-btn></v-col>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
export default {
  name: 'DecideCheckOut',
  props: {
    areaType: {
      type: String,
      default: ''
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
      items: [
        {
          id: '9',
          name: '李斯特',
          checkOut: '满足'
        },
        {
          id: '11',
          name: '好医生',
          checkOut: '满足'
        },
        {
          id: '3',
          name: '包治',
          checkOut: '不满足'
        },
        {
          id: '5',
          name: '白冰',
          checkOut: '不满足'
        },
        {
          id: '7',
          name: '不愧',
          checkOut: '满足'
        },
        {
          id: '1',
          name: '是你',
          checkOut: '不满足'
        },
        {
          id: '8',
          name: '老李',
          checkOut: '满足'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
