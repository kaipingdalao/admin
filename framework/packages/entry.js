import Keyboard from '../src/components/Charts/Keyboard.vue'
import LineMarker from '../src/components/Charts/LineMarker.vue'
import Test from '../src/components/Charts/Test.vue'
import MarkdownEditor from '../src/components/MarkdownEditor/index.vue'

// // 添加插件
// Keyboard.install = (app) => app.component("Keyboard", keyboard);
// LineMarker.install = (app) => app.component("LineMarker", LineMarker);
// Test.install = (app) => app.component("Test", Test);

// 组件库
const AdminCommon = {
  Keyboard, LineMarker, Test, MarkdownEditor,
  install: app => {
    app.use(Keyboard)
    app.use(LineMarker)
    app.use(Test)
    app.use(MarkdownEditor)
  }
}

export { Keyboard, LineMarker, Test, MarkdownEditor }

export default AdminCommon
