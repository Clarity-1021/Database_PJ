<template>
<div class="d-flex flex-row overflow-x-auto overflow-y-hidden" style="min-height: 100vh">
  <v-navigation-drawer style="min-width: 200px; min-height: 100vh" permanent>
<!--  <v-navigation-drawer permanent style="border: solid">-->

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
  <Doctor v-if="currentMenuItem==='主治医师'" />
<!--  <Doctor v-if="currentMenuItem==='主治医师'" style="border: solid" />-->
  <NurseHead v-if="currentMenuItem==='护士长'" style="border: solid" />
  <NurseEmergency v-if="currentMenuItem==='急诊护士'" style="border: solid" />
  <NurseWard v-if="currentMenuItem==='病房护士'" style="border: solid" />
</div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    selectedItem: 0,
    currentMenuItem: '主治医师',
    menuItems: [
      { text: '主治医师', icon: 'mdi-badge-account-horizontal' },
      { text: '护士长', icon: 'mdi-face-woman-shimmer' },
      { text: '急诊护士', icon: 'mdi-face-shimmer' },
      { text: '病房护士', icon: 'mdi-face-shimmer-outline' }
    ]
  })
}
</script>

<style scoped>

</style>
