import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Theme from "@/styles/Theme";

type HeaderProps = {
  onPress: () => void;
};

const Header = ({ onPress }: HeaderProps) => {
  return (
    <View style={styles.header}>
      <Pressable style={styles.headerBtn} onPress={onPress}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
    paddingVertical: 4,
    paddingHorizontal: Theme.SIZES.BASE,
    backgroundColor: Theme.COLORS.BACKGROUND,
  },
  headerBtn: {
    backgroundColor: Theme.COLORS.SKELETON,
    padding: Theme.SIZES.BASE,
    borderRadius: Theme.SIZES.XXXL,
  },
});
