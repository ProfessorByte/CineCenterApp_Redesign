import React from "react";

import { MaterialIcons } from "@expo/vector-icons";

import { Container, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";

function HeaderMainPage({ title }) {
  const navigation = useNavigation();

  return (
    <Container>
      <MaterialIcons name="local-movies" size={36} color="#E50914" />
      <Title>{title}</Title>
    </Container>
  );
}

export default HeaderMainPage;
