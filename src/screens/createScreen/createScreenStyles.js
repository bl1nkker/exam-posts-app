import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const createScreenStyles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: "open-regular",
    backgroundColor: THEME.MAIN_COLOR,
    color: "#fff",
    width: "100%",
    textAlign: "center",
    padding: 10,
  },

  form: {
    margin: 20,
    width: "100%",
  },

  textInput: {
    padding: 10,
    marginLeft: 30,
    marginBottom: 10,
    marginRight: 30,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 2,
  },

  preview: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderColor: THEME.MAIN_COLOR,
    borderWidth: 2,
  },
});
