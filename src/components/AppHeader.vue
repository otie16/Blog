<template>
  <div>
   <a-menu v-model="current" mode="horizontal">

      <a-menu-item key="mail"> <a-icon type="" />afric foods </a-menu-item>
      <a-menu-item key="news"> <a-icon type="" />News </a-menu-item>
      <a-menu-item key="foods"> <a-icon type="" />Foods </a-menu-item>
      <a-menu-item key="product"> <a-icon type="" />Products </a-menu-item>
      
      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper"
          ><a-icon type="setting" />Navigation Three - Submenu</span
        >
        <a-menu-item-group title="Item 1">
          <a-menu-item key="setting:1">
            Option 1
          </a-menu-item>
          <a-menu-item key="setting:2">
            Option 2
          </a-menu-item>
        </a-menu-item-group>
        <a-menu-item-group title="Item 2">
          <a-menu-item key="setting:3">
            Option 3
          </a-menu-item>
          <a-menu-item key="setting:4">
            Option 4
          </a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>  
 </a-menu>
 </div>
</template>

<script>
export default {};
</script>

<style scoped>

</style>