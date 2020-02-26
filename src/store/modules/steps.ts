import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule,
} from 'vuex-module-decorators';

import store from '@/store';

export interface IStepsState {
  currentStep: number;
}

@Module({ dynamic: true, store, name: 'steps' })
class Steps extends VuexModule implements IStepsState {
  public currentStep = 0;

  @Mutation
  private SET_CURRENT_STEP(step: number) {
    this.currentStep = step;
  }

  @Action
  public SetCurrentStep(step: number) {
    this.SET_CURRENT_STEP(step);
  }
}

export const StepsModule = getModule(Steps);
