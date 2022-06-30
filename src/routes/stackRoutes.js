import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Search from "../pages/Search";
import SideBarNavigator from "./sideBarNavigator";

const Stack = createNativeStackNavigator();

function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SideBar"
        component={SideBarNavigator}
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

export default StackRoutes;
