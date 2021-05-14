<template>
  <div class="chart-container">
    <h1>222 </h1>
<!--    <keyboard height="100%" width="100%" />-->
  </div>
</template>

<script>
import Chart from '@/components/Charts/Keyboard'
import { Keyboard } from "admin-component";
// import Keyboard from '../../../../framework/src/components/Charts/Keyboard.vue';

export default {
  name: 'KeyboardChart',
  components: { Keyboard },
}
</script>
    Keyboard

<style scoped>
.chart-container{
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
</style>

