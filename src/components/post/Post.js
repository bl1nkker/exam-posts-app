import React from "react";
import { Text, View, ImageBackground, TouchableOpacity } from "react-native";
import { postStyles } from "./postStyles";

export const Post = ({ post, onOpen }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(post)}>
      <View style={postStyles.post}>
        <ImageBackground style={postStyles.image} source={{ uri: post.img }}>
          <View style={postStyles.textWrap}>
            <Text style={postStyles.title}>{post.text}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};
