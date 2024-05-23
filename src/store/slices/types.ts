export interface OnboardingState {
  step: number;
  contentStep: number;
  swhoWhatsApp: boolean;
}

export interface mudebuAIState {
  haveBenchmarks: boolean;
  benchmarkList: string[];
  blendList: string[];
  editImage: boolean;
  brushRadius: number;
  brushRadiusEditor: boolean;
  reloadEditor: boolean;
}
