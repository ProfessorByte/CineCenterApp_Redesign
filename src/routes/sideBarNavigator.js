import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackRoutesCinema from "./stackRoutesCinema";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Home from "../pages/Home";
import ActionMovies from "../pages/Search/actionMovies";
import AdventureMovies from "../pages/Search/adventureMovies";
import AnimationMovies from "../pages/Search/animationMovies";
import ComedyMovies from "../pages/Search/comedyMovies";
import DramaMovies from "../pages/Search/dramaMovies";
import FantasyMovies from "../pages/Search/FantasyMovies";
import HorrorMovies from "../pages/Search/HorrorMovies";
import MusicMovies from "../pages/Search/MusicMovies";
import MysteryMovies from "../pages/Search/MysteryMovies";
import RomanceMovies from "../pages/Search/RomanceMovies";
import ScienceFictionMovies from "../pages/Search/ScienceFictionMovies";

const Drawer = createDrawerNavigator();

export default function SideBarNavigator() {
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
        name="Home"
        component={Home}
        options={{
          title: "Recomendaciones",
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={focused ? "movie-open" : "movie-outline"}
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="ActionMovies"
        component={ActionMovies}
        options={{
          title: "Acción",
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={focused ? "movie-open" : "movie-outline"}
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="AdventureMovies"
        component={AdventureMovies}
        options={{
          title: "Aventura",
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={focused ? "movie-open" : "movie-outline"}
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="AnimationMovies"
        component={AnimationMovies}
        options={{
          title: "Animación",
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={focused ? "movie-open" : "movie-outline"}
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="ComedyMovies"
        component={ComedyMovies}
        options={{
          title: "Comedia",
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={focused ? "movie-open" : "movie-outline"}
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="DramaMovies"
        component={DramaMovies}
        options={{
          title: "Drama",
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={focused ? "movie-open" : "movie-outline"}
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="FantasyMovies"
        component={FantasyMovies}
        options={{
          title: "Fantasía",
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={focused ? "movie-open" : "movie-outline"}
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="HorrorMovies"
        component={HorrorMovies}
        options={{
          title: "Terror",
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={focused ? "movie-open" : "movie-outline"}
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="MusicMovies"
        component={MusicMovies}
        options={{
          title: "Música",
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={focused ? "movie-open" : "movie-outline"}
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="MysteryMovies"
        component={MysteryMovies}
        options={{
          title: "Misterio",
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={focused ? "movie-open" : "movie-outline"}
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="RomanceMovies"
        component={RomanceMovies}
        options={{
          title: "Romance",
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={focused ? "movie-open" : "movie-outline"}
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="ScienceFictionMovies"
        component={ScienceFictionMovies}
        options={{
          title: "Ciencia Ficción",
          drawerIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={focused ? "movie-open" : "movie-outline"}
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
