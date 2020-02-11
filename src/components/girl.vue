<template>
  <div class="girl-container">
    <div>女孩</div>
    <div>手上有 {{ currentFlower }} 朵花</div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import { State, Action, Mutation, namespace } from 'vuex-class';
import { GirlState } from '@/store/modules/modules-types';
import { ElLoadingComponent } from 'element-ui/types/loading';

@Component
export default class girlComponent extends Vue {
  @State('girl') girlState!: GirlState;
  @Action('encourage', { namespace: 'girl' })
  encourageLocal: any;

  get currentFlower(): number {
    return this.girlState.currentFlower;
  }

  @Watch('currentFlower')
  onCurrentFlowerChanged() {
    if (!(this.currentFlower % 10)) {
      this.$message({
        showClose: true,
        message: '谢谢你小男孩！',
        type: 'success'
      });
      this.encourageLocal();
    }
  }
}
</script>
