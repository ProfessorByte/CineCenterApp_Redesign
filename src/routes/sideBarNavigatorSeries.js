import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Series from "../pages/Series";
import ActionAdventureSeries from "../pages/Search/actionAdventureSeries";
import AnimationSeries from "../pages/Search/animationSeries";
import ComedySeries from "../pages/Search/comedySeries";
import CrimeSeries from "../pages/Search/crimeSeries";
import DocumentarySeries from "../pages/Search/documentarySeries";
import DramaSeries from "../pages/Search/dramaSeries";
import FamilySeries from "../pages/Search/familySeries";
import MysterySeries from "../pages/Search/mysterySeries";
import SciFiFantasySeries from "../pages/Search/sciFiFantasySeries";

export default function SideBarNavigatorSeries() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,

        drawerStyle: {
          backgroundColor: "#090A0E",
          paddingTop: 20,
        },

        drawerActiveBackgroundColor: "#E50914",
        drawerActiveTintColor: "#FFF",
        drawerInactiveTintColor: "#FFF",
      }}
    >
      <Drawer.Screen
        name="Series"
        component={Series}
        options={{
          title: "Recomendaciones",
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={"youtube-tv"}
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="ActionAdventureSeries"
        component={ActionAdventureSeries}
        options={{
          title: "Acción y Aventuras",
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={"youtube-tv"}
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="AnimationSeries"
        component={AnimationSeries}
        options={{
          title: "Animación",
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={"youtube-tv"}
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="ComedySeries"
        component={ComedySeries}
        options={{
          title: "Comedia",
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={"youtube-tv"}
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="CrimeSeries"
        component={CrimeSeries}
        options={{
          title: "Crimen",
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={"youtube-tv"}
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="DocumentarySeries"
        component={DocumentarySeries}
        options={{
          title: "Documental",
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={"youtube-tv"}
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="DramaSeries"
        component={DramaSeries}
        options={{
          title: "Drama",
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={"youtube-tv"}
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="FamilySeries"
        component={FamilySeries}
        options={{
          title: "Familia",
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={"youtube-tv"}
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="MysterySeries"
        component={MysterySeries}
        options={{
          title: "Misterio",
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={"youtube-tv"}
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="SciFiFantasySeries"
        component={SciFiFantasySeries}
        options={{
          title: "Sci-Fi y Fantasía",
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={"youtube-tv"}
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}
