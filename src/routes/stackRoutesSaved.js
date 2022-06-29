import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detail from "../pages/Detail";
import Movies from "../pages/Movies";

const Stack = createNativeStackNavigator();

export default function StackRoutesSaved() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Saved"
        component={Movies}
        options={{
          headerShown: false,
          title: "Guardados",
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
    </Stack.Navigator>
  );
}
