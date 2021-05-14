<template>
  <div class="dashboard-container">
    ModuleA ...11
    <keyboard height="900px" width="100%" />
    <h1>22222</h1>
    <Test />
    <LineMarker height="500px" width="100%" />
    <MarkdownEditor />
  </div>
</template>
<script>
import { Keyboard, LineMarker, Test, MarkdownEditor } from "admin-component";
// import Keyboard from '../../../../framework/src/components/Charts/Keyboard.vue';
export default {
  components: {
    Keyboard, LineMarker, Test, MarkdownEditor
  }
};
</script>
