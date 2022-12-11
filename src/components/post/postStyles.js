import { StyleSheet } from "react-native";

export const postStyles = StyleSheet.create({
  post: {
    marginBottom: 15,
    overflow: "hidden",
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: 200,
  },
  textWrap: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingVertical: 5,
    alignItems: "center",
    width: "100%",
  },
  title: {
    color: "#fff",
    fontFamily: "open-regular",
  },
});
