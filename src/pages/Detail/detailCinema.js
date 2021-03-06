import React, { useState, useEffect } from "react";
import {
  Container,
  Header,
  HeaderButton,
  Banner,
  Title,
  ContentArea,
  Rate,
  ListGenres,
  Description,
  ButtonLinkCinema,
  ButtonTicket,
} from "./styles";

import { ScrollView, Modal, FlatList, Text } from "react-native";

import { Feather, Ionicons, Entypo } from "@expo/vector-icons";

import { useNavigation, useRoute } from "@react-navigation/native";
import api, { key } from "../../services/api";

import Stars from "react-native-stars";

import Genres from "../../components/Genres";
import ModalLink from "../../components/ModalLink";

import { saveMovie, hasMovie, deleteMovie } from "../../utils/storage";
import Person from "../../components/Person";

function DetailCinema() {
  const navigation = useNavigation();
  const route = useRoute();

  const [movie, setMovie] = useState({});
  const [people, setPeople] = useState([]);
  const [openLink, setOpenLink] = useState(false);
  const [favoritedMovie, setFavoritedMovie] = useState(false);
  const [currentLink, setCurrentLink] = useState("");

  useEffect(() => {
    let isActive = true;

    async function getMovie() {
      const response = await api
        .get(route.params?.uri, {
          params: {
            api_key: key,
            language: "es-BO",
          },
        })
        .catch((err) => {
          console.log(err);
        });

      if (isActive) {
        setMovie(response.data);

        const isFavorite = await hasMovie(response.data);
        setFavoritedMovie(isFavorite);
        // console.log(response.data);
      }
    }

    if (isActive) {
      getMovie();
    }

    return () => {
      isActive = false;
    };
  }, []);

  useEffect(() => {
    async function getPeople() {
      const response = await api
        .get(`/${movie?.title ? "movie" : "tv"}/${movie?.id}/credits`, {
          params: {
            api_key: key,
            language: "es-BO",
          },
        })
        .catch((err) => {
          console.log(err);
        });

      setPeople(response?.data.cast);
    }

    if (movie.title || movie.name) {
      getPeople();
    }
  }, [movie]);

  async function handleFavoriteMovie(movie) {
    if (favoritedMovie) {
      await deleteMovie(movie.id);
      setFavoritedMovie(false);
      alert("El elemento ha sido eliminado de tu lista.");
    } else {
      await saveMovie("@reactflix", movie);
      setFavoritedMovie(true);
      alert("Elemento guardado con ??xito en tu lista.");
    }
  }

  function handleOpenLink(link) {
    setCurrentLink(link);
    setOpenLink(true);
  }

  return (
    <Container>
      <Header>
        <HeaderButton activeOpacity={0.7} onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={28} color="#FFF" />
        </HeaderButton>

        <HeaderButton onPress={() => handleFavoriteMovie(movie)}>
          {favoritedMovie ? (
            <Ionicons name="bookmark" size={28} color="#FFF" />
          ) : (
            <Ionicons name="bookmark-outline" size={28} color="#FFF" />
          )}
        </HeaderButton>
      </Header>

      <Banner
        resizeMethod="resize"
        source={{
          uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
        }}
      />

      {movie?.homepage ? (
        <ButtonLinkCinema onPress={() => handleOpenLink(movie?.homepage)}>
          <Feather name="link" size={24} color="#FFF" />
        </ButtonLinkCinema>
      ) : (
        <></>
      )}
      <ButtonTicket onPress={() => handleOpenLink(route.params?.linkCinema)}>
        <Entypo name="ticket" size={24} color="#FFF" />
      </ButtonTicket>

      <Title numberOfLines={2}>{movie.title ? movie.title : movie.name}</Title>

      <ContentArea>
        <Text style={{ color: "#fff" }}>
          Estreno:{" "}
          {movie.release_date ? movie.release_date : movie.first_air_date}
        </Text>
        <Text style={{ color: "#fff" }}>
          {movie.episode_run_time ? "Duraci??n/Ep.::" : "Duraci??n:"}{" "}
          {movie.episode_run_time ? movie.episode_run_time : movie.runtime}{" "}
          minutos
        </Text>
      </ContentArea>

      <ContentArea>
        <Stars
          default={movie.vote_average}
          count={10}
          half={true}
          starSize={20}
          fullStar={<Ionicons name="md-star" size={24} color="#E7A74E" />}
          emptyStar={
            <Ionicons name="md-star-outline" size={24} color="#E7A74E" />
          }
          halfStar={<Ionicons name="md-star-half" size={24} color="#E7A74E" />}
          disabled={true}
        />
        <Rate>{movie.vote_average}/10</Rate>
      </ContentArea>

      <ListGenres
        data={movie?.genres}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Genres data={item} />}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Descripci??n</Title>
        {movie?.overview ? (
          <Description>{movie?.overview}</Description>
        ) : (
          <Description>Sin descripci??n.</Description>
        )}
        <Title>Actores</Title>
        {people && (
          <FlatList
            horizontal={true}
            data={people}
            keyExtractor={(item) => String(item?.id)}
            renderItem={({ item }) => <Person data={item} />}
          />
        )}
      </ScrollView>

      <Modal animationType="slide" transparent={true} visible={openLink}>
        <ModalLink
          link={currentLink}
          title={movie?.title}
          closeModal={() => setOpenLink(false)}
        />
      </Modal>
    </Container>
  );
}

export default DetailCinema;
