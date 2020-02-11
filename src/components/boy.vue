<template>
  <div class="boy-container">
    <div>男孩</div>
    <div>手上有 {{ currentFlower }} 朵花</div>
    <div>
      <el-button @click="sendFlowerLocal({ sendNumber: 1 })">送1朵花</el-button>
      <el-button @click="buyFlower({ buyNumber: 1 })">买1朵花</el-button>
    </div>
    <div>勇气值：{{ braveScore }}</div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import { State, Action, Mutation, namespace } from 'vuex-class';
import { BoyState } from '@/store/modules/modules-types';

@Component
export default class boyComponent extends Vue {
  @State('boy')
  boyState!: BoyState;

  @Action('sendFlower', { namespace: 'boy' })
  sendFlowerLocal: any;

  @Action('buyFlower', { namespace: 'boy' })
  buyFlower: any;

  get currentFlower(): number {
    return this.boyState.currentFlower;
  }

  get braveScore(): number {
    return this.boyState.braveScore;
  }
}
</script>
