import React from "react";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import StackRoutes from "./stackRoutes";
import StackRoutesCinema from "./stackRoutesCinema";
import StackRoutesSeries from "./stackRoutesSeries";
import StackRoutesSaved from "./stackRoutesSaved";

// const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          backgroundColor: "#090A0E",
          // paddingTop: 20,
        },

        tabBarActiveBackgroundColor: "#E50914",
        tabBarActiveTintColor: "#FFF",
        tabBarInactiveTintColor: "#FFF",
      }}
    >
      <Tab.Screen
        name="CinemaDrawer"
        component={StackRoutesCinema}
        options={{
          title: "Cine",
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name={"movie-roll"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="HomeDrawer"
        component={StackRoutes}
        options={{
          title: "Películas",
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name={focused ? "movie-open" : "movie-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SeriesDrawer"
        component={StackRoutesSeries}
        options={{
          title: "Series",
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name={"youtube-tv"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Movies"
        component={StackRoutesSaved}
        options={{
          title: "Guardados",
          tabBarIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name={focused ? "archive" : "archive-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Routes;
