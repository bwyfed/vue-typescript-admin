<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <div class="app-main-container">
          <Steps
            v-if="!hideStepComp"
            class="step-container"
            :currentStep="currentStep"
          />
          <div style="background-color: white;">
            <router-view :key="key" />
          </div>
        </div>
      </keep-alive>
    </transition>
  </section>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Steps from '@/components/Steps/index.vue';
import { StepsModule } from '@/store/modules/steps';

@Component({
  name: 'AppMain',
  components: { Steps },
})
export default class extends Vue {
  get key() {
    return this.$route.path;
  }
  get currentStep() {
    return StepsModule.currentStep;
  }
  get hideStepComp() {
    const { activeMenu } = this.$route.meta;
    if (activeMenu === '/dashboard') return false;
    else return true;
  }
}
</script>
<style lang="less" scoped>
.app-main {
  // min-height: calc(100vh - @topBarHeight);
  height: calc(100vh - @topBarHeight);
  width: 100%;
  position: relative;
  overflow: auto;
  padding: 20px;
  .app-main-container {
    .step-container {
      background: white;
      margin: 0 auto;
      padding-top: 10px;
    }
  }
}
</style>
