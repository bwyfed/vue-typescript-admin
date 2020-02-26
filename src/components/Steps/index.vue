<template>
  <div class="steps-component-container">
    <el-steps
      :active="currentStep"
      :align-center="true"
      finish-status="success"
    >
      <el-step
        @click.native="handleStepClick(index)"
        class="step"
        v-for="(title, index) of titles"
        :key="title"
      >
        <div slot="title">
          {{ title }}
        </div></el-step
      >
    </el-steps>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch, Prop } from 'vue-property-decorator';
import { StepsModule } from '@/store/modules/steps';

@Component({
  name: 'Steps',
})
export default class extends Vue {
  @Prop({ default: 0 }) private currentStep!: number;
  @Prop({
    default: () => {
      return ['基础信息', '地图及区域', '模型及工参', '其他配置', '确认信息'];
    },
  })
  private titles!: Array<string>;
  mounted() {
    const routeReverseMap = {
      '/dashboard/basicinfo': 1,
      '/dashboard/mapregion': 2,
      '/dashboard/modelparams': 3,
      '/dashboard/otherconfig': 4,
      '/dashboard/confirminfo': 5,
    } as any;
    StepsModule.SetCurrentStep(routeReverseMap[this.$route.path]);
  }

  private handleStepClick(args: number) {
    console.log(args);
    StepsModule.SetCurrentStep(args + 1);
    const routeMap = {
      1: 'DashboardBasicInfo',
      2: 'DashboardMapRegion',
      3: 'DashboardModelParams',
      4: 'DashboardOtherConfig',
      5: 'DashboardConfirmInfo',
    } as any;
    this.$router.push({ name: routeMap[args + 1] });
  }
}
</script>
<style lang="less">
.steps-component-container {
  .el-steps {
    text-align: left;
    :hover {
      background-color: aqua;
    }
  }
}
</style>
