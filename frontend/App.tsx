import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Svg, Path } from "react-native-svg";

import { getStatusBarHeight } from "react-native-status-bar-height";

import { LoginPage } from "./src/component/LoginPage";
import { ExpoCameraPage } from "./src/component/ExpoCameraPage";

export default function App() {
  return (
    <>
      <ExpoCameraPage />
    </>
  );
}

const stylesheet = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flex: 0.6,
    alignItems: "center",

    marginTop: getStatusBarHeight(),
  },

  headertext: {
    paddingTop: "20%",
    fontSize: 25,
  },

  body: {
    flex: 1.5,
    backgroundColor: "yellow",
  },

  footer: {
    flex: 1.4,
  },

  _image_1: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 0,
    opacity: 1,
    right: "auto",
    top: 0,
    bottom: "auto",
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" }],
    backgroundColor: "rgba(0,0,0,0)",
  },

  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "#3498db",
  },
  fabookButton: {
    backgroundColor: "#3b5998",
  },
  googleButton: {
    backgroundColor: "#ff0000",
  },
  kakaoButton: {
    backgroundColor: "#f9e000",
  },

  loginText: {
    color: "white",
  },
  restoreButtonContainer: {
    width: 250,
    marginBottom: 15,
    alignItems: "flex-end",
  },
  socialButtonContent: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  socialIcon: {
    color: "#FFFFFF",
    marginRight: 5,
  },
  icon: {
    width: 30,
    height: 30,
  },

  logincontainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

const imageUrl_image_1 =
  "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/fe45c1fbd6a959d2d502bf5e016fd5c7";
