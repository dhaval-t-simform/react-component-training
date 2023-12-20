import { ThemeType } from "../contextProviders/ChangeThemeProvider";
export interface ColorValues {
  primary: string;
}
const AppThemeColors: Record<ThemeType, ColorValues> = {
  Default: {
    primary: "#0080ff",
  },

  WhiteMode: {
    primary: "#fff",
  },
};

export default AppThemeColors;
