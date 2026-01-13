import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const COLORS = {
  PRIMARY: "",
  BACKGROUND: "",
  FOREGROUND: "",
  SECONDARY: "",
};
const SIZES = {
  WINDOW_WIDTH: width,
  WINDOW_HEIGHT: height,
  BASE: 10,
  XS: 12,
  SM: 14,
  MD: 16,
  LG: 18,
  XL: 20,
  XXL: 22,
  XXXL: 28,
};

export default {
  COLORS,
  SIZES,
};
