import React from "react";
import { Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../../components/appHeaderIcon/AppHeaderIcon";
import { aboutScreenStyles } from "./aboutScreenStyles";

export const AboutScreen = ({}) => {
  return (
    <View style={aboutScreenStyles.center}>
      <Text>Отличное приложение для заметок</Text>
      <Text>
        Версия приложения
        <Text style={aboutScreenStyles.version}>1.0.0</Text>
      </Text>
    </View>
  );
};

AboutScreen.navigationOption = ({ navigation }) => ({
  headerTitle: "О приложении",

  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Togle Drawer"
        iconName="ios-menu"
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  ),
});
