import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CameraScreen from "./cameraScreen";
import SignOutScreen from "./signOutScreen";
import ImageClassifier from "./objectDetectionScreen";
import { stylesMain } from "./style";

const Tab = createMaterialTopTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({})}
      tabBarOptions={{
        activeTintColor: "#87CEEB", // Active tab text color
        inactiveTintColor: "white", // Inactive tab text color
        labelStyle: { fontSize: 16, fontWeight: "bold" }, // Tab label style
        style: stylesMain.tabBar, // Tab bar style
      }}
    >
      <Tab.Screen name="Capture" component={CameraScreen} />

      <Tab.Screen name="Classify" component={ImageClassifier} />
      <Tab.Screen name="SignOut" component={SignOutScreen} />
    </Tab.Navigator>
  );
};

export default MainScreen;
