<template>
  <v-container fluid>
    <!--显示角色身份-->
    <v-card dark color="blue darken-3" class="py-3 my-3">你是“{{ currentItem.area }}”病区的{{ roleType }}“{{ currentItem.name }}”，正在查询病房护士的信息</v-card>

    <!--展示病房护士信息-->
    <v-data-iterator :items="items" :items-per-page.sync="itemsPerPage" :page="page" hide-default-footer>
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
            <v-card link @click="currentNurse=item">
              <v-card-title class="subheading font-weight-bold">
                {{ item.name }}
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>

    <SearchPatientCharged v-if="currentNurse" :currentItem="currentNurse" :items="currentNurse.patients" />
  </v-container>
</template>

<script>
export default {
  name: 'SearchNurseWard',
  props: {
    currentItem: {
      type: Set,
      default: {}
    },
    roleType: {
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
      currentNurse: false,
      items: [
        {
          id: '8',
          name: '李斯特',
          patients: [
            {
              id: '1',
              name: '小王'
            },
            {
              id: '2',
              name: '小李'
            },
            {
              id: '3',
              name: '小张'
            },
            {
              id: '4',
              name: '大红'
            }
          ]
        },
        {
          id: '11',
          name: '詹姆斯',
          patients: [
            {
              id: '5',
              name: '小王'
            },
            {
              id: '6',
              name: '小李'
            },
            {
              id: '7',
              name: '小张'
            },
            {
              id: '8',
              name: '大红'
            }
          ]
        },
        {
          id: '9',
          name: '鳌拜',
          patients: [
            {
              id: '9',
              name: '小王'
            },
            {
              id: '10',
              name: '小李'
            },
            {
              id: '11',
              name: '小张'
            }
          ]
        },
        {
          id: '2',
          name: '摩卡',
          patients: [
            {
              id: '12',
              name: '小王'
            },
            {
              id: '13',
              name: '小李'
            },
            {
              id: '14',
              name: '小张'
            },
            {
              id: '15',
              name: '大红'
            }
          ]
        },
        {
          id: '13',
          name: '莫妮卡',
          patients: [
            {
              id: '16',
              name: '小王'
            },
            {
              id: '17',
              name: '小张'
            },
            {
              id: '18',
              name: '大红'
            }
          ]
        },
        {
          id: '777',
          name: '三三',
          patients: [
            {
              id: '19',
              name: '小王'
            },
            {
              id: '20',
              name: '小李'
            },
            {
              id: '21',
              name: '小张'
            }
          ]
        },
        {
          id: '19',
          name: '思思',
          patients: [
            {
              id: '22',
              name: '小王'
            },
            {
              id: '23',
              name: '大红'
            }
          ]
        },
        {
          id: '888',
          name: '捂捂',
          patients: [
            {
              id: '24',
              name: '小王'
            },
            {
              id: '25',
              name: '小李'
            },
            {
              id: '26',
              name: '小张'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
