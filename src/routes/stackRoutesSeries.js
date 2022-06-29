import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Series from "../pages/Series";

const Stack = createNativeStackNavigator();

export default function StackRoutesSeries() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Series"
        component={Series}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
