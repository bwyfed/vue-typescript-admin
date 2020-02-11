<template>
  <div id="boy-girl-container">
    <el-row>
      <el-col :span="4" :offset="10">
        <div class="grid-content bg-purple">
          库存有 {{ stateFlowersInStock }} 朵花
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <boyComp class="boy"></boyComp>
      </el-col>
      <el-col :span="12">
        <girlComp class="girl"></girlComp>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';
import boyComp from '@/components/boy.vue';
import girlComp from '@/components/girl.vue';
import { RootState } from '@/store/root-types';

@Component({
  components: {
    boyComp,
    girlComp
  }
})
export default class boyGirl extends Vue {
  @State('flowersInStock') stateFlowersInStock!: RootState;
}
</script>
<style lang="less" scoped>
.boy,
.girl {
  height: 80vh;
  color: white;
  font-size: 40px;
  text-align: center;
}
.boy {
  background-color: #409eff;
}
.girl {
  background-color: #f56c6c;
}
</style>
