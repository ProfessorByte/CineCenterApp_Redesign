import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView } from "react-native";
import api, { key } from "../../services/api";
import { Container, Title, BannerButton, Banner, SliderMovie } from "./styles";

import { useNavigation } from "@react-navigation/native";
import { randomBanner } from "../../utils/movie";
import SliderItem from "../../components/SliderItem";
import HeaderMainPage from "../../components/Header/HeaderMainPage";

export default function Cinema() {
  const LIST_IDS_ON_BILLBOARD = [756999, 718789, 507086, 361743];
  const LIST_IDS_COMMING_SOON = [616037];

  const [bannerMovie, setBannerMovie] = useState({});
  const [onBillboard, setOnBillboard] = useState([]);
  const [comingSoon, setComingSoon] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    let isActive = true;
    const ac = new AbortController();

    async function getMovies(idsOnBillboard, idsComingSoon) {
      const listOnBillboard = await Promise.all(
        idsOnBillboard.map(
          async (id) =>
            await api.get(`/movie/${id}`, {
              params: {
                api_key: key,
                language: "es-BO",
              },
            })
        )
      );
      const listComingSoon = await Promise.all(
        idsComingSoon.map(
          async (id) =>
            await api.get(`/movie/${id}`, {
              params: {
                api_key: key,
                language: "es-BO",
              },
            })
        )
      );
      if (isActive) {
        setOnBillboard([]);
        setComingSoon([]);
        listOnBillboard.forEach((movie) => {
          setOnBillboard((prev) => [...prev, movie.data]);
        });
        listComingSoon.forEach((movie) => {
          setComingSoon((prev) => [...prev, movie.data]);
        });
        setLoading(false);
      }
    }

    getMovies(LIST_IDS_ON_BILLBOARD, LIST_IDS_COMMING_SOON);

    return () => {
      isActive = false;
      ac.abort();
    };
  }, []);

  useEffect(() => {
    setBannerMovie(onBillboard[randomBanner(onBillboard)]);
  }, [onBillboard]);

  function navigateDetailsPage(item) {
    navigation.navigate("Detail", { uri: `/movie/${item?.id}` });
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
      <HeaderMainPage title="Cine Center" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>En cartelera</Title>

        <BannerButton
          activeOpacity={0.8}
          onPress={() => navigateDetailsPage(bannerMovie)}
        >
          <Banner
            resizeMethod="resize"
            source={{
              uri: `https://image.tmdb.org/t/p/original/${bannerMovie?.poster_path}`,
            }}
          />
        </BannerButton>

        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={onBillboard}
          renderItem={({ item }) => (
            <SliderItem
              data={item}
              navigatePage={() => navigateDetailsPage(item)}
            />
          )}
          keyExtractor={(item) => String(item.id)}
        />

        <Title>Próximamente</Title>

        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={comingSoon}
          renderItem={({ item }) => (
            <SliderItem
              data={item}
              navigatePage={() => navigateDetailsPage(item)}
            />
          )}
          keyExtractor={(item) => String(item.id)}
        />
      </ScrollView>
    </Container>
  );
}
