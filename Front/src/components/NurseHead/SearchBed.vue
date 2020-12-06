<template>
  <v-container fluid>
    <!--显示角色身份-->
    <v-card dark color="blue darken-3" class="py-3 my-3">你是“{{ currentItem.area }}”病区的护士长“{{ currentItem.name }}”，正在查询病床</v-card>

    <!--展示病床信息-->
    <v-data-iterator :items="items" :items-per-page.sync="itemsPerPage" :page="page" hide-default-footer>
      <template v-slot:header>
        <v-toolbar dark color="blue darken-3" class="mb-1">

          <span>每页病床数量</span>
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
                {{ item.id }}
              </v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item>
                  <v-list-item-content class="font-weight-bold">
                    病人
                  </v-list-item-content>
                  <v-list-item-content class="align-end">
                    {{ item.patient.name }}
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
  name: 'SearchBed',
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
      itemsPerPageArray: [4, 8, 12],
      page: 1,
      itemsPerPage: 4,
      items: [
        {
          id: '123',
          patient: {
            id: '1',
            name: '小李'
          }
        },
        {
          id: '1234',
          patient: {
            id: '2',
            name: '小三'
          }
        },
        {
          id: '1233',
          patient: {
            id: '5',
            name: '小搜'
          }
        },
        {
          id: '1323',
          patient: {
            id: '6',
            name: '小无'
          }
        },
        {
          id: '1323',
          patient: {
            id: '7',
            name: '小留'
          }
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
