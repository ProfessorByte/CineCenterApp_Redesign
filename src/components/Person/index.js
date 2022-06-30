import { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import ModalLink from "../ModalLink";
import { ActorImage } from "./styles";

const defaultProfilePic = require("../../assets/person.png");

export default function Person({ data }) {
  const [openLink, setOpenLink] = useState(false);

  return (
    <View style={{ margin: 9 }}>
      <TouchableOpacity onPress={() => setOpenLink(true)}>
        <ActorImage
          source={
            data.profile_path
              ? {
                  uri: `https://image.tmdb.org/t/p/w500/${data.profile_path}`,
                }
              : defaultProfilePic
          }
        />
        <Text
          style={{ color: "#fff", width: 100, overflow: "hidden" }}
          numberOfLines={1}
        >
          {data.name}
        </Text>
      </TouchableOpacity>

      <Modal animationType="slide" transparent={true} visible={openLink}>
        <ModalLink
          link={`https://www.google.com/search?q=${data.name}`}
          title={data.name}
          closeModal={() => setOpenLink(false)}
        />
      </Modal>
    </View>
  );
}
