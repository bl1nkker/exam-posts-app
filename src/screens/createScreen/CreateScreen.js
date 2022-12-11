import React, { useState } from "react";
import { Text, View, Button, TextInput, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../../components/appHeaderIcon/AppHeaderIcon";
import { createScreenStyles } from "./createScreenStyles";
import { useSelector, useDispatch } from "react-redux";
import { createPost } from "../../redux/actions/postAction";

export const CreateScreen = ({}) => {
  const [text, setText] = useState("");
  const [img, setImg] = useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const onCreatePostClicked = () => {
    const post = {
      id: Date.now().toString(),
      date: Date.now().toString(),
      text: text,
      img: img,
      booked: false,
    };
    dispatch(createPost(post));
    navigation.navigate("MainScreen");
  };
  return (
    <View style={createScreenStyles.center}>
      <Text style={createScreenStyles.title}>Новый пост?</Text>

      <View style={createScreenStyles.form}>
        <TextInput
          style={createScreenStyles.textInput}
          placeholder="Введите текст поста"
          value={text}
          onChangeText={setText}
          multiline
        />
        <TextInput
          style={createScreenStyles.textInput}
          placeholder="Введите ссылку на картинку"
          value={img}
          onChangeText={setImg}
        />
      </View>
      <View style={createScreenStyles.preview}>
        {img ? (
          <Image style={createScreenStyles.image} source={{ uri: img }} />
        ) : (
          <Text style={createScreenStyles.previewHint}>
            {"Картинка не выбрана"}
          </Text>
        )}
      </View>
      <View style={createScreenStyles.actions}>
        <Button title="Create post" onPress={onCreatePostClicked} />
      </View>
    </View>
  );
};

CreateScreen.navigationOption = ({ navigation }) => ({
  headerTitle: "Создать пост",

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
