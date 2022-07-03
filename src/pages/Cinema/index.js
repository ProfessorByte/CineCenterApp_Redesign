import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView } from "react-native";
import api, { key } from "../../services/api";
import { Container, Title, BannerButton, Banner, SliderMovie } from "./styles";

import { useNavigation } from "@react-navigation/native";
import { randomBanner } from "../../utils/movie";
import SliderItem from "../../components/SliderItem";
import HeaderMainPage from "../../components/Header/HeaderMainPage";

import { db } from "../../services/database";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

export default function Cinema() {
  const [bannerMovie, setBannerMovie] = useState({});
  const [onBillboard, setOnBillboard] = useState([]);
  const [comingSoon, setComingSoon] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    let isActive = true;
    const ac = new AbortController();

    async function getMovies(itemsOnBillboard, itemsComingSoon) {
      const listOnBillboard = await Promise.all(
        itemsOnBillboard.map(
          async (item) =>
            await api.get(`/movie/${item.idTMDB}`, {
              params: {
                api_key: key,
                language: "es-BO",
              },
            })
        )
      );
      const listComingSoon = await Promise.all(
        itemsComingSoon.map(
          async (item) =>
            await api.get(`/movie/${item.idTMDB}`, {
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
        listOnBillboard.forEach((movie, index) => {
          setOnBillboard((prev) => [
            ...prev,
            { ...movie.data, linkCinema: itemsOnBillboard[index].linkCinema },
          ]);
        });
        listComingSoon.forEach((movie, index) => {
          setComingSoon((prev) => [
            ...prev,
            { ...movie.data, linkCinema: itemsComingSoon[index].linkCinema },
          ]);
        });
        setLoading(false);
      }
    }

    const billboardCollectionRef = collection(db, "billboard");
    const billboardQueryRef = query(
      billboardCollectionRef,
      orderBy("priority", "asc")
    );

    const comingSoonCollectionRef = collection(db, "comingSoon");
    const comingSoonQueryRef = query(
      comingSoonCollectionRef,
      orderBy("priority", "asc")
    );

    onSnapshot(billboardQueryRef, (snapshot) => {
      const itemsOnBillboard = snapshot.docs.map((doc) => doc.data());
      onSnapshot(comingSoonQueryRef, (snapshot) => {
        const itemsComingSoon = snapshot.docs.map((doc) => doc.data());
        getMovies(itemsOnBillboard, itemsComingSoon);
      });
    });

    return () => {
      isActive = false;
      ac.abort();
    };
  }, []);

  useEffect(() => {
    setBannerMovie(onBillboard[randomBanner(onBillboard)]);
  }, [onBillboard]);

  function navigateDetailsPage(item) {
    navigation.navigate("Detail", {
      uri: `/movie/${item?.id}`,
      linkCinema: item?.linkCinema,
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
