import React, { useState, useEffect } from "react";
import { Container, ListMovies } from "./styles";

import SearchItem from "../../components/SearchItem";

import api, { key } from "../../services/api";

import { useNavigation } from "@react-navigation/native";
import { ActivityIndicator } from "react-native";
import Header from "../../components/Header";

function HorrorMovies() {
  const navigation = useNavigation();

  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isActive = true;

    async function getSearchMovie() {
      const response = await api.get("/discover/movie", {
        params: {
          with_genres: 27,
          api_key: key,
          language: "es-BO",
          page: 1,
        },
      });

      if (isActive) {
        setMovie(response.data.results);
        setLoading(false);
      }
    }

    if (isActive) {
      getSearchMovie();
    }

    return () => {
      isActive = false;
    };
  }, []);

  function navigateDetailsPage(item) {
    navigation.navigate("Detail", {
      uri: `/movie/${item?.id}`,
    });
  }

  if (loading) {
    return (
      <Container>
        <ActivityIndicator size="large" color="#FFF" />
      </Container>
    );
  }

  return (
    <Container>
      <Header title={"Terror"} />
      <ListMovies
        data={movie}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <SearchItem
            data={item}
            navigatePage={() => navigateDetailsPage(item)}
          />
        )}
      />
    </Container>
  );
}

export default HorrorMovies;
