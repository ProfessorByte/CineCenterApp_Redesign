import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cinema from "../pages/Cinema";

const Stack = createNativeStackNavigator();

export default function StackRoutesCinema() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Cinema"
        component={Cinema}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
