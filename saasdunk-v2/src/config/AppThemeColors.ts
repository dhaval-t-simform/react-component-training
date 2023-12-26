import { ThemeType } from "../contextProviders/ChangeThemeProvider";
export interface ColorValues {
  primary: string;
}
export interface CommonVariables {
  white: string;
  whiteBorder20: string;
  whiteBorder30: string;
  grayText100: string;
  grayText80: string;
  grayText70: string;
  grayBorder20: string;
  grayBorder30: string;
  greenText: string;
  blueBg100: string;
  blueBg70: string;
  blueBorder80: string;
  violet60: string;
  tag: string;
  tagBg: string;
  contentBg: string;
  inputBg: string;
  boxShadowBlack: string;
}

const commonVariables: CommonVariables = {
  white: "#fff",
  whiteBorder20: "#eceff8",
  whiteBorder30: "#eaedf7",
  grayText100: "#242f57",
  grayText80: "#636e95",
  grayText70: "#97a0c3",
  grayBorder30: "#d2d5e1",
  grayBorder20: "#e2e5f0",
  greenText: "#04b78a",
  blueBg100: "#369afe",
  blueBg70: "#2994ff",
  blueBorder80: "#2291ff",
  violet60: "9390f3",
  tag: "#434bff",
  tagBg: "#e4e5ff",
  contentBg: "#f4f7fc",
  inputBg: "#fafcfe",
  boxShadowBlack: "#1c295a",
};

const AppThemeColors: Record<ThemeType, ColorValues & CommonVariables> = {
  Default: {
    primary: "#0080ff",
    ...commonVariables,
  },

  WhiteMode: {
    primary: "#fff",
    ...commonVariables,
  },
};

export default AppThemeColors;
