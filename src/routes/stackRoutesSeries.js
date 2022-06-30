import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detail from "../pages/Detail";
import Search from "../pages/Search";
import SideBarNavigatorSeries from "./sideBarNavigatorSeries";

const Stack = createNativeStackNavigator();

export default function StackRoutesSeries() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SideBarSeries"
        component={SideBarNavigatorSeries}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerShown: false,
          title: "Detalles",
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          title: "Página de búsqueda",
          headerTintColor: "#FFF",

          headerTitleStyle: {
            color: "#FFF",
          },

          headerStyle: {
            backgroundColor: "#141414",
          },
        }}
      />
    </Stack.Navigator>
  );
}
