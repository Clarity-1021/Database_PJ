<template>
<div class="d-flex flex-row overflow-x-auto overflow-y-hidden" style="min-height: 100vh">
  <v-navigation-drawer style="min-width: 200px; min-height: 100vh" permanent>

    <v-list><!--版头-->
      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="title">包治百病医疗系统</v-list-item-title>
          <v-list-item-subtitle>欢迎您~</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider><!--分割线-->

    <v-list nav dense><!--列表-->
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item v-for="(item, i) in menuItems" :key="i" @click="currentMenuItem=item.text">

          <!--logo-->
          <v-list-item-icon><v-icon v-text="item.icon"></v-icon></v-list-item-icon>

          <!--角色-->
          <v-list-item-content><v-list-item-title v-text="item.text"></v-list-item-title></v-list-item-content>

        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
  <Doctor v-if="currentMenuItem==='主治医师'" :items="doctors" />
  <NurseHead v-if="currentMenuItem==='护士长'" :items="nurseHeads" />
  <NurseEmergency v-if="currentMenuItem==='急诊护士'" :items="nurseEmergencys" />
  <NurseWard v-if="currentMenuItem==='病房护士'" :items="nurseWards" />
</div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    selectedItem: 3,
    currentMenuItem: '病房护士',
    menuItems: [
      { text: '主治医师', icon: 'mdi-badge-account-horizontal' },
      { text: '护士长', icon: 'mdi-face-woman-shimmer' },
      { text: '急诊护士', icon: 'mdi-face-shimmer' },
      { text: '病房护士', icon: 'mdi-face-shimmer-outline' }
    ],
    doctors: [
      {
        id: '1',
        name: '李斯特',
        area: '轻症'
      },
      {
        id: '2',
        name: '李斯特',
        area: '重症'
      },
      {
        id: '3',
        name: '李斯特',
        area: '危重症'
      }
    ],
    nurseHeads: [
      {
        id: '1',
        name: '张美丽',
        area: '轻症'
      },
      {
        id: '2',
        name: '张美丽',
        area: '重症'
      },
      {
        id: '3',
        name: '张美丽',
        area: '危重症'
      }
    ],
    nurseEmergencys: [
      {
        id: '1',
        name: '李漂亮'
      },
      {
        id: '2',
        name: '肖漂亮'
      },
      {
        id: '3',
        name: '大漂亮'
      },
      {
        id: '4',
        name: '张漂亮'
      },
      {
        id: '5',
        name: '王漂亮'
      },
      {
        id: '6',
        name: '陈漂亮'
      }
    ],
    nurseWards: [
      {
        id: '1',
        name: '张美丽',
        area: '轻症'
      },
      {
        id: '2',
        name: '张美丽',
        area: '重症'
      },
      {
        id: '3',
        name: '张美丽',
        area: '危重症'
      },
      {
        id: '4',
        name: '张美丽',
        area: '轻症'
      },
      {
        id: '5',
        name: '张美丽',
        area: '危重症'
      },
      {
        id: '6',
        name: '张美丽',
        area: '危重症'
      }
    ]
  })
}
</script>

<style scoped>

</style>
