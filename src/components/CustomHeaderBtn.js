import React from "react";
import { HeaderButton, Item } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../theme/colors";

export const CustomHeaderBtn = (props) => {
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  return (
    <HeaderButton
      IconComponent={Ionicons}
      iconSize={23}
      {...props}
      color={colors.ui.selected}
    />
  );
};
