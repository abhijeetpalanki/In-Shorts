import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  SafeAreaView,
  Platform,
} from "react-native";
import React from "react";
import moment from "moment/moment";

const Article = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: props.urlToImage,
        }}
      />

      <View style={{ padding: 20 }}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description} numberOfLines={3}>
          {props.description}
        </Text>

        <View style={styles.data}>
          <Text style={styles.heading}>
            by:
            <Text style={styles.author}>{props.author}</Text>
          </Text>
          <Text style={styles.date}>
            {moment(props.publishedAt).format("MMM Do YY")}
          </Text>
        </View>

        <View style={{ marginTop: 10 }}>
          <Text>
            source: <Text style={styles.source}>{props.sourceName}</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    borderRadius: 40,
    shadowOpacity: 0.5,
    shadowColor: "#000",
    shadowOffset: {
      height: 5,
      width: 5,
    },
    elevation: Platform.OS === "android" && 25,
    backgroundColor: "#fff",
    marginTop: 20,
  },
  image: {
    height: 200,
    width: "100%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
    marginTop: 10,
  },
  data: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  heading: {},
  author: {
    fontWeight: "bold",
  },
  date: {
    fontWeight: "bold",
    color: "#023047",
    fontSize: 15,
  },
  source: {
    color: "#023047",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default Article;
