import React, { useEffect } from "react";
import { Text, View, Button, Image, ScrollView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DATA } from "../../data";
import { AppHeaderIcon } from "../../components/appHeaderIcon/AppHeaderIcon";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { THEME } from "../../theme";
import { postScreenStyles } from "./postScreenStyles";
import { useSelector, useDispatch } from "react-redux";
import { bookPost, removePost } from "../../redux/actions/postAction";

const PostScreen = ({ route }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { postId } = route.params;
  const post = DATA.find((el) => el.id === postId);
  const onRemovePostClicked = () => {
    dispatch(removePost(postId));
    navigation.navigate("MainScreen");
  };

  const onBookPostClicked = () => {
    dispatch(bookPost(post));
    navigation.navigate("MainScreen");
  };

  const removeHandler = () => {
    Alert.alert("Удаление поста", "Вы точно хотите удалить пост?", [
      {
        text: "Отменить",
        style: "cancel",
      },
      { text: "Удалить", style: "destructive", onPress: onRemovePostClicked },
    ]);
  };
  return (
    <ScrollView>
      <Image source={{ uri: post.img }} style={postScreenStyles.image} />
      <View style={postScreenStyles.textWrap}>
        <Text style={postScreenStyles.title}>{post.text}</Text>
      </View>
      <View style={postScreenStyles.actions}>
        <Button
          title={post.booked ? "Убрать из избранного" : "В избранное"}
          color={THEME.WARNING_COLOR}
          onPress={() => onBookPostClicked()}
        />
        <Button
          title="Удалить"
          color={THEME.DANGER_COLOR}
          onPress={() => removeHandler()}
        />
      </View>
    </ScrollView>
  );
};
PostScreen.navigationOption = ({ route }) => {
  const { date, booked } = route.params;
  const iconName = booked ? "ios-star" : "ios-star-outline";
  return {
    headerTitle: "Пост от " + new Date(date).toLocaleDateString(),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item title="Take photo" iconName={iconName} />
      </HeaderButtons>
    ),
  };
};

export default PostScreen;
