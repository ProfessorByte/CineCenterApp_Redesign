import "dotenv/config";

export default {
  expo: {
    name: "CenterApp",
    slug: "CenterApp",
    version: "1.1.0",
    orientation: "portrait",
    icon: "./assets/center_logo.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/center_logo.png",
      resizeMode: "contain",
      backgroundColor: "#000000",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/center_logo.png",
        backgroundColor: "#000000",
      },
      package: "com.professorbyte.centerapp",
    },
    web: {
      favicon: "./assets/center_logo.png",
    },
    extra: {
      tmdbApiKey: process.env.EXPO_APP_TMDB_APIKEY,
      firebaseApiKey: process.env.EXPO_APP_FIREBASE_APIKEY,
      firebaseAuthDomain: process.env.EXPO_APP_FIREBASE_AUTHDOMAIN,
      firebaseProjectId: process.env.EXPO_APP_FIREBASE_PROJECTID,
      firebaseStorageBucket: process.env.EXPO_APP_FIREBASE_STORAGEBUCKET,
      firebaseMessagingSenderId:
        process.env.EXPO_APP_FIREBASE_MESSAGINGSENDERID,
      firebaseAppId: process.env.EXPO_APP_FIREBASE_APPID,
      firebaseMeasurementId: process.env.EXPO_APP_FIREBASE_MEASUREMENTID,
    },
  },
};
