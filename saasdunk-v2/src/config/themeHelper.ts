import { Progress } from "antd";
import { ThemeType } from "../contextProviders/ChangeThemeProvider";
import AppThemeColors from "./AppThemeColors";

export const getColor = (theme: ThemeType) => {
  return AppThemeColors[theme];
};

export const getAntTheme = (theme: ThemeType) => {
  const themeColors = AppThemeColors[theme];
  // default for all app
  return {
    // fontFamily: `'Inter', sans-serif`,
    colorPrimary: themeColors.primary,
    // colorPrimaryBg: themeColors.primary,
  };
};

export const getAntComponent = (theme: ThemeType) => {
  const themeColors = AppThemeColors[theme];
  return {
    Button: {
      // controlHeight: 51,
      // controlHeightSX: 50,
      // controlHeightSM: 38,
      // controlHeightLG: 60,
      // colorBorder: themeColors.primary,
    },
  };
};
